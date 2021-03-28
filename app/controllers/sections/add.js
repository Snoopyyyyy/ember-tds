import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SectionsAddController extends Controller {
  @tracked name;
  @tracked description;

  @action
  ajouter() {
    if (this.name != null && this.description != null) {
      console.log('add');
      let post = this.store.createRecord('section', {
        name: this.name,
        description: this.description,
        products: [],
      });
      post.save();
    }
  }
}
