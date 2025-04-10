const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to pad number with leading zeros
function padNumber(num) {
  return num.toString().padStart(4, '0');
}

// Function to create kebab case from title
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

// Function to create a new problem directory and files
async function createProblem() {
  // Get problem number
  const problemNumber = await new Promise(resolve => {
    rl.question('Enter problem number: ', answer => {
      resolve(answer.trim());
    });
  });

  // Get problem title
  const problemTitle = await new Promise(resolve => {
    rl.question('Enter problem title: ', answer => {
      resolve(answer.trim());
    });
  });

  // Create directory name
  const paddedNumber = padNumber(problemNumber);
  const kebabTitle = toKebabCase(problemTitle);
  const dirName = `${paddedNumber}-${kebabTitle}`;
  
  // Create full path
  const problemsDir = path.join(__dirname, '..', 'src', 'problems');
  const newProblemDir = path.join(problemsDir, dirName);
  
  // Check if directory already exists
  if (fs.existsSync(newProblemDir)) {
    console.error(`Error: Problem directory already exists: ${dirName}`);
    rl.close();
    return;
  }
  
  // Create directory
  fs.mkdirSync(newProblemDir, { recursive: true });
  
  // Read template files
  const templateDir = path.join(__dirname, '..', 'src', 'templates', 'problem-template');
  const templateFiles = ['index.ts', 'index.test.ts'];
  
  for (const file of templateFiles) {
    const templateContent = fs.readFileSync(path.join(templateDir, file), 'utf8');
    
    // Replace placeholders
    let newContent = templateContent
      .replace(/\[Problem Number\]/g, problemNumber)
      .replace(/\[Problem Title\]/g, problemTitle);
    
    // Write to new file
    fs.writeFileSync(path.join(newProblemDir, file), newContent);
  }
  
  console.log(`Successfully created problem files at: ${newProblemDir}`);
  console.log(`Don't forget to update the problem description and solution!`);
  
  rl.close();
}

// Run the function
createProblem();
