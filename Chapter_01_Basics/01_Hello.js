//console.log('hello!');

const readline = require('readline'); // Import the built-in readline module

// Create an interface for input and output streams
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user a question
rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`); // Process the user input
  
  rl.close(); // Close the interface to stop the program
});
