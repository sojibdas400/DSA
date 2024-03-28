import { module, test } from 'qunit';
import { setupTest } from 'dsa/tests/helpers';

module('Unit | Controller | stacks', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:stacks');
    assert.ok(controller);
  });
});
