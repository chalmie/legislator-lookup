import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?' + params.committees + 'apikey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var committees = [];
      responseJSON.results.forEach(function(committee) {
        committees.push(committee);
      });
     return committees;
   });
  },
  actions: {
  showSenateCommittees() {
    var params = 'chamber=senate&';
    this.transitionTo('committee-results', params);
  },
  showHouseCommittees() {
    var params = 'chamber=house&';
    this.transitionTo('committee-results', params);
    }
  }
});
