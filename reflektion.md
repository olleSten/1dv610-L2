#Reflection

## Chapter 2 Naming
| Name               | Reflection |
| ------------------ | ---------- |
| `isPassword`       | **Use one word per concept:** This name is fairly descriptive, with the keyword "is" indicating that the method returns a boolean value. This is consistent with other method names that similarly return booleans.  |
| `mustHaveNumber`    | **Use one word per concept:** This variable name breaks the naming consistency. "isNumberRequired" would be more consistent with the method names that also use "is". The other properties on the options object in "isPassword" should be renamed in a similar fashion to maintain consistency.  |
| `hasLowerCase`     | **Use one word per concept:** This method name breaks consistency. Both "has" and "contains" convey the same meaning; therefore, only one should be used to describe the concept.  |
| `cantHaveAnyOf`     | **Avoid disinformation:** "Of" does not specify what can't be had and doesn't add anything to the name.<br><br> **Use problem domain names:** A better name would be "blacklistedCharacters", as a programmer would understand what a blacklist is, and it specifies what isn't being allowed. The "s" also suggests that it is an array.  |
| `ValidateString`   | **Class names:** This is the name of the module and the class that contains the methods. It's an appropriate name because it accurately describes the class's functionality.  |
 
I myself thought that I had fairly good naming of most of my class, fuction and method names. Avoiding making meaningful distinctionsand trying to avoid disinformation. However upon further reflection I've found inconsistoncies in my naming, most notebly with the properties on the options parameter in the n "isPassword" method. These properties should all make greater use of the *Use problem domain names** principle to more effectively communicate their purpuse to the reader of the code. Upon analysing my  names I also found that I inconsistantly used "has" and "contains" interchangebly, this makes the methods harder to understand and in my case I think I sould only have used contains to more clearly convay the purpuse of these methods.

## Chapter 3: Functions
| Name          | Lines (excluding whitespace) | Reflection   |
| ------------- | ---------------------------- | ------------ |
| `isPassword`  | 44                           | **Do one thing:** This rule is broken in this function. It only validates if the passed string is a password; however, it contains a lot of checks based on the passed arguments. These checks could be moved into separate functions to simplify and shorten the `isPassword` function. <br><br> **Argument objects:** The second argument to this function uses an object to pass arguments that are used to determine what checks the password has to pass. This is good because it reduces the number of arguments.     |
| `isHexColor`  | 34                           | **Switch statements:** In this function, a long switch statement is used to determine if the characters after the "#" in the string are valid hex characters.   |
| `isEmail`     | 23                           | **Blocks and indenting:** This rule states that lines within if or for statements should only be one line long. `isEmail` features a lot of for - if nesting and violates this rule. However, this could be solved by restructuring the code into other smaller functions.    |
| `containsNumber` | 16                         | **One level of abstraction per function:** This function is good because it only features one level of abstraction, is fairly short, and sticks to doing a single thing.    |
| `isPalindrome` | 11                           | **Small:** This is the smallest of my mentioned methods, and the smaller the better.   |

After reading chapter three in the course literature I realized that some of the code I had written in in the assignent broke some of the principles discussed. Mainly my "isEmail", "isHexColor" and "isPassword" methods break the principles for blocks of indenting. My `isEmail` method should be broken up into smaller function in order to reduce the number of nested if and for statements and the case is very similar with my `isPassword` method.


#Code reflection
Overall the things I feel like I've learnt for this assignment is better naming. That its important to use one word per concept as decsribed by the **Pick one word per concept** principle. And that you should use words solution domain names beucase it makes it easier for other programmers to read and understand your code, and if there is none to use problem domain names. Something I learnt from the functions chapter was that you should keep your functions short as per the **small** principle described in the book if or for blocks should only contain a single line of code and if that code is a function call you minimize nesting and make the code easier to read and maintain.

