import Model, { attr, belongsTo } from '@ember-data/model';

export default class OrderdetailModel extends Model {
  @attr('number') quantity;
  @attr('number') prepared;
  @belongsTo('product') product;
  @belongsTo('order') order;

  get sectionName() {
    return this.product.get('section').get('name');
  }
}
