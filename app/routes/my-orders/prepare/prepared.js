import { action } from '@ember/object';
import Abstractroute from '../../Abstractroute';

export default class MyOrdersPreparePreparedRoute extends Abstractroute {
  @action
  valider(order) {
    order.set('status', 'prepared');
    order.save().then(() => {
      this.transitionTo('myOrders');
    });
  }

  @action
  cancel(model) {
    this.transitionTo('myOrders.prepare', model.id);
  }
}
