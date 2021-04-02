import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';

export default class MyOrdersPrepareRoute extends Abstractroute {
  model(params) {
    if (this.userAuth.isAuth) {
      return this.store
        .findRecord('order', params.order_id, {
          include: 'orderdetails.product.section,user',
        })
        .then((res) => {
          let controller = this.controllerFor(this.routeName);
          controller.set(
            'length',
            res.orderdetails.filterBy('prepared').length
          );
          controller.set('max', res.orderdetails.length);
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
  goBoard() {
    this.transitionTo('board');
  }

  @action
  back() {
    this.transitionTo('myOrders.index');
  }

  @action
  toggle(model, orderdetail) {
    console.log(orderdetail.get('prepared'));
    orderdetail.set('prepared', 1);
    let controller = this.controllerFor(this.routeName);
    controller.set('length', model.orderdetails.filterBy('prepared').length);
  }
}
