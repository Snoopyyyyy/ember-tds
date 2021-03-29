import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsEditAddProductRoute extends Route {
  model(params) {
    return RSVP.hash({
      product: {},
      section: this.store.findRecord('section', params.section_id),
    });
  }

  @action
  ajouter(model) {
    model.product.section = model.section;
    let post = this.store.createRecord('product', model.product);
    post.save().then(() => {
      this.back(model);
    });
  }

  @action
  back(model) {
    this.transitionTo('sections.edit', model.section.id);
  }
}
