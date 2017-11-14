import Route from '@ember/routing/route';

export default Route.extend({
  emailAddress: '',
  messages:'',

  isValid: Ember.computed.match('emailAddress', /^.+@\..+$/),
  isLength: Ember.computed.gte('messages.length', 5),
  isConditionValid: Ember.computed.and('isValid', 'isLength'),
  isDisabled: Ember.computed.not('isConditionValid'),

  actions:{
    sendMessages(){
      var responseMessage = 'To: ' + email + ', Message: ' + message;
      this.set('responseMessage', 'We got your message and we will be in touch soon');
      this.set('emailAddress', '');
      this.set('message', '');
    }

  }
});
