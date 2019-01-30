<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Hola mundo</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/test">
            Tets
          </router-link>
        </li>
        <li>
          <router-link to="/">
            User
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import User from './components/User.vue'

export default {
  name: 'app',
  components: {
    Test,
    User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
