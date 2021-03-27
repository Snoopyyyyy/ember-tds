import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';

export default class SectionsIndexRoute extends Abstractroute {
  model() {
    this.redirect();
    return this.store.findAll('section', { include: 'products' });
  }

  @action
  logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }

  @action
  goBoard() {
    this.transitionTo('board');
  }

  @action
  addSection() {
    this.transitionTo('sections.add');
  }

  @action
  AddProduct() {
    this.transitionTo('sections.addProduct');
  }
}
