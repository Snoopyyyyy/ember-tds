import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class MyOrdersPreparePreparedRoute extends Route {
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
