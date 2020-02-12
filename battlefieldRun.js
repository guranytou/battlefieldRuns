(function () {
   var triger = new Vue({
     el: '#app',
     data: {
       input: '0'
     },
       computed: {
         output: function(){
           const HELL95 = 51500 * 2 + 910000;
           const HELL100 = 51500 * 4 + 2680000;

           return  Math.floor((this.input / 2 / HELL95 * 10) +  (this.input / 2 / HELL100 * 20))
         },
       },
   })
}());