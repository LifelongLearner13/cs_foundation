# JAVASCRIPT

## Definitions

- Syntax Parser:
    - Part of a compiler or interperter that determines the validity (accoding to a given grammar) and purpose of the provided code.
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

## Objects

A collection of name/value pairs, where the name may be defined more than once, but can only have one value in any given context. A value may be more name/value pairs. 

## Global Environment (i.e. Global Execution Context)

- The environment automatically creates a **Global Object** and the **this** variable. The content of the Global Object depends on where the code is being executed from. For example, the Global Object is *Window* when Javascript is executed in a browser.

### Creation of the an Execution Context

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