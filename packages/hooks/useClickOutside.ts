import { unref } from "vue";
import {useListener} from "./useListener";

export function useClickOutside(target:EventTarget, handler:(...args:any[])=>any) {
    const event = "pointerdown";

    if (typeof window === 'undefined' || !window) {
        return;
    }

    const listener = (event:any) => {
        const el = unref(target);
        if (!el) {
            return;
        }

        if (el === event.target || event.composedPath().includes(el)) {
            return;
        }

        handler(event);
    };

    return useListener(window, event, listener);
}
