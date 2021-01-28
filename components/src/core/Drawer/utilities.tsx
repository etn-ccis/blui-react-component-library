import React, { ReactNode } from 'react';

// Use the child prop if it exists, or inherit from the parent prop
export const mergeStyleProp = <T extends unknown>(parentValue: T, childValue: T): T | undefined =>
    childValue !== undefined ? childValue : parentValue;

export const findChildByType = (children: ReactNode, type: string[]): JSX.Element[] =>
    React.Children.map(children, (child: any) => {
        if (child && child.type) {
            const name = child.type.displayName;
            if (name && type.includes(name)) {
                return child;
            }
        }
    }) || [];
