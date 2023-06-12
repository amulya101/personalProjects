<template>
  <div>
    <p>{{msg}}</p>
    <p>{{ title }}</p>
    <button v-on:click="changeTitle">Click me to change event</button>
    <addPlayer/>
  </div>
</template>

<script>

//import Display from './Display.vue'
import AddPlayer from './AddPlayer.vue';

export default {
    components: {

    'addPlayer' : AddPlayer
    //'display': resolve => require(['./Display.vue'], resolve) //this is working
    // 'display': () => import('./Display.vue')
    },
   props: {
    title: {
        type: String
    }
   }, 
  data () {
    return {
      msg: 'WELCOME TO THE COMPONENT'
    }
  },
  methods: {
    changeTitle: function() {
        this.$emit('changeTitle', 'Event listened')
    }
  }
}
</script>

<style>

</style>
