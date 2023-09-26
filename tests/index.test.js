const { ValidateString } = require('../src/index')

console.log(typeof ValidateString)

const validate = new ValidateString()

const emailTestValues = {
  'test@example.com': true,
  '123': false,
  '@email.com': false,
  'olle@email': false,
  'olle@.com' : false
}

const passwordTestValues = {
  //rainbowtabletest
  '123': {
    arguments: {
      mustHaveNumber: true,
      mustHaveUppercase: false,
      mustHaveLowercase: false,
      mustHaveOneOf: [],
      cantHaveAnyOf: [],
      rainbowTable: ['123'],
    },
    expected: false,
  },
  'password123': {
    arguments: {
      mustHaveNumber: true,
      rainbowTable: ['123'],
    },
    expected: true,
  },

  // required character test
  '123': {
    arguments: {
      mustHaveOneOf: ['$'],
    },
    expected: false,
  },
  'password$': {
    arguments: {
      mustHaveOneOf: ['$'],
    },
    expected: true,
  },

  // blacklisted character test
  '123': {
    arguments: {
      mustHaveUppercase: true,
    },
    expected: false,
  },
  'Password': {
    arguments: {
      mustHaveUppercase: true,
    },
    expected: true,
  },

    // uppercase character test
    '123': {
      arguments: {
        cantHaveAnyOf: ['$'],
      },
      expected: true,
    },
    'password$': {
      arguments: {
        cantHaveAnyOf: ['$'],
      },
      expected: false,
    },

    // uppercase character test
    'PASSWORD$': {
      arguments: {
        mustHaveLowercase: true,
      },
      expected: false,
    },
    'pASSWORD$': {
      arguments: {
        mustHaveLowercase: true,
      },
      expected: true,
    },
}

const palindromeTestValues = {
  'isPalindrome_emordnilaPsi': true,
  'isNotPalindrome': false
}

const whitespaceTestValues = {
  ' \n': true,
  ' \r': true,
  ' \r\t': true,
  'also has whitepsace': true,
  'hasNoWhitespace': false
}


Object.entries(emailTestValues).forEach(([key, value]) => {
  describe('\nEmail tests:', () => {
    test(`Passing ${key} should return: ${value}`, () => {
      expect(validate.isEmail(key)).toBe(value)
    })
  })
})

Object.entries(passwordTestValues).forEach(([key, value]) => {
  describe('\nPassword tests:', () => {
    test(`Passing ${key} should return: ${value.expected}`, () => {
      expect(validate.isPassword(key, value.arguments)).toBe(value.expected)
    })
  })
})

Object.entries(palindromeTestValues).forEach(([key, value]) => {
  describe('\nPassword tests:', () => {
    test(`Passing ${key} should return: ${value}`, () => {
      expect(validate.isPalindrome(key)).toBe(value)
    })
  })
})

Object.entries(whitespaceTestValues).forEach(([key, value]) => {
  describe('\nPassword tests:', () => {
    test(`Passing ${key} should return: ${value}`, () => {
      expect(validate.hasWhitespace(key)).toBe(value)
    })
  })
})
