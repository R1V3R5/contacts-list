// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Contact } from '../src/js/models/contact';
import { AddressBook } from '../src/js/models/address-book';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('About our Contact', () => {

  let contact;
  beforeEach(() => {
    contact = new Contact({
      firstName: 'Joshua',
      lastName: 'Rivers',
      phoneNumber: '770-539-3646',
      city: 'Atlanta',
      state: 'GA'
    });    
  });


  describe('Creation of Contact', () => {
    // it('contact should be an instance of Contact', () => {
    //   let contact = new Contact();
    //   expect(contact).to.be.an.instanceof(Contact);
    // });
    it('should have all the details when created', () => {
      expect(contact.firstName).to.equal('Joshua');
    })
  });

});