import { removeElement } from './index';

describe('27. Remove Element', () => {
  test('Example 1: nums = [3,2,2,3], val = 3', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const expectedLength = 2;
    
    const result = removeElement(nums, val);
    
    expect(result).toBe(expectedLength);
    
    // Sort the first k elements to match the judge's verification
    nums.sort((a, b) => a - b);
    
    // Check that the first k elements don't contain val
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).not.toBe(val);
    }
  });

  test('Example 2: nums = [0,1,2,2,3,0,4,2], val = 2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const expectedLength = 5;
    
    const result = removeElement(nums, val);
    
    expect(result).toBe(expectedLength);
    
    // Sort the first k elements to match the judge's verification
    const firstK = nums.slice(0, result).sort((a, b) => a - b);
    for (let i = 0; i < result; i++) {
      nums[i] = firstK[i];
    }
    
    // Check that the first k elements don't contain val
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).not.toBe(val);
    }
  });

  test('Empty array: nums = [], val = 1', () => {
    const nums: number[] = [];
    const val = 1;
    const expectedLength = 0;
    
    const result = removeElement(nums, val);
    
    expect(result).toBe(expectedLength);
  });

  test('No occurrences of val: nums = [1,2,3,4], val = 5', () => {
    const nums = [1, 2, 3, 4];
    const val = 5;
    const expectedLength = 4;
    
    const result = removeElement(nums, val);
    
    expect(result).toBe(expectedLength);
    
    // Sort the first k elements
    const firstK = nums.slice(0, result).sort((a, b) => a - b);
    for (let i = 0; i < result; i++) {
      nums[i] = firstK[i];
    }
    
    // Check that the elements are as expected
    expect(nums.slice(0, expectedLength).sort((a, b) => a - b)).toEqual([1, 2, 3, 4]);
  });

  test('All elements are val: nums = [5,5,5,5], val = 5', () => {
    const nums = [5, 5, 5, 5];
    const val = 5;
    const expectedLength = 0;
    
    const result = removeElement(nums, val);
    
    expect(result).toBe(expectedLength);
  });

  test('Single element equal to val: nums = [5], val = 5', () => {
    const nums = [5];
    const val = 5;
    const expectedLength = 0;
    
    const result = removeElement(nums, val);
    
    expect(result).toBe(expectedLength);
  });

  test('Single element not equal to val: nums = [5], val = 3', () => {
    const nums = [5];
    const val = 3;
    const expectedLength = 1;
    
    const result = removeElement(nums, val);
    
    expect(result).toBe(expectedLength);
    expect(nums[0]).toBe(5);
  });
});
