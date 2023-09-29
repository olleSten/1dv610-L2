#Reflection

## Chapter 2 Naming
| Name               | Reflection |
| ------------------ | ---------- |
| `isPassword`       | **Use one word per concept:** This name is fairly descriptive, with the keyword "is" indicating that the method returns a boolean value. This is consistent with other method names that similarly return booleans.  |
| `mustHaveNumber`    | **Use one word per concept:** This variable name breaks the naming consistency. "isNumberRequired" would be more consistent with the method names that also use "is". The other properties on the options object in "isPassword" should be renamed in a similar fashion to maintain consistency.  |
| `hasLowerCase`     | **Use one word per concept:** This method name breaks consistency. Both "has" and "contains" convey the same meaning; therefore, only one should be used to describe the concept.  |
| `cantHaveAnyOf`     | **Avoid disinformation:** "Of" does not specify what can't be had and doesn't add anything to the name.<br><br> **Use problem domain names:** A better name would be "blacklistedCharacters", as a programmer would understand what a blacklist is, and it specifies what isn't being allowed. The "s" also suggests that it is an array.  |
| `ValidateString`   | **Class names:** This is the name of the module and the class that contains the methods. It's an appropriate name because it accurately describes the class's functionality.  |
 
// todo: write Short reflection

##Chapter 3 Functions
| Name    | Lines (excluding ws) | reflection   |
| -------- | -------   |  -------   |
|  isPassword |    44     |   **Do one thing:** this rule is broken in this function, it does only validate if the passed string is a password however it contains does alot of checks based on the passed arguments, and these checks could be moved into seperate funtions to simplity and shorten the isPassword fucntion..  <br><br> **Argument objects:** The second argument to this function uses an object to pass arguments that is used to determain what ckecks the password has to pass, this is good because it recuces the number of arguments.     |
| isHexColor    |  34  |    **Switch statements:** In this function a long switch satement is used to detairmain if the characters after the "#" in the string are valid hex characters.   |
| isEmail |   23   |   **Blocks and indenting:**   This rule states that lines within if or for statements should only be one line long. isEmail features alot of for - if nesting and violates this rule, however this could be solved by rescructiring the code into other smaller functions.    |
| containsNumber    | 16   |   **One level of abstraction per function:**  THis function is good ebcause it only features one level of abstraction is fairly short and sticks to doing a single thing.    |
| isPalindrome    |  11  |    **Small:**  This is the smallest of my mentioned metods, and the smaller the better.   |

// todo: write Short reflection

##Kodreflektion
// todo: write Short reflection about my own experiences from my own code quality.

