// @flow
import type {Component as ComponentType} from 'react';

export default function findWithHighOrderFunction(
    withHighOrderFunction: any,
    Component: Class<ComponentType<*, *>>
): Function {
    if (!withHighOrderFunction
        || !withHighOrderFunction.hasOwnProperty('mock')
        || withHighOrderFunction.mock.calls.length < 1
    ) {
        throw new Error('withHighOrderFunction needs to be an mock');
    }

    for (const call of withHighOrderFunction.mock.calls) {
        if (call[0] === Component) {
            return call[1];
        }
    }

    throw new Error('function not found');
}
