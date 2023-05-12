new Vue({
    el: '#vue-app',
    data: {
        name: "Amulya",
        website: "www.google.com",
        message: "Hey good job ... data binding example",
        show: false,
        firstName: '',
        lastName: '',
        testClass: false,
        health: 100,
        ended: false
    },
    methods: {
        punched: function(){
            this.health -= 10;
            if (this.health <= 0){
                this.ended = true;
            }
         },

         restart: function (){
            this.health = 100;
            this.ended = false;
         },
         clickEvents: function(){
            this.show = !(this.show)
         },
        
    },
    computed: {
        greetings: function(){
            return `Good afternoon ${this.name}`;
         },
         changeColor: function(){
             this.testClass = !this.testClass;
         },
         compClasses: function(){ //Dynamic css
            return {
                testClass: this.testClass
            }
         },

         
    }
});