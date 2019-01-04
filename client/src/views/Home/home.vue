<template src="./home.html">
  
</template>

<script>
// @ is an alias to /src
import Search from '@/components/destSearch/destSearch.vue'

export default {
  name: 'home',
  components: {
    'search':Search
  },methods:{
    logout: function(){
      this.$router.push('/');
    }
  }
}
</script>
<style scoped src="./home.css"></style>
