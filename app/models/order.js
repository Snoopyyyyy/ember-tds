import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('Date') dateCreation;
  @belongsTo('user') user;
  @belongsTo('employee') employee;
  @attr('string') status;
  @attr('number') amount;
  @attr('number') toPay;
  @attr('number') itemsNumber;
  @attr('number') missingNumber;
  @belongsTo('timeslot') timeslot;
  @hasMany('orderdetail') orderdetails;

  get Count() {
    return this.orderdetails.length;
  }
}
