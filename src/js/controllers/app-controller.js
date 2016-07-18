import { Contact } from '../models/contact'
class AppController {

  constructor (form, container) {
    this.form      = form;
    this.container = container;
  }
  
  init () {
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
      newContact.firstName = this.form.find('.firstName').val();
      newContact.lastName = this.form.find('.lastName').val();
      newContact.phoneNumber = this.form.find('.phoneNumber').val();
      newContact.city = this.form.find('.city').val();
      newContact.state = this.form.find('.state').val();
      newContact.id = _.random(100,999);

      this.addContact(newContact)
      // console.log(newContact)
    });
  }

  contactTmpl (contact) {
    return `
      <div class="contact" data-contactId="${contact.id}">
        <div class="contactFullName">${contact.firstName} ${contact.lastName}</div>
        <div class="contactPhoneNumber">${contact.phoneNumber}</div>
        <div class="location">${contact.city}, ${contact.state}</div>
      </div>
    `

  }

}

export { AppController };