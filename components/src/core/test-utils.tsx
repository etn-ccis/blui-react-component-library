import React from 'react';
import { ShallowWrapper, ReactWrapper, mount } from 'enzyme';
import { Theme, ThemeProvider } from '@mui/material/styles';

export const findByTestId = (id: string, wrapper: ShallowWrapper | ReactWrapper): any =>
    wrapper.find(`[data-test="${id}"]`).hostNodes();

// https://stackoverflow.com/a/494348
export const getComputedStyleFromHTMLString = (str: string): CSSStyleDeclaration => {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.innerHTML = str;
    return window.getComputedStyle(wrapperDiv.firstElementChild);
};

/*eslint-disable */
export const mountWithTheme = (tree: any, theme: Theme) => {
    const WrappingThemeProvider = (props: any) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
    return mount(tree, { wrappingComponent: WrappingThemeProvider });
};