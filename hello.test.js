const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello lab1!");
});
