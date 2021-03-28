import Route from '@ember/routing/route';

export default class SectionsEditEditRoute extends Route {
  model(params) {
    params.section_id;
    params.product_id;
  }
}
