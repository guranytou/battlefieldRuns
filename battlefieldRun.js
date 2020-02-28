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
           const Hell150NeedTriger = 20;
           const ExTriger = 4;
           const Hell95Contribution = 51500 * (Hell95NeedTriger / ExTriger) + 910000;
           const Hell100Contribution = 51500 * (Hell100NeedTriger / ExTriger) + 2680000;
           const Hell150Contribution = 51500 * (Hell150NeedTriger / ExTriger) + 3600000;
           let ans = 0;

           const ThisInput = String(this.input);
           const InputContribution = removeComma(ThisInput);

           function removeComma(value) {
             var num = value.replace(/,/g, "");

             return parseInt(num);
           }

           if(this.trigerDigest === 'Hell95'){
            // ŒvŽZŽ®
            ans = Math.floor(InputContribution / Hell95Contribution * Hell95NeedTriger);
            return ans.toLocaleString()
           }else if(this.trigerDigest === 'Hell100'){
            // ŒvŽZŽ®
             ans = Math.floor(InputContribution / Hell100Contribution * Hell100NeedTriger);
             return ans.toLocaleString()
           }else if(this.trigerDigest === 'Hell150'){
             ans = Math.floor(InputContribution / Hell150Contribution * Hell150NeedTriger);
             return ans.toLocaleString()
           }else if(this.trigerDigest === 'both'){
            // ŒvŽZŽ®
             ans = Math.floor((InputContribution / 2 / Hell95Contribution * Hell95NeedTriger) +  (InputContribution / 2 / Hell100Contribution * Hell100NeedTriger));
             return ans.toLocaleString()
           }else{
             //Žb’è
             return 0;
            }
         }
     }
   })
}());
