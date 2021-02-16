import Route from '@ember/routing/route';
import Contacts from '../classes/Contacts';
import { action } from '@ember/object';

export default class ContactsRoute extends Route {
  model() {
    return new Contacts(this.store.findAll('contact'));
  }

  @action delete(contact) {
    contact.deleteRecord();
  }
}
