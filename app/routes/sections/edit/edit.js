import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsEditEditRoute extends Route {
  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action back(model) {
    model.rollbackAttributes();
    this.transitionTo('sections.edit', model.section.get('id'));
  }

  @action update(model) {
    model.save().then(() => {
      this.transitionTo('sections.edit', model.section.get('id'));
    });
  }
}
