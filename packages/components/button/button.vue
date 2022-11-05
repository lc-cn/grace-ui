<template>
  <button
      class="gr-button"
      :class="[
          loading && 'loading',
          type,
          size,
          plain && 'plain',
          circle && 'circle'
      ]"
  >
    <gr-icon v-if="loading" :size="size" name="loading"/>
    <gr-icon :name="icon" :size="size" v-if="!loading && icon"/>
    <template v-if="$slots.default && !circle"><slot></slot></template>
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {GrIcon} from '../../componentList'
export default defineComponent({
  name: 'GrButton',
  components:{GrIcon},
  props: {
    type: {
      type: String,
      default: 'default',
      validator(type:string) {
        return ['default','warn', 'success', 'error', 'info', 'primary'].includes(type)
      }
    },
    plain:Boolean,
    circle:Boolean,
    icon:String,
    size:{
      type:String,
      default:'middle',
      validator(size:string){
        return ['large','middle','small'].includes(size)
      }
    },
    loading: Boolean
  },

})
</script>
