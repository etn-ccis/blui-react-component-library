// Use the child prop if it exists, or inherit from the parent prop
export const mergeStyleProp = <T extends unknown>(parentValue: T, childValue: T): T | undefined =>
    childValue !== undefined ? childValue : parentValue;
