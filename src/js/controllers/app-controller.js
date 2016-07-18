import _ from 'lodash';
import $ from 'jquery';
import { Contact } from '../models/contact';
class AppController {

  constructor (form, container) {
    this.form      = form;
    this.container = container;
  }
  
  init () {
    this.contactClick();
    this.formSubmit();

  }

  addContact (contactOptions) {
    let contact = new Contact(contactOptions);
    let contactHTML = this.contactTmpl(contact)
    this.container.append(contactHTML)
    
  }

  formSubmit() {
    this.form.on('submit', (event) => {
      event.preventDefault();
      // console.log(event);
    let newContact = {};
      newContact.picture = 'http://placecage.com/75/75'; 
      newContact.firstName = this.form.find('.firstName').val();
      newContact.lastName = this.form.find('.lastName').val();
      newContact.phoneNumber = this.form.find('.phoneNumber').val();
      newContact.city = this.form.find('.city').val();
      newContact.state = this.form.find('.state').val();
      newContact.id = _.random(100,999);

      this.addContact(newContact)
      console.log(newContact)
    });
  }

  contactClick () {
    this.container.on('click', '.contact', (event) => {
      event.preventDefault();
      console.log(event.currentTarget.dataset.contactid)
      
      let id = event.currentTarget.dataset.contactid
      // let contact = _.find(this.contact, { id: id });
      // console.log(this)
      // contact.toggleVisible();

      $(event.currentTarget).toggleClass('delete');

      // console.log(task);

    });
  }  

  contactTmpl (contact) {
    return `
      <div class="contact" data-contactid="${contact.id}">
        <div class="picture"><img src="${contact.picture}"></div>
        <div class="details">
          <div class="contactFullName">${contact.firstName} ${contact.lastName}</div>
          <div class="contactPhoneNumber">${contact.phoneNumber}</div>
          <div class="location">${contact.city}, ${contact.state}</div>
        </div>
      </div>
    `
  }  

}

export { AppController };