
const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello('faith')).toBe("Hello faith2!");
});

test('outputs the not string', () => {
  expect(hello()).toBe("Hello lab1!");
});
