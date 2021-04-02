import Controller from '@ember/controller';
import groupBy from 'ember-group-by';

export default class MyOrdersPrepareController extends Controller {
  @groupBy('model.orderdetails', 'sectionName')
  sections;
}
