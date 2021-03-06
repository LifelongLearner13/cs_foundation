/* Source: https://gist.github.com/oampo */
let Memory = require('./fake_memory');

let memory = new Memory();

Array.SIZE_RATIO = 3;

let Array = function() {
  this.length = 0;
  this._capacity = 0;
  this.ptr = memory.allocate(this.length);
};

Array.prototype.push = function(value) {
    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    // this.ptr points to the first slot in memory, so
    // this line is adding value to the end of the array.
    memory.set(this.ptr + this.length, value);
    this.length++;
};

Array.prototype._resize = function(size) {
    var oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
        throw new Error('Out of memory');
    }

    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);

    this._capacity = size;
};

Array.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    return memory.get(this.ptr + index);
};

Array.prototype.pop = function() {
    if (this.length == 0) {
        throw new Error('Index error');
    }

    var value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
};

Array.prototype.insert = function(index, value) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
};

Array.prototype.remove = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
};
