const fs = require('fs');
const path = require('path');

function readJsonFile(fileName) {
    const filePath = path.join(__dirname, '../../json', fileName);
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                reject('Failed to read file');
                return;
            }
            resolve(JSON.parse(data));
        });
    });
}

module.exports = { readJsonFile };