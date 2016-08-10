import Ember from 'ember';
import layout from '../templates/components/lostpass-form';

export default Ember.Component.extend({
  layout
  ajax: Ember.inject.service(),
  hasError: false,
  actions: {
    lostpassEmail() {
      return this.get('ajax').request('/auth/passlost', {
        method: 'POST',
        data: JSON.stringify({
          username: this.get('email')
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
