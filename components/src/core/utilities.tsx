import React from 'react';

export function interleave(array: any[], separator: () => JSX.Element): any[] {
    const output: any[] = [];
    array.forEach((element: any, index: number) => {
        if (index) {
            output.push(separator());
        }
        output.push(element);
    });
    return output;
}
export function separate(array: any[], interpunct: () => JSX.Element): any {
    return interleave(array, () => interpunct());
}
export function withKeys(array: any[]): any {
    return array.map((element, index) => <React.Fragment key={index}>{element}</React.Fragment>);
}
