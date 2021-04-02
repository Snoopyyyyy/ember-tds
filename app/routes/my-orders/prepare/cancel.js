import Abstractroute from '../../Abstractroute';
import { action } from '@ember/object';

export default class MyOrdersPrepareCancelRoute extends Abstractroute {
  @action
  delete(model) {
    model.destroyRecord().then(() => {
      this.transitionTo('myOrders');
    });
  }

  @action
  cancel(model) {
    this.transitionTo('myOrders.prepare', model.id);
  }
}
