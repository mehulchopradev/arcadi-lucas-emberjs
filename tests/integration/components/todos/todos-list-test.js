import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const template = hbs`<Todos::TodosList/>`

module('Integration | Component | todos/todos-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(template);
    await pauseTest();
  });
});
