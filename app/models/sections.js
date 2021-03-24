import Model, { attr } from '@ember-data/model';

export default class SectionsModel extends Model {
  @attr('String') name;
  @attr('String') description;
}
