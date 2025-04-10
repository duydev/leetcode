# LeetCode Solutions in TypeScript

[![Run Tests](https://github.com/duydev/leetcode/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/duydev/leetcode/actions/workflows/test.yml)

This repository contains solutions to LeetCode problems implemented in TypeScript with automated testing.

## Project Overview

This project is designed to:
- Provide a structured environment for solving LeetCode problems in TypeScript
- Include automated testing for each solution to verify correctness
- Make it easy to add new problems and solutions
- Track progress and maintain a personal library of algorithm implementations

## Solved Problems

| # | Title | Difficulty | Solution | Test |
|---|-------|------------|----------|------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | [Solution](src/problems/0001-two-sum/index.ts) | [Test](src/problems/0001-two-sum/index.test.ts) |
| 9 | [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | Easy | [Solution](src/problems/0009-palindrome-number/index.ts) | [Test](src/problems/0009-palindrome-number/index.test.ts) |
| 13 | [Roman to Integer](https://leetcode.com/problems/roman-to-integer/) | Easy | [Solution](src/problems/0013-roman-to-integer/index.ts) | [Test](src/problems/0013-roman-to-integer/index.test.ts) |
| 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Easy | [Solution](src/problems/0020-valid-parentheses/index.ts) | [Test](src/problems/0020-valid-parentheses/index.test.ts) |
| 26 | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Easy | [Solution](src/problems/0026-remove-duplicates-from-sorted-array/index.ts) | [Test](src/problems/0026-remove-duplicates-from-sorted-array/index.test.ts) |

## Project Structure

```
leetcode/
├── src/
│   ├── problems/           # LeetCode solutions organized by problem number
│   │   ├── 0001-two-sum/
│   │   │   ├── index.ts    # Solution implementation
│   │   │   └── index.test.ts # Tests for the solution
│   │   └── ...
│   ├── templates/          # Templates for new problems
│   │   └── problem-template/
│   │       ├── index.ts
│   │       └── index.test.ts
│   └── utils/              # Utility functions for testing and problem solving
│       └── test-utils.ts
├── scripts/                # Helper scripts
│   └── create-problem.js   # Script to create new problem files from template
├── jest.config.js          # Jest configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd leetcode

# Install dependencies
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests for a specific problem
npm test -- src/problems/0001-two-sum

# Run tests matching a specific name
npm test -- -t "Two Sum"
```

## Adding a New Solution

### Using the Helper Script

```bash
# Run the create-problem script
npm run new-problem
```

Follow the prompts to enter the problem number and title. The script will:
1. Create a new directory with the proper naming convention
2. Set up template files for the solution and tests
3. Prepare the files with the correct problem number and title

### Manual Creation

1. Create a new directory under `src/problems` with the format `{number}-{problem-name}`
2. Add your solution in `index.ts`
3. Add tests in `index.test.ts`
4. Run tests to verify your solution

## Testing Approach

Each solution includes a test file that:
- Tests the example cases provided by LeetCode
- May include additional edge cases
- Verifies the expected output for each input

## Tips for Problem Solving

1. Understand the problem thoroughly before coding
2. Consider edge cases in your solution
3. Optimize for time and space complexity
4. Use TypeScript features to make your code more robust
5. Write comprehensive tests to verify your solution

## License

MIT
