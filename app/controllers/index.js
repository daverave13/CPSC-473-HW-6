
import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

isDisabled: Ember.computed.empty('emailAddress'),

actions:{

  saveInvitation(){
    alert(`Saving of the following email address in progess: ${this.get('emailAddress')}`);
    this.set('responseMessage',`Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
    this.set('emailAddress','');
  }
}

});
