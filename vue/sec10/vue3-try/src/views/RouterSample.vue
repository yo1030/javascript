<template>
  <div>
    RouterSample
  </div>
  <button @click="goHome">Home</button>
  <button @click="checkRoutePath">Route Info</button>
</template>

<script>
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
export default {
  setup(){
    const router = useRouter()
    const route = useRoute()
    const goHome = () => {
      router.push('/')
    }
    const checkRoutePath = () =>{
      console.log(route.path)
    }
    onBeforeRouteLeave((to, from) => {
      console.log(`to:${to}`)
      console.log(`from:${from}`)
    })
    return {
      goHome,
      checkRoutePath
    }
  }
}
</script>

<style>

</style>