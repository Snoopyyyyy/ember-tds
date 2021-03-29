import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsAddProductRoute extends Abstractroute {
  model() {
    return RSVP.hash({
      product: {},
      sections: this.store.findAll('section'),
    });
  }

  @action
  back() {
    this.transitionTo('sections');
  }

  @action
  ajouter(model) {
    let post = this.store.createRecord('product', model.product);
    console.log(model.product.section.name);
    post.save().then(() => {
      this.back();
    });
  }

  @action
  goBoard() {
    this.transitionTo('board');
  }
}
