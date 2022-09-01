<script setup>
import { ref } from 'vue'
import ChildComp from './child-comp.vue'

const msg = ref('from parent')
</script>

<template>
  <ChildComp>{{ msg }}</ChildComp>
</template>