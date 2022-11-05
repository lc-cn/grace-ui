<template>
  <div v-if="children && children.length" :class="[
      'gr-select-option-group',
      selected && 'selected',
      disabled && 'disabled'
  ]">
    {{title}}
    <div class="gr-select-option-children">
      <gr-select-option v-for="option in children" :key="option.value" :value="option.value" :lable="option.label"/>
    </div>
  </div>
  <div v-else
       :class="[
           'gr-select-option',
        selected && 'selected',
        disabled && 'disabled'
      ]"
       @click="this.select.pickOption(value)"
  >
    {{label}}
  </div>
</template>

<script>
export default {
  name: "GrSelectOption",
  props:{
    label:String,
    value:[String,Number,Boolean],
    title:String,
    children:{
      type:Array,
      default(){
        return []
      }
    },
    disabled:Boolean,
  },
  inject:['model','select'],
  computed:{
    selected(){
      if(Array.isArray(this.model) && !Array.isArray(this.value)) return this.model.includes(this.value)
      return this.model===this.value
    }
  }
}
</script>

<style scoped>

</style>