div<template>
    <div id="add-player">
        <form >
            <label>First Name:</label>
            <input type="text" v-model="playerName.firstName">
            <label>Last Name:</label>
            <input type="text" v-model="playerName.lastName">
            <label>Skills:</label>
            <textarea v-model="playerName.skills"></textarea>
            <!-- <button v-on:click="box!= box">Add player</button>  -->  
            <div id="checkboxes">
              <label>Physical</label>
              <input type="checkbox" value="physical" v-model="playerName.categories"/>
              <label>Versatile</label>
              <input type="checkbox" value="versatile" v-model="playerName.categories"/>
              <label>Prospect</label>
              <input type="checkbox" value="prospect" v-model="playerName.categories"/>
              <label>Pacey</label>
              <input type="checkbox" value="pacey" v-model="playerName.categories"/>
            </div>

            <div id="selectBox">
              <label>Position</label>
              <select v-model="playerName.position">
                <option v-for="position in positions" :key="position">{{position}}</option>
              </select>
            </div>

        </form>
        <div id="display-players" >
            <h3>Player Added</h3>
            <p>{{ playerName.firstName }} {{ playerName.lastName }}</p>
            <p>Skills: {{ playerName.skills }} </p>
            <p>Particular Attribute if any: </p>
            <ul>
              <li v-for="category in playerName.categories" :key="category">{{ category }}</li>
            </ul>
            <p>Player Position: {{ playerName.position }}</p> 
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
            skills: '',
            categories: [],
            position: ""
        },
        box: false,
        positions: ['Goalkeeper','Defender','Midfielder','Striker']
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

  #checkboxes label{
    display: inline-block;
  }
  
  </style>
  