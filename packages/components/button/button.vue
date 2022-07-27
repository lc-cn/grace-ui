<template>
  <button
      class="gr-button"
      :class="[
          loading && 'loading',
          type,
          size,
          circle && 'circle'
      ]"
  >
    <gr-icon v-if="loading" name="loading"/>
    <gr-icon :name="icon" v-if="!loading && icon"/>
    <template v-if="$slots.default"><slot></slot></template>
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import GrIcon from '../icon'

export default defineComponent({
  name: 'GrButton',
  components:{GrIcon},
  props: {
    type: {
      type: String,
      default: 'default',
      validator(type) {
        return ['default', 'success', 'error', 'info', 'primary'].includes(type)
      }
    },
    circle:Boolean,
    icon:String,
    size:{
      type:String,
      default:'middle',
      validator(size){
        return ['large','middle','small'].includes(size)
      }
    },
    loading: Boolean
  },

})
</script>

<style scoped></style>
