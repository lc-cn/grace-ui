
const trim = function(string:string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
export const on = (element:Element, event:string, handler:(...args:any[])=>any)=> {
    element.addEventListener(event, handler, false);
};

export const off = (element:Element, event:string, handler:(...args:any[])=>any)=> {
    if (element && event) {
        element.removeEventListener(event, handler, false);
    }
};

export const once = function(el:Element, event:string, fn:(...args:any[])=>any) {
    const listener = function(...arg:any[]) {
        if (fn) {
            fn(...arg);
        }
        off(el, event, listener);
    };
    on(el, event, listener);
};
export function hasClass(el:Element, cls:string) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
};

export function addClass(el:Element, cls:string) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName;
        }
    }
    if (!el.classList) {
        el.setAttribute('class', curClass);
    }
};

export function removeClass(el:Element, cls:string) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
    }
    if (!el.classList) {
        el.setAttribute('class', trim(curClass));
    }
};
