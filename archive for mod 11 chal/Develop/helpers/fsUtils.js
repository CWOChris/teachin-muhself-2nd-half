// I used code from 11-Express 28 Mini Project

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const readFromFile = (file, content) =>
    writeFile(file, JSON.stringify(content, null, 2));

const readAndAppend = (file, content) => {
    readFile(file, 'utf8')
       .then((data) => {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
       })
       .catch((err) => console.log(err));
};

module.exports = { readFromFile, readAndAppend, writeToFile };