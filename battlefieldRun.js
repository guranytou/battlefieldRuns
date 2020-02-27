(function () {
   var triger = new Vue({
     el: '#app',
     data: {
       input: 0,
       trigerDigest: 'false'
     },
     computed: {
       output: function(){
           const Hell95NeedTriger = 10;
           const Hell100NeedTriger = 20;
           const ExTriger = 4;
           const Hell95Contribution = 51500 * (Hell95NeedTriger / ExTriger) + 910000;
           const Hell100Contribution = 51500 * (Hell100NeedTriger / ExTriger) + 2680000;

           if(this.trigerDigest === 'Hell95'){
            // ŒvŽZŽ®
             return Math.floor(this.input / Hell95Contribution * 10)
           }else if(this.trigerDigest === 'Hell100'){
            // ŒvŽZŽ®
             return Math.floor(this.input / Hell100Contribution * 20)
           }else if(this.trigerDigest === 'both'){
            // ŒvŽZŽ®
             return Math.floor((this.input / 2 / Hell95Contribution * 10) +  (this.input / 2 / Hell100Contribution * 20))
           }else{
             //Žb’è
             return 0;
            }
         }
     }
   })
}());
