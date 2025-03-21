import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Test case for the sum function
test('Testing sum function', () => {
  assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
  assert.strictEqual(sum(-1, 1), 0, '-1 + 1 should equal 0');
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  assert.strictEqual(sum(10, -5), 5, '10 + (-5) should equal 5');
});
