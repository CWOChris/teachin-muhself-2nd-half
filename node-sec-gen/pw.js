const crypto = require('crypto');
const readline = require('readline');
const fs = require('fs');
const XLSX = require('xlsx');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generatePassword(length, includeSymbols) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' + (includeSymbols ? '!@#$%^&*' : '');
    const bytes = crypto.randomBytes(Math.ceil(length * charset.length / 8));
    let result = '';
    for (let i=0; i < length; i++) {
        const index = bytes[i] % charset.length;
        result += charset[index];
    }
    return result;
}

function generateMultiplePasswords(numPasswords, length, includeSymbols) {
    const passwords = [];
    for (let i = 0; i < numPasswords; i++) {
        passwords.push(generatePassword(length, includeSymbols));
    }
    return passwords;
}

rl.question('Include symbols? (y/n): ', (answer) => {
    const includeSymbols = answer.trim().toLowerCase() === 'y';

    rl.question('Length of password: ', (length) => {
        length = parseInt(length);

        rl.question('Number of passwords to generate: ', (numPasswords) => {
            numPasswords = parseInt(numPasswords);

            const passwords = generateMultiplePasswords(numPasswords, length, includeSymbols);
            console.log('Generated passwords:');
            passwords.forEach((password, index) => {
                console.log(`${index + 1}. ${password}`);
            });

            const workbook = XLSX.utils.book_new();
            const sheet = XLSX.utils.aoa_to_sheet([['Generated Passwords']]);
            passwords.forEach((password, index) => {
                XLSX.utils.sheet_add_aoa(sheet, [[password]], {origin: -1}); // Adds password in a new row under the same column
            });
            XLSX.utils.book_append_sheet(workbook, sheet, "Passwords");

            const outputPath = 'generated_passwords.xlsx';
            XLSX.writeFile(workbook, outputPath);
            console.log(`Passwords written to ${outputPath}`);

            rl.close();
        });
    });
});
