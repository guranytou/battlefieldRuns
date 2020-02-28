(function() {
  new Vue({
    el: "#app",
    data: {
      input: 0,
      triggerDigest: '',
      radio: [
        {
          id: 'hell95',
          value : '95HELL',
        },
        {
          id: 'hell100',
          value : '100HELL'
        },
        {
          id: 'hell150',
          value : '150HELL'
        },
        {
          id: 'both',
          value : '95&100HELL'
        }
      ],
      Hell95NeedTrigger: 10,
      Hell100NeedTrigger: 20,
      Hell150NeedTrigger: 20,
      ExTrigger: 4
    },
    filters: {
      locale: number => number.toLocaleString()
    },
    computed: {
      contribution() {
        if (!this.input) {
          return 0;
        }
        const numStr = (this.input + "").replace(/,/g, "");
        return parseInt(numStr, 10);
      },
      hell95Contribution() {
        return this.calcHellContribution(this.Hell95NeedTrigger, 910000);
      },
      hell100Contribution() {
        return this.calcHellContribution(this.Hell100NeedTrigger, 2680000);
      },
      hell150Contribution() {
        return this.calcHellContribution(this.Hell150NeedTrigger, 3600000);
      },
      output() {
        return this.calcMain(this.contribution);
      }
    },
    methods: {
      calcMain(contribution) {
        const [ h95, h100, h150, h95and100 ] = this.radio;
        switch (this.triggerDigest) {
          case h95.value:
            return this.calcTriggerHell95(contribution);
          case h100.value:
            return this.calcTriggerHell100(contribution);
          case h150.value:
            return this.calcTriggerHell150(contribution);
          case h95and100.value:
            return this.calcTriggerHell95and100(contribution);
          default:
            return 0;
        }
      },
      calcHellContribution(needTrigger, buffer = 0) {
        return 51500 * (needTrigger / this.ExTrigger) + buffer;
      },
      calcTriggerFloor(contribution, hellContribution, needTrigger) {
        return Math.floor(this.calcTrigger(
          contribution,
          hellContribution,
          needTrigger
        ));
      },
      calcTrigger(contribution = 0, hellContribution, needTrigger) {
        return contribution > 0
          ? (contribution / hellContribution) * needTrigger
          : 0;
      },
      calcTriggerHell95(contribution) {
        return this.calcTriggerFloor(
          contribution,
          this.hell95Contribution,
          this.Hell95NeedTrigger
        );
      },
      calcTriggerHell100(contribution) {
        return this.calcTriggerFloor(
          contribution,
          this.hell100Contribution,
          this.Hell100NeedTrigger
        );
      },
      calcTriggerHell150(contribution) {
        return this.calcTriggerFloor(
          contribution,
          this.hell150Contribution,
          this.Hell150NeedTrigger
        );
      },
      calcTriggerHell95and100(contribution) {
        const halfCon = contribution / 2;
        const hell95Trigger = this.calcTrigger(
          halfCon,
          this.hell95Contribution,
          this.Hell95NeedTrigger
        );
        const hell100Trigger = this.calcTrigger(
          halfCon,
          this.hell100Contribution,
          this.Hell100NeedTrigger
        );
        return Math.floor(hell95Trigger + hell100Trigger);
      }
    }
  });
})();
