const countPairs = require('./index');
const { input } = require("./input.json");

test('countPairs has correct result', () => {
  expect(countPairs(input, 72007)).toEqual(3);
});

test('countPairs has runtime less than 1s', () => {
  const start = new Date()
  countPairs(input, 72007)
  const end = new Date() - start
  expect(end).toBeLessThan(1000);
});
