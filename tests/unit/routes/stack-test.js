import { module, test } from 'qunit';
import { setupTest } from 'dsa/tests/helpers';

module('Unit | Route | stack', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:stack');
    assert.ok(route);
  });
});
