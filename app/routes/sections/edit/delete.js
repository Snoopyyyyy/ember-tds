import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsEditDeleteRoute extends Route {
  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action
  back() {
    this.transitionTo('sections');
  }

  @action
  goBoard() {
    this.transitionTo('board');
  }

  @action
  delete(model) {
    model.save().then(() => {
      this.transitionTo('sections.edit');
    });
  }

  @action
  cancel() {
    this.transitionTo('sections.edit');
  }
}
