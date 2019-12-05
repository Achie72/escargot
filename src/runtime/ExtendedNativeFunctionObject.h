#ifndef __EscargotExtendedNativeFunctionObject__
#define __EscargotExtendedNativeFunctionObject__

#include "NativeFunctionObject.h"

namespace Escargot {

class ExtendedNativeFunctionObject : public NativeFunctionObject {
public:
    ExtendedNativeFunctionObject(ExecutionState& state, NativeFunctionInfo info, Value* values);

    virtual bool isExtendedNativeFunctionObject() const
    {
        return true;
    }

    Value* getInternalValues()
    {
        return m_values;
    }

    void* operator new(size_t size);
    void* operator new[](size_t size) = delete;


private:
    Value* m_values;
};
}

#endif
