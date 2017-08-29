# Idiomatic Javascript

## Whitespace, variable declaration, and naming conventions

These are suggestions. When appropriate follow the conventions of the code base, consistency is more important than sticking to one style guide.

```javascript
// Group variables at top of scope
// Short, descriptive variable names
// In code using ES5 and below include loop variables in group
var a = 19,
    b = 29,
    i = 1;

// Always include brackets when writing block statements
if(a < b) {
  console.log(a);
}

for(; i < b; i++) {
  console.log(i);
}
```

## Namespaces

Namespaces reduce/elliminate nameing collisions by providing a way of ecapsolating code.

```javascript

```

### References

- https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#detailnamespacing