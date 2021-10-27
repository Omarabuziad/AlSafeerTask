<template>
  <div class="searchBar">

    <span class="input-span"><b-form-input size="lg" type="search"   v-on:input="getPlaces" placeholder="Enter Your Place" :value="selectedPlace" ></b-form-input><i :style="{display:showIcon}" class="fa fa-search" aria-hidden="true"></i></span>
    <ul :style="{display:showlist}" class="ul-places-list">
      <li @click="selPlace"  class="li-place"  v-for="(place, index) in searchResults" :key="index"  >
           <i class="fa fa-location-arrow" aria-hidden="true"></i>
           <p class="text-place"><strong>{{place.slice(0,subStr.length)}}</strong>{{place.slice(subStr.length,44)}}</p>
      </li>
    </ul>

  </div>
</template>

<script>


export default {
  name: 'Places',
  components: {
    
  },
  data(){
      return {
          subStr :'',
          searchResults : [],
          selectedPlace:'',
          showlist : false,
          showIcon : "inline",
      }
  },

  methods :{

    selPlace(event){
      this.selectedPlace = event.target.innerText;
      this.showlist = "none";
      this.showIcon = "none";
      console.log(this.selectedPlace)
    },

      
     async getPlaces(event){
       this.subStr = event;
         if(event){
           this.showlist = "block";
           this.showIcon = "none";
          const res = await fetch(`http://localhost:3000/places/${event}`);
          const data = await res.json();
          this.searchResults = data;
          return data;
         }else{
             this.searchResults = [];
             this.showIcon = "inline";
         }

        },
      
      

  },


  // watch : {

  //   async subStr(newvalue){
  //        if(newvalue){
  //          this.showlist = "block";
  //          this.showIcon = "none";
  //         const res = await fetch(`http://localhost:3000/places/${newvalue}`);
  //         const data = await res.json();
  //         this.searchResults = data;
  //         return data;
  //        }else{
  //            this.searchResults = [];
  //            this.showIcon = "inline";
  //        }

  //       },

  //   }
  // WE Can use Watch and v-model to handle the Changing on Data and fire a function everytime some data change but because 
  // i face some problem with :value of the input , because using of v-model will make conflict with :value , so i prefer to seperate it .

    
    





  

  
  




}
</script>

<style scoped>

.searchBar{
  width:80%;
  margin: 0 auto;
}

.input-span{
  display: flex;
  position: relative;
  align-items: center;
}

.fa-search{
  position: absolute;
  right: 10px;
  font-size:2.2em;
  color: #3b3b3b52;
}



.ul-places-list{
  border-radius:20% 10%;
  list-style: none;
  padding-left: 0;
}

.li-place{
 background-color:rgb(255, 255, 255);
 /* border: 1px solid rgba(58, 58, 58, 0.438); */
 padding: 12px 8px;
 cursor: pointer;
 display: flex;
 align-items: center;
}

.li-place:hover{
  background-color:rgb(97, 95, 95);
}

.text-place{
  margin: 0;
  margin-left: 5px;
  
}

.text-place strong{
  background-color:rgba(136, 136, 136, 0.295);
}

@media (min-width: 1150px){ 
  .searchBar{
  width:40%;
  margin: 0 auto;
}


  
}




</style>