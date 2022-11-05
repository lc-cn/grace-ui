import { isRef, watch, unref, onMounted, onBeforeUnmount } from "vue";
export function useListener(target:EventTarget, event:string, handler:(...args:any[])=>any) {
    if (isRef(target)) {
        watch(target, (value:EventTarget, oldValue:EventTarget) => {
            oldValue?.removeEventListener(event, handler);
            value?.addEventListener(event, handler);
        });
    } else {
        onMounted(() => {
            target.addEventListener(event, handler);
        });
    }

    onBeforeUnmount(() => {
        unref(target)?.removeEventListener(event, handler);
    });
}
