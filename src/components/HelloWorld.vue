<script setup>
  import {computed} from 'vue'
  import {store} from '../store/mystore.js'

let count = computed(()=>store.state.count)
</script>

<template>
  <h1>in Hello component</h1>
  <br>
  {{count}}
  <button @click="store.commit('tambah')">increment</button>
  <textarea name="" id="" cols="30" rows="10"></textarea>
</template>