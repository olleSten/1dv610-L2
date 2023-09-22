
class ValidateString {
  constructor () {

  }

  isEmail(email) {
   const characters = email.split('')
  
   // store all @'s and .'s in a string so I can check the order after iterating over the string.
   let punctuationAndAts = ''
   
   for (let i = 0; i < characters.length; i++) {
    if (characters[i] === '@') {
      if (i === 0) return false
  
      punctuationAndAts += '@'
    } else if (characters[i] === '.') {
      if (i === characters.length - 1 || characters[i - 1] === '@') return false
  
      punctuationAndAts += '.'
    }
   }
  
   if (punctuationAndAts === '@.' || punctuationAndAts === '.@.') {
      return true
   } else {
    return false
   }
  }

  hasUppaerCase(string) {
    // return string !== string.toLowerCase()
  
    const characters = string.split('')
  
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] !== characters[i].toLowerCase()) return true
    }
    return false
  }
  
  hasLowerCase(string) {
    const characters = string.split('')
  
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] !== characters[i].toUpperCase()) return true
    }
    return false
  }
  
  containsNumber(string) {
    if (parseInt(string)) return true
  
    let hasNumber = false
  
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
    const characters = string.split('')
  
    characters.forEach(character => {
      numbers.forEach(number => {
        if (parseInt(character) === number) hasNumber = true 
      })
    })
    return hasNumber
  }
  
  isPassword(password, options) {
  
    const {
      mustHaveNumber,
      mustHaveUppercase,
      mustHaveLowercase,
      mustHaveOneOf,
      cantHaveAnyOf,
      rainbowTable
    } = options;
  
    if (!this.containsNumber(password) && mustHaveNumber) return false
  
    if (!this.hasUppaerCase(password) && mustHaveUppercase) return false
  
    if (!this.hasLowerCase(password) && mustHaveLowercase) return false
  
    // I cant retrun from inside the foreach loops so I use a variable to store the retult from the valudations and retrun it after they are done
    let isValid = true
  
    if (mustHaveOneOf && mustHaveOneOf.length != 0) {
      mustHaveOneOf.forEach((character) => {
        if (!password.includes(character)) isValid = false
      })
    }
  
    if (cantHaveAnyOf && cantHaveAnyOf.length != 0) {
      cantHaveAnyOf.forEach((character) => {
        if (password.includes(character)) isValid = false
      })
    }
  
    if (rainbowTable && rainbowTable.length != 0) {
      rainbowTable.forEach(easyPassword => {
        if (password == easyPassword) isValid = false
      })
    }
  
    return isValid
  }
}

module.exports = {
  ValidateString
}
