import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SectionsController extends Controller {
  @tracked activeSection;

  @action
  toggle(id) {
    this.activeSection = id;
  }
}
