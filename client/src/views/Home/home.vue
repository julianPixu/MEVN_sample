<template src="./home.html">
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },methods:{
    logout: function(){
      this.$router.push('/');
    }
  }
}
</script>
<style scoped src="./home.css"></style>
