import { isPalindrome } from './index';

describe('9. Palindrome Number', () => {
  test('Example 1: x = 121', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('Example 2: x = -121', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test('Example 3: x = 10', () => {
    expect(isPalindrome(10)).toBe(false);
  });

  // Additional test cases
  test('Single digit number: x = 7', () => {
    expect(isPalindrome(7)).toBe(true);
  });

  test('Zero: x = 0', () => {
    expect(isPalindrome(0)).toBe(true);
  });

  test('Even number of digits: x = 1221', () => {
    expect(isPalindrome(1221)).toBe(true);
  });

  test('Large palindrome: x = 12344321', () => {
    expect(isPalindrome(12344321)).toBe(true);
  });

  test('Large non-palindrome: x = 12345678', () => {
    expect(isPalindrome(12345678)).toBe(false);
  });

  test('Number ending with zero: x = 100', () => {
    expect(isPalindrome(100)).toBe(false);
  });
});
