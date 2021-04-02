import Abstractroute from './Abstractroute';
import { action } from '@ember/object';

export default class BoardRoute extends Abstractroute {
  employee;
  orders;
  model() {
    if (this.userAuth.isAuth) {
      this.employee = this.userAuth.getUser();
      return this.store
        .query('order', {
          filter: { idEmployee: this.employee.id },
        })
        .then((res) => {
          this.orders = res;
          return res;
        });
    }
  }

  @action
  logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }

  @action
  goStore() {
    this.transitionTo('sections.index');
  }

  @action
  goOrder() {
    this.transitionTo('myOrders');
  }
}
