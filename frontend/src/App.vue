<template>
  <div @click="closeList"  class="main">
  <Places        />
  </div>
</template>

<script>

 import Places from "./components/Places.vue";


 export default {
 


  name: 'App',
  components: {
    Places,
    
  },
  props:{
    closePlaList : String
  },
  methods: {
    closeList(){
      
    }
  }
  


}
</script>

<style>

.main{
  margin: 0;
  background-image: url("./assets/petra1.jpg") ;
  height: 565px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover ;
  padding-top: 45%;
  
}

@media (min-width: 360px){ 
  .main{
  margin: 0;
  padding-top: 20%;
  background-image: url("./assets/petra.jpg") ;
  height: 765px;
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  }
  
}
</style>
