import { ShallowWrapper, ReactWrapper } from 'enzyme';

export const findByTestId = (id: string, wrapper: ShallowWrapper | ReactWrapper): any =>
    wrapper.find(`[data-test="${id}"]`);

// https://stackoverflow.com/a/494348
export const getComputedStyleFromHTMLString = (str: string): CSSStyleDeclaration => {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.innerHTML = str;
    return window.getComputedStyle(wrapperDiv.firstElementChild);
};
