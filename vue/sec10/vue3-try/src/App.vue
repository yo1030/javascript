<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/children">Children</router-link> |
    <router-link to="/teleport-sample">Teleport-sample</router-link> |
    <router-link to="/composition-sample">Composition-sample</router-link> |
    <router-link to="/props-emit">Props-Emit-Sample</router-link> |
    <router-link to="/composition-function">Composition-Function</router-link> |
    <router-link to="/router">Router</router-link> |
    <router-link to="/vuex">Vuex</router-link> |
  </nav>
  <router-view
    :setupBooks="setupBooks"
    :dataBooks="dataBooks"
    @custom-event="parentMethods"
    />
</template>

<script>
import { reactive } from "vue";
export default({
  setup(){
    const setupBooks = reactive([
      {
        title: 'setupTitle1',
        author: 'setupAuthor1'
      },
      {
        title: 'setupTitle2',
        author: 'setupAuthor2'
      }
    ])
    return {
      setupBooks
    }
  },
  data(){
    return {
      dataBooks: [
        {
          title: 'dataTitle1',
          author: 'dataAuthor1'
        },
        {
          title: 'dataTitle2',
          author: 'dataAuthor2'
        }
      ]
    }
  },
  methods:{
    parentMethods(params){
      console.log(params)
    }
  },
  provide(){
    return {
      userName: '親で設定した値'
    }
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
