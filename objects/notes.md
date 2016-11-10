# Objects

## Definition

Collection of related variable and methods that hides the complexities of implementation behind an interface.

### Related concepts

- Encapsulation

  - Grouping data and functions into a "blackbox" with interaction only happening through the exposed data and function calls (aka interface). All implementation details are hidden from the user, because of this the internal code can be changed as long as the interface remains the same.

- Modularity

  - The degree to which code is split up into logical units. If done correctly, modularity allows pieces of code to change without effecting the overall application.

- Abstraction

  - Reduces complexity by separating code and hiding implementation detect behind simpler APIs

- Polymorphism

  - Greek for "many forms", it defines one interface for multiple data types. A core technique in OOP, Polymorphism relates to both plain objects and inheritance. Once defined on a class, each instance of the class (aka object) can use the function or a child class can override information from the parent class.

- Namespace (Name Scope)

  - An abstract container which wraps functionality under a unique application-specific name. An identifier defined in a namespace is associated only with that namespace.
  - In **Javascript** there are no language-level difference between regular objects and namespaces.

- Class

  - In classical OOP, a class is a template for the functionality of an object

- Object

  - An instance of a class

- Property

  - Characteristic of an object. Associated with a noun.

- Method

  - Function associated with a class. Associated with an action (aka verb).

- Constructor

  - A method called with an object is instantiated. It usually has the same name as the class.

- Inheritance

  - Usually described in terms of a parent/child relationship. By means of their connection the child has access to the properties and methods of the parent.

## Language Specifics

### Javascript

Javascript is a prototypal-baseed scripting language. Almost every object has an extra property known as a prototype. A prototype is just another object that is used as a fallback source of properties. When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype's prototype, and so on.

The main Javascript object (aka the father of them all) has null as its prototype.

#### Constructors

Basically normal functions that are used in conjunction with the `new` keyword to build instances of objects. "An object created with `new` is said to be an instance of its constructor." Since constructors are functions, which in tern makes them objects in Javascript, they are assigned a property called `prototype`, which by default holds a plain, empty object that derives from Object.prototype.

There is a difference between the constructor's prototype property, `Function.prototype`, and the prototype property of a instance of an object created with the constructor.

When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself, which will henceforth have it as its own property. If there is a property by the same name in the prototype, this property will no longer affect the object. The prototype itself is not changed.

#### Enumerable properties

Javascript objects have both enumerable and non-enumerable properties. Properties that are directly assigned to an object are automatically enumerable and will show up when looping through the object. "The standard properties in Object.prototype are all nonenumerable, which is why they do not show up in for/in loop."

Use the following code when looping through object properties, when you want to ensure no properties from the prototype are effected.

```javascript
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    // key belongs directly to obj
  }
}
```

#### Methods to remember

- `Object.getPrototypeOf()`

  - returns the prototype of an object.

- `Object.create()`

  - creates an object with a specified prototype. This differs from new keyword in that create builds an object that inherits directly from the one passed as its first argument. The keyword new builds an object from the specified properties and methods.
  - `new`
  - Calling a function with the new keyword in front treats the function like a constructor.
  - `Object.defineProperty`
  - Provides a means of defining nonenumerable properties.
  - Example: `Object.defineProperty(Object.prototype, "hiddenNonsense",{enumerable: false, value: "hi"});`

## Resources:
