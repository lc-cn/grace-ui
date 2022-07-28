<template>
  <i :class="'gr-icon-'+name"/>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GrIcon',
  props: {
    name:String,
  },
  setup(props) {
    // init here
  },
})
</script>
<style>
</style>
