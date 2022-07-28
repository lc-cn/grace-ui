<template>
  <div :class="[
      'gr-checkbox',
      this.options && 'group',
      vertical && 'vertical'
  ]">
    <label v-if="!options" :for="this.id">
      <input type="checkbox"
             :class="[
                 model && 'checked',
                 disabled && 'disabled',
                 size
             ]"
             :value="trueValue||value"
             :disabled="disabled"
             :id="this.id"
             v-model="model"
      >
      <slot>{{label}}</slot>
    </label>
    <label :for="`${id}:${option.value}`" v-else v-for="option in options">
      <input type="checkbox"
             :class="[
                 model.includes(option.value) && 'checked',
                 size
             ]"
             :id="`${id}:${option.value}`"
             :value="option.value"
             :disabled="disabled || option.disabled ||
             (max && model.length>=max && !model.includes(option.value)) ||
             (min !==undefined && model.length<=min && model.includes(option.value))"
             :key="option.value"
             v-model="model"
      >
      <slot>{{option.label}}</slot>
    </label>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
type Option= string|boolean|number|{
  label:string
  value:any
}
export default defineComponent({
  name: 'GrCheckbox',
  props: {
    id:{
      type:String,
      default(): string {
        return new Date().getTime().toString()
      }
    },
    disabled:Boolean,
    vertical:Boolean,
    max:Number,
    min:Number,
    modelValue:{},
    size:{
      type:String,
      default:'middle',
      validator(size:string){
        return ['large','middle','small'].includes(size)
      }
    },
    value:{
      default:true
    },
    trueValue:{
      default(){
        return true
      }
    },
    falseValue:{},
    options:{
      type:Array,
      validator(options:Option[]){
        return options.every((value)=>['string','number','boolean'].includes(typeof value)||Object.keys(value).every(k=>['label','disabled','value'].includes(k)))
      }
    },
    label:String
  },
  data(){
    return {
      model:this.options?this.modelValue:this.modelValue===this.trueValue
    }
  },
  watch:{
    modelValue(modelValue){
      this.model=this.options?modelValue:modelValue===this.trueValue
    },
    model:{
      handler(value){
        if(!this.options){
          let result
          if(typeof value==='boolean'){
            result=value?this.trueValue||true:this.falseValue||false
          }else{
            result=value===this.trueValue?this.trueValue:this.falseValue||false
          }
          return this.$emit('update:modelValue',result)
        }
        this.$emit('update:modelValue',value)
      }
    }
  }
})
</script>
