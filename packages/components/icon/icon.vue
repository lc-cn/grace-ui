<template>
  <i :class="[
      'gr-icon',
      'gr-icon-'+name,
      ['large','middle','small'].includes(size) && size
  ]"
  :style="styles"/>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GrIcon',
  props: {
    name:String,
    size:{
      type:[String,Number],
      default:'middle',
      validator(size:string|number){
        return ['large','middle','small'].includes(size)||/^\d+(px)?$/.test(String(size))
      }
    }
  },
  computed:{
    styles(){
      if(['large','middle','small'].includes(this.size)) return {}
      return {
        fontSize:typeof this.size==='number'||!this.size.endsWith('px')?this.size+'px':this.size
      }
    }
  }
})
</script>
<style>
</style>
