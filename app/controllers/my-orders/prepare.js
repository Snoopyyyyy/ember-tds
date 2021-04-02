import Controller from '@ember/controller';
import groupBy from 'ember-group-by';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MyOrdersPrepareController extends Controller {
  @groupBy('orderdetails', 'sectionName')
  sections;
  @tracked orderdetails;

  get length() {
    return this.orderdetails.filterBy('prepared').length;
  }

  get max() {
    return this.orderdetails.length;
  }

  @action
  switch(orderdetail) {
    orderdetail.set('prepared', !orderdetail.prepared);
    orderdetail.save();
  }
}
