<template>
  <blur-hash-canvas :hash="hash" :width="width" :height="height" :punch="punch"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BlurHashCanvas from './BlurHashCanvas.vue'

@Component({
  components: {
    BlurHashCanvas
  }
})
export default class BlurHash extends Vue {
  @Prop({ type: String, required: true}) private hash!: string
  @Prop({ type: [Number, String], default: 128 }) private width!: string | number
  @Prop({ type: [Number, String], default: 128 }) private height!: string | number
  @Prop({ type: Number, default: 1 }) private punch!: number
}
</script>