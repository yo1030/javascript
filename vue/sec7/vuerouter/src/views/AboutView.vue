<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="checkRouteInfo">route info</button>
    <button @click="goHome">Back Home</button>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    checkRouteInfo(){
      console.log(this.$route)
      console.log(this.$router)
    },
    goHome(){
      this.router.push('/')
    }
  },
  beforeRouteLeave(to, from, next) {
    const checkLeave = window.confirm('本当に離れますか？')
    checkLeave ? next() : next(false)
  }
}
</script>