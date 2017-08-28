/*
 * Bad, but sufficient representation of lower level memory for
 * implementing a basic array in Javascript
 * Source: https://gist.github.com/oampo
 */

let Memory = function() {

  // Float64Array(1024) defines an array of 64-bit
  // floating point numbers (corresponding to the
  // C double data type). Indexes 0-1024 are assigned
  // a value of 0.
  this.slots = new Float64Array(1024);
  this.head = 0;
};

Memory.prototype.allocate = function(size) {
  if (head + size > this.slots.length) {
    return null; // Not enough memory :(
  }
  let start = head;
  head += size;
  return start;
};

Memory.prototype.free = function(ptr) {
  // Perfict example of why this is a bad representation of
  // computer memory
};

Memory.prototype.copy = function(to, from, size) {
    if (from === to) {
        return;
    } else if (from > to) {
        for (var i=0; i<size; i++) {
            this.set(to + i, this.get(from + i));
        }
    }
    else {
        for (var i=size - 1; i>=0; i--) {
            this.set(to + i, this.get(from + i));
        }
    }
};

Memory.prototype.get = function(ptr) {
    return memory[ptr];
};

Memory.prototype.set = function(ptr, value) {
    memory[ptr] = value;
};

exports.Memory = Memory;
