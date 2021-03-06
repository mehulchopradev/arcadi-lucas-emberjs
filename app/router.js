import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // route (calculator) - controller (calculator) - template (calculator)
  this.route('calculator', {
    path: 'calc'
  });
  // route (todos) - controller (todos) - template (todos)
  this.route('todos');
  this.route('library', function() {
    this.route('books');
    this.route('book-details', { path: '/book-details/:book_id'});
  });
});

export default Router;
