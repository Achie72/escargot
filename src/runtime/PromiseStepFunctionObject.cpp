#include "Escargot.h"
#include "ExtendedNativeFunctionObject.h"

namespace Escargot {

void* ExtendedNativeFunctionObject::operator new(size_t size)
{
    static bool typeInited = false;
    static GC_descr descr;
    if (!typeInited) {
        GC_word obj_bitmap[GC_BITMAP_SIZE(ExtendedNativeFunctionObject)] = { 0 };

        FunctionObject::fillGCDescriptor(obj_bitmap);

        GC_set_bit(obj_bitmap, GC_WORD_OFFSET(ExtendedNativeFunctionObject, m_onFinally));
        GC_set_bit(obj_bitmap, GC_WORD_OFFSET(ExtendedNativeFunctionObject, m_constructor));
        descr = GC_make_descriptor(obj_bitmap, GC_WORD_LEN(ExtendedNativeFunctionObject));

        typeInited = true;
    }
    return GC_MALLOC_EXPLICITLY_TYPED(size, descr);
}

ExtendedNativeFunctionObject::ExtendedNativeFunctionObject(ExecutionState& state, NativeFunctionInfo info, Value constructor, Value onFinally)
    : NativeFunctionObject(state, info)
{
    m_onFinally = onFinally;
    m_constructor = constructor;
}
}
