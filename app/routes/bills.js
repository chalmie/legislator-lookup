import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params) {
   if (typeof params !== 'string') {
     params = "";
   }
   var url = 'http://congress.api.sunlightfoundation.com/bills?' + params + 'apikey=545928680a574d01bbaf53d04a982d84';
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
