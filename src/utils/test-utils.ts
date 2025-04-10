/**
 * Utility functions for testing LeetCode solutions
 */

/**
 * Measures the execution time of a function
 * @param fn Function to measure
 * @param args Arguments to pass to the function
 * @returns [result, executionTimeMs]
 */
export function measureExecutionTime<T, Args extends any[]>(
  fn: (...args: Args) => T,
  ...args: Args
): [T, number] {
  const start = performance.now();
  const result = fn(...args);
  const end = performance.now();
  return [result, end - start];
}

/**
 * Compares two arrays without regard to order
 * Useful for problems where the order of the result doesn't matter
 */
export function arraysContainSameElements<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) return false;
  
  const counter = new Map<T, number>();
  
  // Count elements in arr1
  for (const item of arr1) {
    counter.set(item, (counter.get(item) || 0) + 1);
  }
  
  // Decrement counts for elements in arr2
  for (const item of arr2) {
    const count = counter.get(item);
    if (count === undefined || count === 0) return false;
    counter.set(item, count - 1);
  }
  
  return true;
}
