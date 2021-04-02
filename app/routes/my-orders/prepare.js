import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class MyOrdersPrepareRoute extends Abstractroute {
  model(params) {
    if (this.userAuth.isAuth) {
      return this.store.findRecord('order', params.order_id).then((res) => {
        return RSVP.hash({
          order: res,
          orderDetail: this.store.query('orderdetail', {
            filter: { idOrder: params.order_id },
          }),
          client: this.store.findRecord('User', res.user.get('id')),
        });
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
