<template>
  <div class="">
  <div class="container">
      <h1 class="text-center">dc heroes {{ herocount }}</h1>
    <ul>
      <li  v-for="(hero, index) in superhero" :key="hero.name" >
      {{ index }} : {{ hero.name }}<button @click="removehero(index)">x</button>
      </li>
      <li> {{ count }}</li>
    </ul>
    <form @submit.prevent="addhero">
<input v-model="newhero" />
<p>{{ fullname }}</p>
<p>{{ rand }}</p>

<button type="submit">Add hero</button>
</form>
</div>
</div>

</template>

<script>
export default {
  computed:{
    herocount(){
      return this.superhero.length
    },
  },

  methods:{
    addhero(){
      if(this.newhero === ''){
        return alert('please enter your hero name'); 
      }
      this.superhero.push({name:this.newhero});
      this.newhero = "";
    },

    removehero(index){
      this.superhero = this.superhero.filter((hero, i) => i !== index );
    }
  },

  data(){
    return { 
      name: "Gideon",
      isShowing: true,
      count: 0,
      newhero: "",
     
      superhero: [
        {name: "batman"},
        {name: "superman"},
        {name: "wonderwoman"},
        {name: "disnay character"}
      ]
    };
  },
 
  
    mounted() {
      setInterval(() =>{
      this.count++;
      },1000);
  }
}

</script>

<style>

</style>