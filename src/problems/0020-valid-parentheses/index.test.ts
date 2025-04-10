import { isValid } from './index';

describe('20. Valid Parentheses', () => {
  // These tests will fail until the solution is implemented
  test('Example 1: s = "()"', () => {
    expect(isValid('()')).toBe(true);
  });

  test('Example 2: s = "()[]{}"', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('Example 3: s = "(]"', () => {
    expect(isValid('(]')).toBe(false);
  });

  // Additional test cases (also skipped)
  test('Empty string', () => {
    expect(isValid('')).toBe(true);
  });

  test('Nested parentheses: s = "([{}])"', () => {
    expect(isValid('([{}])')).toBe(true);
  });

  test('Unbalanced opening brackets: s = "((("', () => {
    expect(isValid('(((')).toBe(false);
  });

  test('Unbalanced closing brackets: s = ")))"', () => {
    expect(isValid(')))')).toBe(false);
  });

  test('Incorrect order: s = "([)]"', () => {
    expect(isValid('([)]')).toBe(false);
  });

  test('Complex valid case: s = "{[]}()[{}]"', () => {
    expect(isValid('{[]}()[{}]')).toBe(true);
  });
});
