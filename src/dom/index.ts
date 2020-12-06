import { funcMap } from '../func-mapper';

export const EL_ATTRIBUTE_NAME = 'data-rosebox-st-id';

export const camelCaseToDash = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const toCss = (style: any, selector: string) => {
    const initalAcc = `\n${selector} {\n`;
    return Object.keys(style).reduce((acc, key, idx) => {
        return (
            acc +
            '\t' +
            camelCaseToDash(key) +
            ': ' +
            ((funcMap as any)[key] ? (funcMap as any)[key]((style as any)[key]) : (style as any)[key]) +
            ';\n' +
            (idx === Object.keys(style).length - 1 ? '}' : '')
        );
    }, initalAcc);
};

export const createStyleTag = (css: string, id: string): HTMLStyleElement => {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.setAttribute('id', `${id}`);
    head.appendChild(style);
    style.appendChild(document.createTextNode(css));
    return style;
};

export const removeStyleTag = (id: string): void => {
    const styleTag = document.querySelector(`#${id}`);
    styleTag?.parentNode?.removeChild(styleTag);
};
