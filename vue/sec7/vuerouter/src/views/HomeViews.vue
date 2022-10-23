<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorlds msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorlds from '@/components/HelloWorlds.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorlds
  }
}
</script>
