import Ember from 'ember';
import layout from '../templates/components/register-form';

export default Ember.Component.extend({
  layout,
  hasError: false,
  actions: {
    createUser() {
      if (this.get('password') !== this.get('passwordConfirm')) {
        this.set('hasError', true);
        this.set('errorMsg', 'password mismatch :/');
        return;
      }
      this.set('hasError', false);
      let newUser = this.get('store').createRecord('user', {
        email: this.get('email'),
        userName: this.get('userName'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        birthDate: this.get('birthDate'),
        password: this.get('password')
      });
      console.log(newUser);
      newUser.save();
    }
  }
});
