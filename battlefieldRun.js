(function () {
   var triger = new Vue({
     el: '#app',
     data: {
       input: '0'
     },
       computed: {
         output: function(){
           const Hell95 = 51500 * 2 + 910000;
           const Hell100 = 51500 * 4 + 2680000;

           return  Math.floor((this.input / 2 / Hell95 * 10) +  (this.input / 2 / Hell100 * 20))
         },
       },
   })
}());
