import Abstractroute from '../Abstractroute';

export default class SectionsAddProductRoute extends Abstractroute {
  model() {
    this.redirect();
  }

  renderTemplate() {
    this.render({ outlet: 'add' });
  }
}
