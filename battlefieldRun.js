(function () {
   var triger = new Vue({
     el: '#app',
     data: {
       input: '0',
       output: '0',
       trigerDigest: 'false'
     },
     methods: {
       changeCheckbox: function (event) {
         const Hell95Contribution = 51500 * 2 + 910000;
         const Hell100Contribution = 51500 * 4 + 2680000;

         if(this.trigerDigest === 'Hell95'){
           // ŒvŽZŽ®
           // Math.floor(this.input / Hell95Contribution * 10);
           console.log(this.trigerDigest);
         }else if(this.trigerDigest === 'Hell100'){
           // ŒvŽZŽ®
           // Math.floor(this.input / Hell100Contribution * 20);
           console.log(this.trigerDigest);
         }else if(this.trigerDigest === 'both'){
           // ŒvŽZŽ®
           // Math.floor((this.input / 2 / Hell95Contribution * 10) +  (this.input / 2 / Hell100Contribution * 20));
           console.log(this.trigerDigest);
         }else{
           //Žb’è
           this.output = 0;
         }
       }
     }
   })
}());
