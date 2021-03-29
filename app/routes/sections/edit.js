import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';

export default class SectionsEditRoute extends Abstractroute {
  model(params) {
    return this.store.findRecord('section', params.section_id, {
      include: 'products',
    });
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

  @action
  goBoard() {
    this.transitionTo('board');
  }
}
