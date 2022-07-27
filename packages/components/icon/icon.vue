<template>
  <i :class="'gr-icon-'+name"/>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'icon',
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
