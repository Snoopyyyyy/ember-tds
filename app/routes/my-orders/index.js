import { action } from '@ember/object';
import Abstractroute from '../Abstractroute';

export default class MyOrdersIndexRoute extends Abstractroute {
  model() {
    if (this.userAuth.isAuth) {
      this.employee = this.userAuth.getUser();
      return this.store.query('order', {
        filter: { idEmployee: this.employee.id },
      });
    }
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
