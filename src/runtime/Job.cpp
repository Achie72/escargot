#ifdef ESCARGOT_ENABLE_PROMISE

#include "Escargot.h"
#include "Job.h"
#include "Context.h"
#include "FunctionObject.h"
#include "SandBox.h"

namespace Escargot {

SandBox::SandBoxResult PromiseReactionJob::run(ExecutionState& state)
{
    SandBox sandbox(state.context());
    return sandbox.run([&]() -> Value {
        /* 25.4.2.1.4 Handler is "Identity" case */
        if (m_reaction.m_handler == (FunctionObject*)1) {
            Value value[] = { m_argument };
            return FunctionObject::call(state, m_reaction.m_capability.m_resolveFunction, Value(), 1, value, false);
        }

        /* 25.4.2.1.5 Handler is "Thrower" case */
        if (m_reaction.m_handler == (FunctionObject*)2) {
            Value value[] = { m_argument };
            return FunctionObject::call(state, m_reaction.m_capability.m_rejectFunction, Value(), 1, value, false);
        }

        SandBox sb(state.context());
        auto res = sb.run([&]() -> Value {
            Value arguments[] = { m_argument };
            Value res = FunctionObject::call(state, m_reaction.m_handler, Value(), 1, arguments, false);
            // FIXME unregisterTryPos here in ES5
            Value value[] = { res };
            return FunctionObject::call(state, m_reaction.m_capability.m_resolveFunction, Value(), 1, value, false);
        });
        if (!res.error.isEmpty()) {
            Value reason[] = { res.error };
            return FunctionObject::call(state, m_reaction.m_capability.m_rejectFunction, Value(), 1, reason, false);
        }
        return res.result;
    });
}

SandBox::SandBoxResult PromiseResolveThenableJob::run(ExecutionState& state)
{
    SandBox sandbox(state.context());
    return sandbox.run([&]() -> Value {
        auto strings = &state.context()->staticStrings();
        PromiseReaction::Capability capability = m_promise->createResolvingFunctions(state);

        SandBox sb(state.context());
        auto res = sb.run([&]() -> Value {
            Value arguments[] = { capability.m_resolveFunction, capability.m_rejectFunction };
            Value thenCallResult = FunctionObject::call(state, m_then, m_thenable, 2, arguments, false);
            // TODO unregisterTryPos here in ES5
            Value value[] = { thenCallResult };
            return Value();
        });
        if (!res.error.isEmpty()) {
            Object* alreadyResolved = PromiseObject::resolvingFunctionAlreadyResolved(state, capability.m_resolveFunction);
            if (alreadyResolved->getOwnProperty(state, strings->value).value(state, alreadyResolved).asBoolean())
                return Value();
            alreadyResolved->setThrowsException(state, strings->value, Value(true), alreadyResolved);

            Value reason[] = { res.error };
            return FunctionObject::call(state, capability.m_rejectFunction, Value(), 1, reason, false);
        }
        return Value();
    });
}
}

#endif