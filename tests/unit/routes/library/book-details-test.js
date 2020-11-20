import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | library/book-details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:library/book-details');
    assert.ok(route);
  });
});
