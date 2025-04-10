import { romanToInt } from './index';

describe('13. Roman to Integer', () => {
  test('Example 1: s = "III"', () => {
    expect(romanToInt('III')).toBe(3);
  });

  test('Example 2: s = "LVIII"', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  test('Example 3: s = "MCMXCIV"', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });

  // Additional test cases
  test('Single numeral: s = "V"', () => {
    expect(romanToInt('V')).toBe(5);
  });

  test('All subtraction cases: s = "IV"', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  test('All subtraction cases: s = "IX"', () => {
    expect(romanToInt('IX')).toBe(9);
  });

  test('All subtraction cases: s = "XL"', () => {
    expect(romanToInt('XL')).toBe(40);
  });

  test('All subtraction cases: s = "XC"', () => {
    expect(romanToInt('XC')).toBe(90);
  });

  test('All subtraction cases: s = "CD"', () => {
    expect(romanToInt('CD')).toBe(400);
  });

  test('All subtraction cases: s = "CM"', () => {
    expect(romanToInt('CM')).toBe(900);
  });

  test('Largest possible value: s = "MMMCMXCIX"', () => {
    expect(romanToInt('MMMCMXCIX')).toBe(3999);
  });

  test('Complex case with multiple subtractions: s = "MCMXLIV"', () => {
    expect(romanToInt('MCMXLIV')).toBe(1944);
  });
});
