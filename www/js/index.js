Vue.config.ignoredElements = ['ion-card', 'ion-card-content'];

var app = new Vue({
  el: '#app',
  data: {
    loadingPosition: false,
    geolocation: {}
  },
  methods: {
    getPosition: function() {
      this.loadingPosition = true;

      navigator.geolocation.getCurrentPosition(({ coords })=>{
        this.loadingPosition = false;
        this.geolocation = coords;
      });
    }
  }
})
