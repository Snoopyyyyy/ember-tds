import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SectionsEditRoute extends Abstractroute {
  myId;
  products;
  model(params) {
    let resut = {};
    this.redirect();
    this.myId = params.section_id;
    resut.name = this.store.peekRecord('section', this.myId).name;
    this.products = this.store.query('product', {
      filter: { idSection: params.section_id },
    });
    resut.products = this.products;
    resut.myId = params.section_id;
    return resut;
  }

  @action
  back() {
    this.transitionTo('sections');
  }

  @action
  delete(product) {
    if (!product.get('isDeleted')) {
      product.deleteRecord();
    } else {
      product.rollbackAttributes();
    }
  }

  @action
  save() {
    this.products.forEach(function (item) {
      item.save();
    });
  }

  @action
  cancel() {
    this.products.forEach(function (item) {
      if (item.get('isDeleted')) {
        item.rollbackAttributes();
      }
    });
  }
}
