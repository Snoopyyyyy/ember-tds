import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sections', function() {
    this.route('add');
    this.route('addProduct');
    this.route('delete');
    this.route('edit');
  });

  this.route('section', function() {});
  this.route('board');
});
