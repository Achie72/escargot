#ifndef __EscargotValueThunkFunctionObject__
#define __EscargotValueThunkFunctionObject__

#include "NativeFunctionObject.h"

namespace Escargot {

class ValueThunkFunctionObject : public NativeFunctionObject {
public:
    ValueThunkFunctionObject(ExecutionState& state, NativeFunctionInfo info, Value value);

    virtual bool isValueThunkFunctionObject() const
    {
        return true;
    }

    Value getThunkValue()
    {
        return m_value;
    }

    void* operator new(size_t size);
    void* operator new[](size_t size) = delete;

private:
    Value m_value;
};
}

#endif
