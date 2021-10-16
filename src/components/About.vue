<script setup>
	  import {computed} from 'vue'
  import {store} from '../store/mystore.js'

let count = computed(()=>store.state.count)
</script>

<template>
  <h1>in About component</h1>
  {{count}}
</template>