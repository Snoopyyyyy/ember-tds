import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsEditEditRoute extends Route {
  model(params) {
    params.section_id;
    params.product_id;
  }

  @action
  goBoard() {
    this.transitionTo('board');
  }
}
