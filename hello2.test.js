
const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello 2!");
});

test('outputs the not string', () => {
  expect(hello()).toBe("Hello 3!");
});
