import Abstractroute from './Abstractroute';
import { action } from '@ember/object';

export default class MyOrdersRoute extends Abstractroute {
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
