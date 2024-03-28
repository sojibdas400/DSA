import { module, test } from 'qunit';
import { setupTest } from 'dsa/tests/helpers';

module('Unit | Route | stacks', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:stacks');
    assert.ok(route);
  });
});
