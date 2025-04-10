import { removeDuplicates } from './index';

describe('26. Remove Duplicates from Sorted Array', () => {
  test('Example 1: nums = [1,1,2]', () => {
    const nums = [1, 1, 2];
    const expectedLength = 2;
    const expectedNums = [1, 2];
    
    const result = removeDuplicates(nums);
    
    expect(result).toBe(expectedLength);
    // Check that the first k elements are correct
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test('Example 2: nums = [0,0,1,1,1,2,2,3,3,4]', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expectedLength = 5;
    const expectedNums = [0, 1, 2, 3, 4];
    
    const result = removeDuplicates(nums);
    
    expect(result).toBe(expectedLength);
    // Check that the first k elements are correct
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test('No duplicates: nums = [1,2,3,4,5]', () => {
    const nums = [1, 2, 3, 4, 5];
    const expectedLength = 5;
    const expectedNums = [1, 2, 3, 4, 5];
    
    const result = removeDuplicates(nums);
    
    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test('All duplicates: nums = [1,1,1,1,1]', () => {
    const nums = [1, 1, 1, 1, 1];
    const expectedLength = 1;
    const expectedNums = [1];
    
    const result = removeDuplicates(nums);
    
    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test('Empty array: nums = []', () => {
    const nums: number[] = [];
    const expectedLength = 0;
    
    const result = removeDuplicates(nums);
    
    expect(result).toBe(expectedLength);
  });

  test('Single element: nums = [42]', () => {
    const nums = [42];
    const expectedLength = 1;
    
    const result = removeDuplicates(nums);
    
    expect(result).toBe(expectedLength);
    expect(nums[0]).toBe(42);
  });
});
