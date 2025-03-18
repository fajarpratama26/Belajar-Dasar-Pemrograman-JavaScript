import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; // Pastikan impor sesuai dengan path file Anda

test('sum() should return 0 for non-numeric inputs', () => {
  assert.strictEqual(sum('a', 1), 0); // input pertama bukan angka
  assert.strictEqual(sum(1, 'b'), 0); // input kedua bukan angka
  assert.strictEqual(sum('a', 'b'), 0); // kedua input bukan angka
});

test('sum() should return 0 for negative numbers', () => {
  assert.strictEqual(sum(-1, 1), 0); // input pertama negatif
  assert.strictEqual(sum(1, -1), 0); // input kedua negatif
  assert.strictEqual(sum(-1, -1), 0); // kedua input negatif
});

test('sum() should return correct sum for positive numbers', () => {
  assert.strictEqual(sum(1, 1), 2); // 1 + 1 = 2
  assert.strictEqual(sum(100, 200), 300); // 100 + 200 = 300
  assert.strictEqual(sum(0, 0), 0); // 0 + 0 = 0
});

test('sum() should return 0 for zero and any other number', () => {
  assert.strictEqual(sum(0, 5), 5); // 0 + 5 = 5
  assert.strictEqual(sum(5, 0), 5); // 5 + 0 = 5
});
