import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, fillIn, click, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

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
};

const template = hbs`<Calculator/>`;

module('Integration | Component | calculator', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the calculator component with the default data in the appropriate gui elements', async function(assert) {
    await render(template);
    // await pauseTest();
    assert.dom(selectors.firstField).hasValue('12');
    assert.dom(selectors.secondField).hasValue('10');
    assert.dom(selectors.thirdField).hasValue('22');
  });

  test('it verifies the actual calculation functionality', async function (assert) {
    await render(template);
    await fillIn(selectors.firstField, '30');
    await fillIn(selectors.secondField, '20');
    await fillIn(selectors.operationsField, '-');
    await click(selectors.calcBtn);

    assert.dom(selectors.thirdField).hasValue('10');
  });

  test('it verifies the enabling/disabling of the calculate button', async function (assert) {
    await render(template);
    assert.dom(selectors.calcBtn).isNotDisabled();

    await fillIn(selectors.firstField, '');
    assert.dom(selectors.calcBtn).isDisabled();

    await fillIn(selectors.firstField, '45');
    assert.dom(selectors.calcBtn).isNotDisabled();

    await fillIn(selectors.secondField, '');
    assert.dom(selectors.calcBtn).isDisabled();

    await fillIn(selectors.secondField, '55');
    assert.dom(selectors.calcBtn).isNotDisabled();

    await fillIn(selectors.secondField, '');
    assert.dom(selectors.calcBtn).isDisabled();

    await fillIn(selectors.secondField, 'mehul');
    assert.dom(selectors.calcBtn).isDisabled();

    await fillIn(selectors.secondField, '34');
    assert.dom(selectors.calcBtn).isNotDisabled();
  });

  test('it verifies that the calculation result labels stay in sync with the form elements', async function(assert) {
    await render(template);
    assert.dom(selectors.firstField).hasValue('12');
    assert.dom(selectors.secondField).hasValue('10');
    assert.dom(selectors.thirdField).hasValue('22');

    assert.dom(selectors.firstLabel).hasText('12');
    assert.dom(selectors.secondLabel).hasText('10');

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


  test('it shows/hides the ans label field appropriately', async function (assert) {
    await render(template);
    assert.dom(selectors.ansContainer).exists();

    await typeIn(selectors.firstField, '34');
    assert.dom(selectors.ansContainer).doesNotExist();

    await click(selectors.calcBtn);
    assert.dom(selectors.ansContainer).exists();

    await typeIn(selectors.secondField, '390');
    assert.dom(selectors.ansContainer).doesNotExist();

    await click(selectors.calcBtn);
    assert.dom(selectors.ansContainer).exists();
  });
});
