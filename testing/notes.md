# Testing Basics

## Types of Tests

- Unit
    - Test the smallest vialble piece of code (e.g a function or several lines)
    - Test in isolation and mock all necessary external interactions

- Integration
    - Tests how well the individual pieces work together
    - Test one or several interactions, but still mock external resources (e.g databases)
- Functional
    - Test as a whole application
    - Start on the outside and end on the outside (i.e. Black Box Testing), no knowledge of internal workings

## Framework by Language

### Javascript

- Mocha 
    - Test Runner