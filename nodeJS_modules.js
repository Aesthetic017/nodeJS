const fs = require("fs");

// Read the content from the file
let text = fs.readFileSync("example1.txt", "utf-8"); // Change const to let here

// Replace "This" with "Hi Ashutosh"
text = text.replace("This", "Hi Ashutosh"); // This reassignment is now allowed

// Log the content and create a new file
console.log("The content of the example file is:");
console.log(text);
console.log("Creating new file...");

// Write the updated content to a new file
fs.writeFileSync("demo.txt", text);

