import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';

export default class SectionsIndexRoute extends Abstractroute {
  model() {
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
}
