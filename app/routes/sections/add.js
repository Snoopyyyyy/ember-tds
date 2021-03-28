import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';

export default class SectionsAddRoute extends Abstractroute {

  model() {
    return { products: [] };
  }

  @action
  ajouter(section) {
    let post = this.store.createRecord('section', section);
    post.save().then(() => {
      this.back();
    });
  }

  @action
  back() {
    this.transitionTo('sections');
  }
}
