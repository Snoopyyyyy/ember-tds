import Abstractroute from '../Abstractroute';
import { tracked } from "@glimmer/tracking";

export default class SectionsAddProductRoute extends Abstractroute {
  @tracked name;

  renderTemplate() {
    this.render({ outlet: 'add' });
  }
}
