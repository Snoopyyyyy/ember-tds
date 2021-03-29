import Abstractroute from '../Abstractroute';
import { action, set } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsEditRoute extends Abstractroute {
  model(params) {
    return RSVP.hash({
      section: this.store.findRecord('section', params.section_id, {
        include: 'products',
      }),
      isEdit: false,
    });
  }

  @action
  cancel(model) {
    set(model, 'isEdit', false);
    model.section.rollbackAttributes();
    this.transitionTo('sections.edit', model.section.get('id'));
    this.refresh();
  }

  @action back() {
    this.transitionTo('sections');
  }

  @action
  goBoard() {
    this.transitionTo('board');
  }

  @action
  editing(model) {
    set(model, 'isEdit', !model.isEdit);
  }

  @action
  update(model) {
    model.section.save().then(() => {
      set(model, 'isEdit', false);
      this.transitionTo('sections.edit', model.section.get('id'));
      this.refresh();
    });
  }
}
