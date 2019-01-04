<template src="./login.html"></template>
<script>
    export default {
  name: 'login',
  data: ()=> {
    return {
        username:'',
        password:'',
        showPass: false
    }
  },
  methods: {
    login: function(){ 
      if(this.username && this.password=='deamor') 
        this.$router.push('home')
    
    }
  },
}
</script>
<style scoped src="./login.css">

</style>