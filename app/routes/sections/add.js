import Abstractroute from '../Abstractroute';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SectionsAddRoute extends Abstractroute {
  @tracked name;
  @tracked description;

  model() {
    this.redirect();
  }

  @action
  back() {
    this.transitionTo('sections');
  }

  @action
  ajouter() {
    if (this.name != null && this.description != null) {
      this.back();
    }
  }
}
