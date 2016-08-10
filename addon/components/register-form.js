import Ember from 'ember';
import layout from '../templates/components/register-form';

export default Ember.Component.extend({
  layout,
  ajax: Ember.inject.service(),
  authBroker: Ember.inject.service(),
  hasError: false,
  actions: {
    createUser() {
      if (this.get('password') !== this.get('passwordConfirm')) {
        this.set('hasError', true);
        this.set('errorMsg', 'password mismatch :/');
        return;
      }
      this.set('hasError', false);
      return this.get('ajax').request('/auth/register', {
        method: 'POST',
        data: JSON.stringify({
          email: this.get('email'),
          "first-name": this.get('firstName'),
          "last-name": this.get('lastName'),
          password: this.get('password')
        }),
        headers: {
          'content-type': 'application/vnd.api+json'
        }
      })
      .then(result => {
        console.log('ok', result.user);
        this.get('authBroker').login(result.user);
      })
      .catch(err => {
        console.log('nok', err);
      });
    }
  }
});
