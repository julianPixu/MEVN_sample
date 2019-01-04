<template src="./destSearch.html"></template>
<script>
export default {
  name: 'search',
  data:()=> {
      return {
          numPeople:1,
          search:'',
          destList:[
              {name: 'Black Forrest(Germany)', duration: 7, pricePP: 403},
              {name: 'Swiss Alps', duration: 4, pricePP: 415.46},
              {name: 'Egyptian cruise', duration: 7, pricePP: 600},
              {name: 'Belgium Tour', duration: 6, pricePP: 302.33},
              {name: 'Prage,Vienna,Bratislava', duration: 5, pricePP: 204},
              {name: 'Wales', duration: 4, pricePP: 264.25},

          ]
      }
  },
  methods:{
      filterDests: function(){ return this.destList.filter(d=> !this.search || d.name.includes(this.search))},
      getTotal: function(price){ return parseFloat(price*this.numPeople).toFixed(2);}
  }
}

</script>
<style scoped>

.table-fixed{
    width:100%;
    background: rgba(255,255,255,0.8);
}

.table-fixed thead{
    background: rgba(0, 0, 0, 0.8);
    color:white;
}

.table-fixed tbody tr:nth-child(even){
    background: rgba(12, 128, 118, 0.4);
}

.table-fixed tbody tr:hover{
    background:#83ffb4;
    cursor:pointer;
    color:white;
}
</style>