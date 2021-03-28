import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';

export default class SectionsDeleteRoute extends Abstractroute {
  model(params) {
    let controller = this.controllerFor(this.routeName);
    controller.set('length', 0);
    return this.store.findRecord('section', params.section_id, {
      include: 'products',
    });
  }

  @action
  back() {
    this.transitionTo('sections');
  }

  @action
  delete(model) {
    let controller = this.controllerFor(this.routeName);
    controller.set('length', 0);
    controller.set('max', model.products.length);
    this.deleteProducts(model.products, controller).then(() => {
      model.destroyRecord().then(() => {
        this.transitionTo('sections');
      });
    });
  }

  @action
  cancel() {
    this.transitionTo('sections');
  }

  async deleteProducts(products, controller) {
    let max = products.length;
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
      controller.set('length', max - products.length);
    }
  }
}
