import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({

  model: function(params) {
    var key = config.myApiKey;
   var url = 'http://congress.api.sunlightfoundation.com/bills?' + params + 'per_page=50&page=10&apikey=' + key;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
 },
  actions: {
   showSenateBills() {
     var params = 'chamber=senate&';
     this.transitionTo('bill-results', params);
   },
   showHouseBills() {
     var params = 'chamber=house&';
     this.transitionTo('bill-results', params);
     }
   }
});
