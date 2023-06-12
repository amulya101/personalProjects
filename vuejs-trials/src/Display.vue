<template>
    <div id="add-player">
        <form >
            <label>First Name:</label>
            <input type="text" v-model="playerName.firstName">
            <label>Last Name:</label>
            <input type="text" v-model="playerName.lastName">
            <label>Skills:</label>
            <textarea v-model="playerName.skills"></textarea>
            <button v-on:click="box!= box">Add player</button>   
        </form>
        <div id="display-players" v-if="box">
            <h3>Player Added</h3>
            <p>{{ playerName.firstName }} {{ playerName.lastName }}</p>
            <p>Skills: {{ playerName.skills }} </p>
        </div>
    </div>
    
  </template>
  
  <script>
  export default {
    data () {
      return {
        playerName: {
            firstName: '',
            lastName: '',
            skills: ''
        },
        box: false
      }
    },

    methods: {
        showDisplay: function(){
            this.box = true;
        }
    }
  }
  </script>
  
  <style>
  #add-player *{
    box-sizing: border-box;
  }

  #add-player {
    margin: 20px auto;
    max-width: 500px;
  }

  label{
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }

  #display-player{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  h3{
    margin-top: 10px;
  }
  
  </style>
  