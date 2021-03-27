import Abstractroute from '../Abstractroute';

export default class SectionsDeleteRoute extends Abstractroute {
  myId;
  section;
  model(params) {
    this.myId = params.section_id;
    this.store
      .query('section', { filter: { id: params.section_id } })
      .then((section) => {
        this.section = section;
        console.log(this.section);
      });
    return this.section;
  }

  get section() {
    return this.section;
  }
}
