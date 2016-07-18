import _ from 'lodash';



class Contact {

  constructor (options) {
    this.firstName    = options.firstName;
    this.lastName     = options.lastName;
    this.phoneNumber  = options.phoneNumber;
    this.city         = options.city;
    this.state        = options.state;
    this.id           = options.id;
    this.visible      = options.visible || true;
    this.picture      = options.picture || 'http://placecage.com/75/75'; 
  }

  toggleVisible () {
    return this.visible = !this.visible;
  }

}

export { Contact };