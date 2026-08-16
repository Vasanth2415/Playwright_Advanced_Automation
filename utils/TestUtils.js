const fs = require('fs');
const path = require('path');

function loadTestData(fileName) {
    const filePath = path.join(__dirname, '..', 'testdata', fileName);
    const fileData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileData);
}

module.exports = loadTestData;