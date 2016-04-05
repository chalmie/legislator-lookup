import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills?' + params.search + 'apikey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var bills = [];
      responseJSON.results.forEach(function(bill) {
        bills.push(bill);
      });
     return bills;
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
