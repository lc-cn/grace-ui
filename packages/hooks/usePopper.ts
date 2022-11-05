import {toRefs, watch, nextTick, onBeforeUnmount, reactive} from "vue";
import {createPopper, OptionsGeneric} from "@popperjs/core/lib/popper-lite.js";
import preventOverflow from "@popperjs/core/lib/modifiers/preventOverflow.js";
import flip from "@popperjs/core/lib/modifiers/flip.js";
import offset from "@popperjs/core/lib/modifiers/offset";
import arrow from "@popperjs/core/lib/modifiers/arrow";

const toInt = (x: string) => parseInt(x, 10);

interface State {
    isOpen: boolean,
    popperInstance: any
}

export function usePopper(
    {
        arrowPadding,
        emit,
        locked,
        offsetDistance,
        offsetSkid,
        placement,
        popperNode,
        triggerNode,
    }: Record<string, any>) {
    const state = reactive<State>({
        isOpen: false,
        popperInstance: null,
    });

    // Enable or disable event listeners to optimize performance.
    const setPopperEventListeners = (enabled: boolean) => {
        state.popperInstance?.setOptions((options: Partial<OptionsGeneric<any>>) => ({
            ...options,
            modifiers: [...options.modifiers as any[], {name: "eventListeners", enabled}],
        }));
    };

    const enablePopperEventListeners = () => setPopperEventListeners(true);
    const disablePopperEventListeners = () => setPopperEventListeners(false);

    const close = () => {
        if (!state.isOpen) {
            return;
        }

        state.isOpen = false;
        emit("close:popper");
    };

    const open = () => {
        if (state.isOpen) {
            return;
        }

        state.isOpen = true;
        emit("open:popper");
    };

    // When isOpen or placement change
    watch([() => state.isOpen, placement], async ([isOpen]) => {
        if (isOpen) {
            await initializePopper();
            enablePopperEventListeners();
        } else {
            disablePopperEventListeners();
        }
    });

    const initializePopper = async () => {
        await nextTick();
        state.popperInstance = createPopper(triggerNode.value, popperNode.value, {
            placement: placement.value,
            modifiers: [
                preventOverflow,
                flip,
                {
                    name: "flip",
                    enabled: !locked.value,
                },
                arrow,
                {
                    name: "arrow",
                    options: {
                        padding: toInt(arrowPadding.value),
                    },
                },
                offset,
                {
                    name: "offset",
                    options: {
                        offset: [toInt(offsetSkid.value), toInt(offsetDistance.value)],
                    },
                },
            ],
        });
        state.popperInstance.update();
    };

    onBeforeUnmount(() => {
        state.popperInstance?.destroy();
    });

    return {
        ...toRefs(state),
        open,
        close,
    };
}
