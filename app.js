new Vue({
  el: '#exercise',
  data: {
    name: "Cesar",
    age: 22,
    image: "ball.jpg"
  },
  methods:{
    tripleAge: function(){
      return this.age*3;
    },
    random1: function(){
      return Math.random();
    },
    random100: function(){
      return Math.floor(Math.random()*100);
    }

  }
})
