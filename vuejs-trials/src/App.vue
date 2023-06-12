<template>
  <div>
    <h1>{{msg}}</h1>
    <welcome v-bind:title="title" v-on:changeTitle="updateTitle($event)"></welcome>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: "This is a test for events"
    }
  },
  methods: {
    updateTitle: function(title){
      this.title = title;
    }
  }
}
</script>

<style>

</style>
