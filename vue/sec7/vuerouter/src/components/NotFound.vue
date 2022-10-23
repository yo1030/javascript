<template>
  <div>
    404 page not found
    <br>
    <button @click="goToHome">back Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>