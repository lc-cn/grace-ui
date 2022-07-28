import {inject} from "vue";
export const useFormItem=()=>{
    const form=inject(Symbol('grForm'),undefined)
    const formItem=inject(Symbol('grFormItem'),undefined)
    return {
        form,
        formItem
    }
}
