import Model, { attr, hasMany } from '@ember-data/model';

export default class SectionsModel extends Model {
  @attr('String') name;
  @attr('String') description;
  @hasMany('product') products;
  get Count() {
    return this.products.length;
  }
}
