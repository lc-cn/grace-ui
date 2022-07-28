<template>
  <div class="gr-input">
    <slot name="prefix">
      <gr-icon v-if="prefix" :name="prefix"></gr-icon>
    </slot>
    <input v-model.trim="model" :type="type">
    <slot name="suffix">
      <gr-icon v-if="suffix" :name="suffix"></gr-icon>
    </slot>
  </div>
</template>
<script lang='ts'>
import {GrIcon} from "../../componentList";
import {defineComponent} from 'vue'
function formatMoney(money:number, precision = 2, splitDesc = ','){
  precision = +precision
  const str = money.toFixed(precision)
  const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
  return str.replace(reg, '$1' + splitDesc)
}
export default defineComponent({
  name:'GrInput',
  components:{GrIcon},
  props:{
    prefix:String,
    suffix:String,
    modelValue:[String,Number,Date],
    modelModifiers:{
      default:()=>({})
    },
    trim:Boolean,
    type:{
      type:String,
      default:'text',
      validator(type:string){
        return ['textarea','text','password','number'].includes(type)
      }
    }
  },
  data(){
    return {
      model:this.modelValue
    }
  },
  watch:{
    model(value){
      if(this.modelModifiers.money) value=formatMoney(Number(value),0)
      if(this.modelModifiers.upper)value=value.toUpperCase()
      if(this.modelModifiers.lower)value=value.toLowerCase()
      this.$emit('update:modelValue',value)
    }
  }
})
</script>
<style>
</style>
