import { module, test } from 'qunit';
import { visit, currentURL, pauseTest, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

const selectors = {
  calcLink: '[data-ref="app.calculator.link"]',
  todosLink: '[data-ref="app.todos.link"]'
};

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('the navigation of the calculator and todos route', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');

    assert.dom(selectors.calcLink).exists();
    assert.dom(selectors.todosLink).exists();

    assert.dom(selectors.calcLink).hasText('Calculator');
    assert.dom(selectors.todosLink).hasText('Todos');

    await click(selectors.calcLink);
    assert.equal(currentURL(), '/calc');

    await click(selectors.todosLink);
    assert.equal(currentURL(), '/todos');
  });
});
