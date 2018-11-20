import MyClass from './MyClass';

test('adds 1 + 2 to equal 3', () => {
  let a = new MyClass();
  expect(a.myFunction(1, 2)).toBe(3);
});