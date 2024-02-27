const crypto = require('crypto');
const readline = require('readline');

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

            rl.close();
        });
    });
});
