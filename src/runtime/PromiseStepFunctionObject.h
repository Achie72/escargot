#ifndef __EscargotExtendedNativeFunctionObject__
#define __EscargotExtendedNativeFunctionObject__

#include "NativeFunctionObject.h"

namespace Escargot {

class ExtendedNativeFunctionObject : public NativeFunctionObject {
public:
    ExtendedNativeFunctionObject(ExecutionState& state, NativeFunctionInfo info, Value constructor, Value onFinally);

    Value getStepFunction()
    {
        return m_onFinally;
    }
    Value getConstructor()
    {
        return m_constructor;
    }

    virtual bool isExtendedNativeFunctionObject() const
    {
        return true;
    }

    void* operator new(size_t size);
    void* operator new[](size_t size) = delete;


private:
    Value m_onFinally;
    Value m_constructor;
};
}

#endif
