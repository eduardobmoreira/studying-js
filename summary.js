const fs = require('fs');
const path = require('path');

const inputDir = './'; // Change to your target directory
const outputFile = './summary.txt';

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  let outputContent = '';

  files.forEach(file => {
    const filePath = path.join(inputDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      const content = fs.readFileSync(filePath, 'utf8');
      outputContent += `=== ${file} ===\n${content}\n\n`;
    }
  });

  fs.writeFileSync(outputFile, outputContent, 'utf8');
  console.log(`Content written to ${outputFile}`);
});