import { module, test } from 'qunit';
import { visit, currentURL, pauseTest, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

const selectors = {
  firstField: '[data-ref="calculator.first.field"]',
  secondField: '[data-ref="calculator.second.field"]',
  thirdField: '[data-ref="calculator.ans.field"]',
  operationsField: '[data-ref="calculator.operations.field"]',
  calcBtn: '[data-ref="calculator.calc.btn"]',
  firstLabel: '[data-ref="calculator.first.label"]',
  secondLabel: '[data-ref="calculator.second.label"]',
  ansLabel: '[data-ref="calculator.ans.label"]',
  ansContainer: '[data-ref="calculator.ans.container"]',
  operationLabel: '[data-ref="calculator.operation.label"]',
  calcHeader: '[data-ref="calculator.heading"]',
};

module('Acceptance | calculator', function(hooks) {
  setupApplicationTest(hooks);

  test('the basic functionality of the calculator route', async function(assert) {
    await visit('/calc');

    assert.equal(currentURL(), '/calc'); // my router transition to calculator route was successful
    assert.dom(selectors.calcHeader).hasText('Calculator application');

    // TODO:
    // not ideal. We will come back to this. Http calls must be mocked rather than hitting the server
    assert.dom(selectors.firstField).hasValue('50');
    assert.dom(selectors.secondField).hasValue('40');
    assert.dom(selectors.thirdField).hasValue('90');

    assert.dom(selectors.firstLabel).hasText('50');
    assert.dom(selectors.secondLabel).hasText('40');

    await fillIn(selectors.firstField, '30');
    await fillIn(selectors.secondField, '20');
    assert.dom(selectors.firstLabel).hasText('30');
    assert.dom(selectors.secondLabel).hasText('20');

    await click(selectors.calcBtn);
    assert.dom(selectors.thirdField).hasValue('50');
    assert.dom(selectors.ansLabel).hasText('50');

    await fillIn(selectors.operationsField, '*');
    assert.dom(selectors.operationLabel).hasText('*');
  });
});
