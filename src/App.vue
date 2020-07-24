<template>
  <div id="app">
    <HelloWorld />
    <router-link to="/aaa">Go to Foo</router-link>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>