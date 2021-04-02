import Model, { attr, belongsTo } from '@ember-data/model';

export default class OrderdetailModel extends Model {
  @attr('number') quantite;
  @attr('number') prepare;
  @belongsTo('order') order;
  @belongsTo('product') product;
}
