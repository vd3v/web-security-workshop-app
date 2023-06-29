<script setup>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import AppHeader from "~/components/general/AppHeader.vue";
</script>
<template>
  <AppHeader/>
  
  <div class="container">
    <NuxtPage/>
  </div>
  <div id="portal-root"></div>
</template>