
const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello world!");
});

test('outputs the not string', () => {
  expect(hello()).toBe("Hello world!");
});
