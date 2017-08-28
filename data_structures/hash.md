# Hash Table Or Hash Map

## Definition

Data structure that maps values to keys (i.e. associates data with a "search term"). Keys can be of any hash-able type. 

### Hashing

A method of transforming data into a usually shorter fixed-length value. A hashing algorithm is called a **hash function**. A hash function takes data and returns a hash value, which in the case of a Hash Table usually correlates to an array index (some implementations use binary trees). There are many different ways of implementing a hash function, but they all share these characteristics:

- it always returns a value
- the same data will always yield the same hash
- hashing is a one-way operation, i.e. it cannot be reversed

### Collisions

Depending on the hash function different data may hash to the same index, this is known as a collision. Possible solutions:

- Increasing the Size of the table
  - Although simple, this wastes space.
- Separate Chaining
  - Each slot in the table contains a linked-list

## Uses
- Optimized for insertion, deletion, and retrieval.
- Good choice for implementing symbol tables

## HashTable ADT
- CreatHashTable: Creates a new hash table
- HashSearch: Searches the key in hash table
- HashInsert: Inserts a new key into hash table
- HashDelete: Deletes a key from hash table
- DeleteHashTable: Deletes the hash table

