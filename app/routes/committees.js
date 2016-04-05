import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({

  model: function() {
    var key = config.myApiKey;
   var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON);
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
