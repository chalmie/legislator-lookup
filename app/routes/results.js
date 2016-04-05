import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
 model: function(params) {
   var key = config.myApiKey;
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=' + key + '&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var legislators = [];
     responseJSON.results.forEach(function(legislator) {
       legislators.push(legislator);
     });
     return legislators;
   });
  }
});
