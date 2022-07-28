<template>
  <div :class="[
      'gr-radio'+(this.options?'-group':'')
  ]">
    <label v-if="!options" :for="this.id">
      <input type="radio"
             :value="trueValue||value"
             :id="this.id"
             v-model="model"
      >
      <slot>{{label}}</slot>
    </label>
    <label :for="`${id}:${option.value}`" v-else v-for="option in options">
      <input type="radio"
             :id="`${id}:${option.value}`"
             :value="option.value"
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
  name: 'GrRadio',
  props: {
    id:{
      type:String,
      default(): string {
        return new Date().getTime().toString()
      }
    },
    modelValue:{},
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
    model:{
      immediate:true,
      handler(value){
        if(!this.options){
          return this.$emit('update:modelValue',value?this.trueValue||value:this.falseValue===undefined?value:this.falseValue)
        }
        this.$emit('update:modelValue',value)
      }
    }
  }
})
</script>
<style>
</style>
