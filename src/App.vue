<template>
  <div id="app">
    <div class="txt-32 txt-primary txt-right">sad撒大所多撒多撒多撒多所</div>
    <ul>
      <li class="txt-h1 txt-bold pb-20"><router-link to='/'>home</router-link></li>
      <li><router-link to='/login'>login</router-link></li>
    </ul>
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
}
</script>

<style lang="scss">
@import './assets/styles/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
