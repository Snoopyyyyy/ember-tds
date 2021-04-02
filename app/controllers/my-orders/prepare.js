import Controller from '@ember/controller';
import groupBy from 'ember-group-by';
import { tracked } from '@glimmer/tracking';

export default class MyOrdersPrepareController extends Controller {
  @groupBy('model.orderdetails', 'sectionName')
  sections;

  @tracked max;
  @tracked length;
}
