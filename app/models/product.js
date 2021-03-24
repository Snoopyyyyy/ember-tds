import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('String') name;
  @attr('String') comments;
  @attr('Number') stock;
  @attr('String') image;
  @attr('Number') price;
  @attr('Number') promotion;
  @belongsTo('section') section;
}
