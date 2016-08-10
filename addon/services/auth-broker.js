import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  loggedIn: false,
  currentUser: null,

  init() {
    this._super(...arguments);
  },

  login(user) {
    this.set('loggedIn', true);
    this.set('currentUser', user);
  }
});
