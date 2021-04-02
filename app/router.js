import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sections', function () {
    this.route('add');
    this.route('addProduct');
    this.route('delete', { path: '/delete/:section_id' });
    this.route('edit', { path: '/edit/:section_id' }, function() {
      this.route('addProduct', { path: '../../edit/:section_id/addProduct' });
      this.route('edit', { path: '/edit/:product_id' });
      this.route('delete', { path: '/delete/:product_id' });
    });
  });

  this.route('board');
  this.route('myOrders', function() {
    this.route('prepare', { path: '/prepare/:order_id' });
  });
});
