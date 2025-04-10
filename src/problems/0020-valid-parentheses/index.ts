/**
 * Problem: 20. Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * 
 * Constraints:
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 */

export function isValid(s: string): boolean {
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (["(", "{", "["].includes(s[i])) {
            stack.push(s[i]);
        }

        if ([")", "}", "]"].includes(s[i])) {
            const b = stack.pop();
            
            if(
                (s[i] === ")" && b !== "(") ||
                (s[i] === "}" && b !== "{") ||
                (s[i] === "]" && b !== "[")
            ) {
                return false;
            }
        }
    }

    return !stack.length;
}
