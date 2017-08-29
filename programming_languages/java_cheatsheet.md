# JAVA

## Definitions

- Java:
    - May refer to both or either the programming language or runtime enviroment
- Java SE (Java Standard Edition):
    - Most common version 
- Java EE (Java Enterprise Edition):
    - version for large applications 
- Java Runtime Environment (JRE)
    - Required to run Java apps
    - This is the only thing most end-users need
- Java Development Kit (JDK)
    - Contains tools for programmers creating apps
    - Since programmers need to run there code, the JDK includes the JRE

## Creating and Running Java Code

- Source Code -> Java Development Kit Tools -> Java App (platform-independent byte codes)
    - The byte code is not run directly on the host computer (unlike C or C++), it is run on the Java Virtual Machine (Java Runtime Enviroment)

## Packages
- Provide organization
- Follow standard naming convention
    - ALWAYS lowercase
    - Ensure GLOBAL uniqueness (i.e. uniqueness among all java programs ever written!). Conventionally this means using the reverse of a domain name.
    - Once a class is added to a package, you reference the class by *full.package.name.ClassName*
- Effect source code file structure
    - Java requires no correlation between package names and source code file structure
        - However, most IDE's require a sub-folder for each part of the package name.

## Variables
- Naming Conventions
    - names can be comprised of letters, numbers, $, and _ (although only letters and numbers are used by convention)
    - names are cammel case
    - First letter is always a letter (numbers cannot be used)

## Primitive Types

- Four main types: Integer, Floating Point, Character, and Boolean
- Stored by-value

### Integer

    - Supports whole numbers

| Type  | Size (bits) | Min Value            | Max Value           | Literal Format |
| :---: | :---------: | :------------------: | :-----------------: | :------------: |
| byte  | 8           | -128                 | 127                 | 0              |
| short | 16          | -32768               | 32767               | 0              |
| int   | 32          | -2147483648          | 2147483647          | 0              |
| long  | 64          | -9223372036854775808 | 9223372036854775807 | 0L             |

###Floating Point

    - Supports positive, negative, and zero with fractional parts

| Type   | Size (bits) | Smallest Positive Value | Largest Positive Value | Literal Format |
| ------ | ----------- | ----------------------- | ---------------------- | -------------- |
| float  | 32          | 1.4 x 10^-45            | 3.4 x 10^38            | 0.0f           |
| double | 64          | 4.9 x 10^-324           | 1.7 x 10^308           | 0.0 or 0.0d    |

###Character

- Supports a **Single** Unicode character
- The literal values are placed between single quotes (e.g. `char regularU = 'U';`)
- For Unicode code points, use `\u` followed by the 4-digit hex value (e.g. `char accentedU = '\u00DA'`)

###Boolean

- Literal values are `true` and `false`

##Primitive Wrapper Classes

### String

- The string class stores a sequence of Unicode characters
    - Stored using UTF-16 encoding
- Literals are enclosed in Double quotes
- Brute force concatination is done through plus and plus equal
- String objects are immutable

##Arithmetic Operators
- Evaluation
    - Postfix (x++ x--) -> Prefix (++x --x) -> Multiplicative (* / %) -> Additive (+ -)
    - Operators of equal precedence are evaluated left-to-right
    - Can override precedence with parenthesis
        - Nested parenthesis are evaluated from the inside out   
- Basic operators
    - Addition (+), subtration (-), multiplication (*), division (/), modulous (%).
    - Integer division is trucated
    - Integer and floating point division will produce a floating point number 
- Prefix/Postfix operators
    - Increment (++), Decrement (--)
    - Prefixing the operator will return the updated value
    - Postfixing the operator will return the value then update it 
- Compound assignment operators
    - Addition (+=), subtration (-=), multiplication (*=), division (/=), modulous (%=). 
    - Applies the result of right side to left side. Stores the result in variable on left

## Type Conversion

- Two types: Explicit (i.e defined by the programmer using the cast operator) or implicit (i.e. automatically performed by the compiler)
- Implicit
    - Any kind of widening conversions are automatic (i.e. going from a value with a smaller storage size to a larger storage size)
    - The compiler will always convert to the largest type in the expression
    - For example, converting from an `int` to a `long` 
- Explicit type conversion
    - Performed by the programmer. Can either be a narrowing or widening conversions.
    - Performing a narrowing conversion can cause bugs due to lose of data
    - For example, converting from `long` to `int`

## Scope

- A variable's scope comprises the lines of code where it can be referenced. Outside of those lines the memory for the variable might still be allocated (depending on garbage collection) but the programmer does not have access to it.
- Java uses block level scope. Variables exist within the block where they are defined. Variables in a parent scope are available to children, but parents cannot reference variables defined in a child scope.
- Parameters are passed by making a copy of the value, i.e. passing "by-value"
    - Changes made to the passed values are not visible outside of the method
    - Changes made to members of passed class instances are visible outside of method. An identifier of an object is passed by value. This identifier just contains a reference to the object not the object itself.
    - Basically the outer piece cannot be changed but, if the outer piece is a reference to an object, the internals of the object can be changed.


## OOP

- Classes
    - Comprises state and executable code
        - Fields store object state
        - Methods contain executable code that manipulates state and performs operations
        - Constructors are a special method that are called during an objects creation to set the initial state
    - Classes marked as `public` have to be stored in a file with the same name as the class. If the class is not marked as public, then convention states the file name and class name should match, but this is not required.
    - Naming conventions:
        - Same rules as variable names.
        - By convention classes consist of letters and numbers. The first character is always capitalized.
        - Use descriptive proper nouns
        - Avoid abbreviations unless abbreviation's use is more common than full name
    - Methods
        - Naming conventions and rules are the same as variables
        - Should be an action verb
        - Returning
            - Reach the end of the method
            - a return statement is encountered
            - an error occurs
    - Initial State
        - State is assigned in the following order: field initializers, initialization blocks, constructors.
        - Field Initializers
            - A fields automatically receive a *zero* value as an initial state when an object is created
                - The zero value is based on the field's data type.
                - byte, short, int, long = 0
                - float, double = 0.0
                - char = '\u0000'
                - Reference types = null
            - A field's initial state can be changed by assignment when the field is created.
        - Constructors
            - Executable code used during object creation to set initial state
                - Have no return type
                - Every class has at least one constructor
                    - The compiler will provide a constructor, if none are explicitly defined in the code.
                    - As soon as you define a constructor in the code, you are responsible for all constructors
                - Can have multiple constructors that take different parameters
                    - You can call a constructor within another constructor by using the `this` keyword.
                        - If done, it must be the first line.
        - Initialization Blocks
            - Code that is shared across all constructors. 
            - Executes as if the code was inserted at the start of each constructor.
            - These blocks are code wrapped in curly brackets, placed above the constructors.
- Special References: `this` and `null`
    - `this` is an implicit reference to the current object
        - reduces ambiguity
        - allows an object to pass itself as a parameter
    - `null` is a reference literal
        - represents an uncreated object
        - Can be assigned to any reference variable
- Encapsulation
    - The internal representation of an object is generally hidden
    - Achieved through access modifiers
    - Field encapsulation is achieved through `getters` and `setters` (this is an example of the Accessor and Mutator Design pattern).

| Modifier    | Visibility                                           | Usable on Classes | Usable on Members |
| :---------: | :--------------------------------------------------: | :---------------: | :---------------: |
| no modifier | package private (i.e. only available inside package) | Y                 | Y                 |
| public      | Everywhere                                           | Y                 | Y                 |
| private     | Only within its own class                            | Y                 | N                 |

- Overloading
    - A class may have multiple versions of its constructor or methods, differentiated by their method signatures (i.e. number/type of parameters).
        - A method signature is comprised of the name, number of parameters, and type of each parameter
- Variable Number of Parameters
    - Methods can accept a varying number of parameter values
        - Place an ellipse after the parameter type
        - Will only work for the last parameter
        - The data is passed in as an array, but the calling syntax is simplified

##Inheritance

- A class can inherit or derive from another class
    - Meaning it takes on characteristics from the base class
    - Constructors are not inherited
        - A base class constructor must be called within an inherited class constructor
            - If this is not explicitly handled by the child class, the base class' no-argument constructor is called automatically
            - Use the super reference followed by parameters, to handle this explicitly
- Fields hide base class fields with same name
    - Be careful about what you're getting back isn't the base class value.
- Can be assigned to base class typed references
- Methods override base class methods with same signature
- The `super` reference implicitly refernces the current object
    - `super` allows access to base class members that have been overriden by the current object
- Use the `final` keyword can be used on classes or methods to prevent other classes from inheriting and/or overriding
    - By default all classes can be extended and derived classes hav the option to use or override inherited methods
- Use the `abstract` keyword can be used on classes or methods to require inheritance and/or overriding
    - If you mark a method as abstract, the entire class most be marked as abstract

### Object Class

- Root of the class hierachy, meaning every class inherites characteristics from the Object class
    - Variables, fields, and parameters with type Object can reference any class or array instance

### Exceptions and Error Handling

- Exceptions provide a non-intrusive way to signal errors
    - Try/catch/finally provides a structured way to handle exceptions
        - Try block contains the normal code to execute
            - If nothing goes wrong the block executes to completion unless an exception is thrown
        - Catch block contains the error handling code
            - If an error occurs in try block, the program looks for a catch block with the same error
            - Each exception type can have a separate catch block
            - Each catch is tested in order from top to bottom
            - First assignable catch is selected
            - Start catch blocks with most specific exception types
        - Finally block contains cleanup code if needed
            - Runs in all cases following try or catch block
    - Exceptions propagate up the call stack until they find a catch block or the program ends
        - Exceptions are part of a method's contract
            - Method is responsible for any checked exceptions that might occur
                - Catch the exception
                - Document that the exception might occur
                    - Use the throws clause in the method signature
                    - Still use try and finally blocks even if you don't catch it in the method
        - The throws clause of an overriding method must be compatible with the throws clause of the overridden method by
            - Excluding the exceptions
            - Defining the same exception
            - Defining a derived exception

### Packages

- A package is a group of related types
    - Creates a namespace
        - Avoid collisions by following the convention of creating unique package names
            - Usually reverse domain names structure
        - Type name is qualified by package name
            - `packageName.className`
    - Provides an access boundary
        - Often referred to as *package private*
        - Useful for creating types and features to support functionality provided by the package
            - Types and features are not meant to be used stand-alone
        - Use no access modifier to achieve *package private*
            - Can apply to a type 
                - Entire type is inaccessible outside of the package
            - Can apply to type members
                - Specific members of an otherwise accessible type are inaccessible outside of the package
    - Acts as a unit of distribution
        - Packages provide a predictable software structure that simplifies distribution
            - To help with organization files are placed in hierarchical folders reflecting the package name
                - Each part of the package name is a separate folder
        - Archive files (.jar)
            - Package folder structure can be placed into an archive file
                - places package folder structure into a single file
                - Optionally includes a manifest
            - 
- Declaring Package
    - Use the `package` keyword
    - package declaration must appear before any type declarations
    - Applies to all types within that source file
- Determining a type's package
    - Compiler needs to know each type's package
        - Java offers several alternatives to explicitly qualifying types
            - Types in current package do not need to be qualified
            - Types in the `java.lang` package do not need to be qualified
            - Imports
                - Guides the compiler to map simple names to qualified names
                - Use the `import` keyword
                    - Single type import
                        - Provides mapping for a single type
                        - import only one class
                        - Preferred way to import types
                        - Most modern IDE's will add automatically
                    - Import on demand
                        - Provides mapping for all types in a package
                        - import all class in the package by using `*`
                        - Use with caution!!
                        - Exposes code to potential breakage from changes in referenced packages

### Interface

- Defines a contract
  - Key difference between interface and class is the interface provides no implementation
    - By implementing an interface, a class conforms to the interfaces contract
      - As long as the class returns the expected type, the interface does not limit the class's implementation
      - Some interfaces require addional type information
        - Uses a concept know as generics
        - If a generic is specified, the method will recive that type, else it will recieve an object which needs to be cased.
      - A class can only extend one parent class, but it can implement multiple interfaces
    - When declaring an interface, use the `interface` keyword
      - Supports a subset of the features available to classes
        - Methods
          - Only the declaration, no implementation
          - implicitly public
        - Constants
          - Typed named values
          - implicitly public, final, static
        - Extending interfaces
          - An interface can extend another interface
        - Implementing extended interface implies implentation of base
      - 