import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const template = hbs`{{capitalize inputValue}}`

module('Integration | Helper | capitalize', function(hooks) {
  setupRenderingTest(hooks);

  test('it capitalizes the passed input', async function(assert) {
    this.inputValue = 'program Java';

    await render(template);

    assert.equal(this.element.textContent.trim(), 'Program java');
  });

  test('it capitalizes a one character input', async function(assert) {
    this.inputValue = 'p';

    await render(template);

    assert.equal(this.element.textContent.trim(), 'P');
  });

  test('it returns an empty string when no input passed to helper', async function(assert) {
    this.inputValue = null;

    await render(template);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('it capitalizes one worded input', async function(assert) {
    this.inputValue = 'progRaMming';

    await render(template);

    assert.equal(this.element.textContent.trim(), 'Programming');
  });
});
