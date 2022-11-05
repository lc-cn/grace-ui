import {ref, onMounted, onBeforeUnmount, watch} from "vue";
export function useContent(slots:any, popperNode:any, content:any) {
    let observer:MutationObserver;
    const hasContent = ref(false);

    onMounted(() => {
        if (slots.content !== undefined || content.value) {
            hasContent.value = true;
        }

        observer = new MutationObserver(checkContent);
        observer.observe(popperNode.value, {
            childList: true,
            subtree: true,
        });
    });

    onBeforeUnmount(() => observer.disconnect());

    /**
     * Watch the content prop
     */
    watch(content, content => {
        if (content) {
            hasContent.value = true;
        } else {
            hasContent.value = false;
        }
    });

    /**
     * Check the content slot
     */
    const checkContent = () => {
        if (slots.content) {
            hasContent.value = true;
        } else {
            hasContent.value = false;
        }
    };

    return {
        hasContent,
    };
}
