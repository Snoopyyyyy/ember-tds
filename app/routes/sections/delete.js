import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';

export default class SectionsDeleteRoute extends Abstractroute {
  myId;
  section;
  products;
  model(params) {
    this.redirect();
    this.myId = params.section_id;
    this.section = this.store.peekRecord('section', params.section_id);
    this.products = this.store.query('product', {
      filter: { idSection: params.section_id },
    });
    let result = {};
    result.products = this.products;
    result.section = this.section;
    return result;
  }

  @action
  delete(bool) {
    if (bool) {
      this.deleteProducts(this.products).then(() => {
        this.section.destroyRecord();
        this.transitionTo('sections');
      });
    } else {
      this.transitionTo('sections');
    }
  }

  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
    }
  }
}
