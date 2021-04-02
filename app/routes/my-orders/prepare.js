import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';

export default class MyOrdersPrepareRoute extends Abstractroute {
  model(params) {
    if (this.userAuth.isAuth) {
      return this.store.findRecord('order', params.order_id, {
        include: 'orderdetails.product.section,user',
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