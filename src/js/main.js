import $ from 'jquery';
import _ from 'lodash';

import { AppController } from './controllers/app-controller';
import { Contact } from './models/contact';

const addContact = $('.addContact')
const contactList = $('.addressBook')

let app = new AppController(addContact, contactList);

app.init()

