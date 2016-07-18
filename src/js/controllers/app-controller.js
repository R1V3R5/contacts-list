class AppController {

  constructor (form, container) {
    this.form      = form;
    this.container = container;
  }
  
  init () {
    this.formSubmit();

  }

  addContact (firstName, lastName, phoneNumber, city, state) {
    let id = ._random(100, 999);
    let contact = new Contact (firstName, lastName, phoneNumber, city, state)
  }

  formSubmit() {
    this.form.on('submit', (event) => {
      event.preventDefault();
      // console.log(event);

      let firstName = this.form.find('.firstName').val();
      let lastName = this.form.find('.lastName').val();
      let phoneNumber = this.form.find('.phoneNumber').val();
      let city = this.form.find('.city').val();
      let state = this.form.find('.state').val();
      
      this.addContact(firstName, lastName, phoneNumber, city, state)
    });
  }

}

export { AppController };