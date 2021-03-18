import Model, { attr } from '@ember-data/model';

export default class TimeslotModel extends Model {
  @attr('Date') slotDate;
  @attr('number') full;
  @attr('number') expired;
}
