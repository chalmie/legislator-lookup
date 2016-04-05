import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('about');
  this.route('contact');
  this.route('bills');
  this.route('committees');
  this.route('bill-results', {path: '/bill-results/:search'});
});

export default Router;
