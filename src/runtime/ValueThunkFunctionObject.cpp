#include "Escargot.h"
#include "ValueThunkFunctionObject.h"

namespace Escargot {

void* ValueThunkFunctionObject::operator new(size_t size)
{
    static bool typeInited = false;
    static GC_descr descr;
    if (!typeInited) {
        GC_word obj_bitmap[GC_BITMAP_SIZE(ValueThunkFunctionObject)] = { 0 };

        FunctionObject::fillGCDescriptor(obj_bitmap);

        GC_set_bit(obj_bitmap, GC_WORD_OFFSET(ValueThunkFunctionObject, m_value));
        descr = GC_make_descriptor(obj_bitmap, GC_WORD_LEN(ValueThunkFunctionObject));
        typeInited = true;
    }
    return GC_MALLOC_EXPLICITLY_TYPED(size, descr);
}

ValueThunkFunctionObject::ValueThunkFunctionObject(ExecutionState& state, NativeFunctionInfo info, Value value)
    : NativeFunctionObject(state, info)
{
    m_value = value;
}
}
