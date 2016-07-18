import _ from 'lodash';

class Contact {

  constructor (options) {
    this.firstName    = options.firstName;
    this.lastName     = options.lastName;
    this.phoneNumber  = options.phoneNumber;
    this.city         = options.city;
    this.state        = options.state;
    this.id           = _.random(100, 999); 
  }
}

export { Contact };