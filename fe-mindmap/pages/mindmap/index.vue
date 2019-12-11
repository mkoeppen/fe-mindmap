<template>
  <div>
    <mindmap :nodes="nodes" :connections="connections" :editable="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import map from './map'

export default Vue.extend({
  name: 'App',
  data () {
    return {
      ...map
    }
  }
})

</script>

<style scoped>

</style>
