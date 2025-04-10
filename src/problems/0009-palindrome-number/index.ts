export function isPalindrome(x: number): boolean {
    if(x < 0) return false;

    const reversedNumber: number = +`${x}`.split('').reverse().join('');
    
    return x === reversedNumber;
};