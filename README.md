#Purpose
This module provides a set of string validation functions, allowing users to perform various checks on strings such as validating email addresses, checking for uppercase and lowercase letters, verifying if a string is a palindrome, and more.

#Installation
Use the command `npm i` or `npm install` to install the projects dependencies.

#How to test
To run tests and ensure that the methods work as intended, use the following command:
`npm run test`

This will execute the test suite and provide feedback on the correctness and functionality of the implemented methods.

#Example usecase of validating a password
```javascript
  const { ValidateString } = require('validateString');
  const validator = new ValidateString();

  const password = 'MySecurePassword123!';
  const options = {
    mustHaveNumber: true,
    mustHaveUppercase: true,
    mustHaveLowercase: true,
    mustHaveOneOf: ['!', '@', '#', '$', '%', '^', '&', '*'],
    cantHaveAnyOf: ['password', '123456', 'qwerty'],
    rainbowTable: ['password123', 'letmein']
  };

  const isPasswordValid = validator.isPassword(password, options);

  if (!isPasswordValid) {
    console.log('Invalid password. Please follow the password requirements.');
    return;
  }
```
