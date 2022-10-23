<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <!-- button 形式で表示 -->
      <!-- <router-link to="/" tag="button">Home</router-link> | -->
      <router-link to="/about">About</router-link> | 
      <router-link to="/book">Book List</router-link> | 
      <router-link to="/book/item/1">Item</router-link> | 
      <router-link to="/user/profile">User</router-link>
    </nav>
    <div class="blue-b">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    <router-view name="sub"></router-view>
  </div>
</template>

<style lang="scss">
.fade{
  &-enter{
    opacity: 0;
    transform: translate(-100px, 0);
    &-to{
      opacity: 1;
    }
    &-active{
      transition: all 1s 0s ease;
    }
  }
  &-leave{
    opacity: 1;
    transform: translate(0, 0);
    &-to{
      opacity: 0;
      transform: translate(100px, 0);
    }
    &-active{
      transition: all .5s 0s ease;
    }
  }
}
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

.blue-b {
  border: 1px blue solid;
}
</style>
