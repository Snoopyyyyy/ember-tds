import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
  @tracked content = 'valeur par default';
  @tracked info = '';

  messageNote = '';
  @tracked styles = 'alert-info';
  const;
  MAX = 100;

  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    return this.styles;
  }

  @action
  update() {
    if (this.content.length > 0) {
      this.info = 'Note modifiée';
      if (this.content.length > 80) {
        this.styles = 'alert-danger';
      } else if (this.content.length > 50) {
        this.styles = 'alert-warning';
      } else {
        this.styles = 'alert-info';
      }
    } else {
      this.info = '';
    }
    console.log(this.styles);
  }

  @action
  save() {
    if (this.content.length > 0) {
      this.info = 'Note sauvegardée';
      this.styles = 'alert-success';
      this.messageNote = this.content.toString();
    } else {
      this.info = '';
    }
  }

  @action
  clear() {
    this.content = '';
    this.styles = 'alert-info';
    this.info = '';
  }
}
