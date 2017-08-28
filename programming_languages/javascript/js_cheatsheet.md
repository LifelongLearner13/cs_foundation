# JAVASCRIPT

## Comments
```javascript
// Single Line Comment

/*
 mult-line
 comment
*/

/**
 * JSDoc 3 Syntax
 * @param {data type} parameter - Brief description of parameter.
 * @returns {data type} Brief description
 *
 * @see {@link http://usejsdoc.org} for more examples
 */
```

## Variables

```javascript
// Original way of declaring variables.
// The variable `a` has function level scope.
// Variable declaration is hoisted (i.e.
// moved to the top of the enclosing function
// or global scope). Until a value is given
// to the variable it will be `undefined`
var a = 5; 

// Dynamically typed language, variables can hold
// various types of data over the course of a program.
a = [5, 4];

// Declares a block scope variable. Will not
// create a property on the global object.
// Can be used to simplify async calls. 
let b = 5;

// Declares a block scope variable whose
// value cannot be re-assigned.
const c = 5;
```

### References
- [MDN Web Doc: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN Web Doc: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN Web Doc: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
## Definitions

- Syntax Parser:
    - Part of a compiler or interperter that determines the validity (according to a given grammar) and purpose of the provided code.
- Lexical Environment:
    - The location and surrounding lines affect how the computer will execute code; in other words, it will determine how the compiler or interperter will convert the code to machine language. Lexical environments exist in languages where the hierachical location of identifiers is important.
- Execution Context:
    - A wrapper for the currently executing code. The context contains information about the current lexical environment and may contain other references.
- Undefined:
    - When inilized with the keyword *var* or *let* Javascript variables are assigned the special value *undefined*. This means, the programer has not yet assigned a value to the variable. 
- Single Threaded:
    - Each line is executed before moving on to the next
- Synchronous:
    - One line at a time and in the order they are written
- Invocation:
    - Run a function, which means a new execution context for the called function is added to the top of the execution stack
- Variable Environment:
    - Where is a variable located in memory and how it relates to its surrounds
- Asynchronous:
    - More than one at a time
    - Javascript is synchronous, it simulates asynchronous behavior by adding events to a queue and processing them when the execution stack is finished. The browser is anynchronously putting things in the event queue 
- Expression:
    - Unit of code that results in a value
    - The result does not have to be stored in a variable
- Statements:
    - Unit of code that just does work, not value is returned
- Callback function:
    - A function you give to another function, to be run when the other function is finished
    - so the function you call (i.e. invoke), 'calls back' by calling the function you gave it when it finishes.
- Function Currying:
    - Creating a copy of a function but with some preset parameters
    - Very useful in mathematical situations  

## Objects

A collection of name/value pairs, where the name may be defined more than once, but can only have one value in any given context. A value may be more name/value pairs. 

## Global Environment (i.e. Global Execution Context)

- The environment automatically creates a **Global Object** and the **this** variable. The content of the Global Object depends on where the code is being executed from. For example, the Global Object is *Window* when Javascript is executed in a browser.

### Creation of the an Execution Context

occurs when a function is called.

- Creation Step
    - Global Object is added
    - 'this' variable is assigned
    - Outer Environment is determined
    - Memory space is allocated for all variables and function (i.e. **Hoisting**)
        - The entire function is placed in memory during this phase; however only variable identifiers are stored, not their assigned content.
        - This means functions can be called before they are defined, but variables will contain a placeholder, *Undefined*, until they are assigned a value. 
- Execution Step
    - All the setup has been accomplished in the previous step
    - The code is compiled/interpreted line-by-line 

## This
- The `this` variable is bound when a function is called. What `this` references is determined by the call-site (how the function is called).

## Arguments
- Property setup by the js engine. Contains all the arguments, aka parameters, pasted to the function
- Slowly falling out of style

## Spread Overator
- New alternative to the arguments property. Appears at the end of an arguments list and starts with three dots. Wraps any additional arguments passed when the function is called into an array.

## Types

- Dynamic Typing:
    - Engine determines the type of a variable while the code is running
    - This means the type of a variable can change during the course of a program.
- Static Typing:
    - Type is set when variable is created
    - If you try to assign data of a different type to the variable an error is thrown
- Primitive Types
    - Type of data that represents a single value, in javascript this bowls down to everything that isn't an object
    - Six Types:
        - Undefined - represents lack of existence (You shouldn't set a variable to this. The engine sets all variables to undefined until they are assigned a value.)
        - Null - represents lack of existence (this is the type that programmers should use)
        - Boolean - `true` or `false`
        - Number - Floating point number, only numeric value
        - String - Sequence of characters, both single and double quotes can be used.
        - Symbol - introduced in ES6
- Coercion
    - Converting a value from one type to another
    - This is useful for boolean and exsistence
        - undefined, empty string, null, and 0 all coerces to false
        - Everything else coerces to true
        - BE CAREFUL: zero converts to false which might cause confusion
    - This can also be used to set a default values E.g. `name = name || 'bay'`
        - If the overall statement evaluates to true, it will return the first thing that can be coerced to true
        - If the overall statement evaluates to false, it will return the first thing that can be coerced to false
            - This works because like all operators, comparison operators take parameters and return a value.

## Operators

- Definition:
    - A special function that is syntactically differently
    - Generally, take two parameters and return one result
- Infix notation:
    - Instead of using the traditional function call notation (e.g. `+(4, 5)`), the engine recognizes that the operator is written between the parameters (e.g. `4 + 5`).

## Objects and Function

- At it's heart all objects are key, value pairs
    - Objects can "store" three types of values
        - Primitive "properties"
        - Object "properties"
        - Function "methods"
    - In memory, values are stored as references to other memory addresses
- Access
    - "Computed Member Access" or bracket notation
        - Uses the key inside brackets to get the value stored in the object
        - Great for dynamically accessing values, because you can use a string
    - "Member Access" or dot notation
        - Uses a dot followed by the key to get the value stored in the object
- Faking Namespaces
    - Namespace is a container for variables and functions
        - useful for avoiding name collisions
- First Class Functions
    - Everything you can do with other types you can do with function
        - Assign them to variables, pass them around, create them on the fly
    - Function is a special type of object. Resides in memory. The function's code is just another property of an object.
        - Like objects you can attack properties
        - Name is a special optional property
        - Code is another property
            - This is special because it is invocable
- Function Expresion
```javascript
greet(); // valid code

function greet() {
    console.log('hi');
}
```

- Function Statement
```javascript
anonymousGreet(); // invalid code

var anonymousGreet = function() {
    console.log('hi');
}
```

### Closures

Pattern to use closures to avoid execution context problems.

```javascript
function buildFunctions() {
  var arr = [];
  
  for(var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i)));
  }
  
  return arr;
}

let test = buildFunctions();
test[0]();
test[1]();
test[2]();
```

### Troublesome Functions

- call()
    - Is similar to regular involcation of a function, except it allows the programmer to define what `this` will be when the execution context is created.
- apply()
    - Does the exact same thing as call(), except it requires parameters to be passed in an array
- bind()
    - Makes a copy of the function it's invoked on.
    - When the function is eventually invoked the engine recognizes that it is a copy created by bind and updates the execution context to reflect the parameters passed to bind.
- Why use them?
    - Function Borrowing
        - use a function defined on one object with another object
    - Function Currying
        - Set perment default parameters for a function call

### Object-Oriented Javascript And Prototypal Inheritance

- Classical vs Prototypal Inheritance
    - Inheritance: One object gets access to the properties and methods of another object
    - Reflection: An object can look at itself, listing and changing its properties and methods
    - 