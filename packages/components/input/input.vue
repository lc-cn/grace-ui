<template>
  <div v-if="type!=='textarea'"
       :class="[
        'gr-input',
        isFocus && 'focus',
        disabled && 'disabled',
        size]"
  >
    <slot name="prefix">
      <gr-icon v-if="prefix" :size="size" :name="prefix"></gr-icon>
    </slot>
    <input
        v-model="model"
        @focus="handelFocus"
        @blur="handelBlur"
        :type="showPwd?'text':type"
        :placeholder="placeholder"
        :disabled="disabled"
        v-bind="$attrs"
    >
    <gr-icon name="reeor" :size="size" v-if="clearable && String(model).length" @click="cleanValue"></gr-icon>
    <gr-icon :name="showPwd?'eye-close':'eye'" :size="size" v-if="type==='password'"
             @click="showPwd=!showPwd"></gr-icon>
    <slot name="suffix">
      <gr-icon v-if="suffix" :size="size" :name="suffix"></gr-icon>
    </slot>
  </div>
  <div class="gr-textarea-wrap" v-else>
    <textarea
        :class="[
         'gr-input',
         'textarea',
         showCount && max && 'has-count',
         disabled && 'disabled',
         size]"
        @focus="handelFocus"
        @blur="handelBlur"
        v-model="model"/>
    <span class="count" v-if="showCount && max">{{modelValue.length}}/{{max}}</span>
  </div>
</template>
<script lang='ts'>
import {GrIcon} from "../../componentList";
import {defineComponent} from 'vue'

function formatMoney(money: number, precision = 2, splitDesc = ',') {
  precision = +precision
  const str = money.toFixed(precision)
  const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
  return str.replace(reg, '$1' + splitDesc)
}

export default defineComponent({
  name: 'GrInput',
  components: {GrIcon},
  props: {
    prefix: String,
    suffix: String,
    modelValue: [String, Number, Date],
    disabled: Boolean,
    size: {
      type: String,
      default: 'middle',
      validator(size: string) {
        return ['large', 'middle', 'small'].includes(size)
      }
    },
    showCount:Boolean,
    max:Number,
    clearable: Boolean,
    placeholder: {
      type: String,
      default: '请输入',
    },
    modelModifiers: {
      default: () => ({})
    },
    trim: Boolean,
    autofocus: Boolean,
    type: {
      type: String,
      default: 'text',
      validator(type: string) {
        return ['textarea', 'text', 'password', 'number'].includes(type)
      }
    }
  },
  data() {
    return {
      model: this.modelValue,
      isFocus: false,
      showPwd: false,
      styles: {
        height: this.size
      }
    }
  },
  watch: {
    modelValue(value) {
      this.model = value
    },
    type(type) {
      if (type !== 'textarea') this.styles.height = 'unset'
    },
    model(value,oldValue) {
      if(this.showCount && this.max<value.length) return this.model=oldValue;
      if (this.modelModifiers.money) value = formatMoney(Number(value), 0)
      if (this.modelModifiers.upper) value = value.toUpperCase()
      if (this.modelModifiers.lower) value = value.toLowerCase()
      this.$emit('update:modelValue', value)
    }
  },
  methods: {
    handelFocus(e) {
      this.isFocus = true
      this.$emit('focus', e)
    },
    handelBlur(e) {
      this.isFocus = false
      this.$emit('blur', e)
    },
    cleanValue() {
      this.model = ''
    },
  }
})
</script>
