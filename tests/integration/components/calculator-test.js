import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const selectors = {
  firstField: '[data-ref="calculator.first.field"]',
  secondField: '[data-ref="calculator.second.field"]',
  thirdField: '[data-ref="calculator.ans.field"]'
}

module('Integration | Component | calculator', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the calculator component with the default data in the appropriate gui elements', async function(assert) {
    await render(hbs`<Calculator />`);
    // await pauseTest();
    assert.dom(selectors.firstField).hasValue('12');
    assert.dom(selectors.secondField).hasValue('10');
    assert.dom(selectors.thirdField).hasValue('22');
  });
});
