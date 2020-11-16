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
});

export default Router;
