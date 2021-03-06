// each
function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}
//Map
function map(collection, callback) {
  var result = [];
  each(collection, function(element) {
    result.push(callback(element));
  });
  return result;
}
//filter
function filter(collection, callback) {
  var result = [];
  each(collection, function(element) {
    if (callback(element)) {
      result.push(element);
    }
  });
  return result;
}
//some
function some(collection, callback) {
  var result = false;
  each(collection, function(element) {
    if (callback(element)) {
      result = true;
    }
  });
  return result;
}
//every
function every(collection, callback) {
  var result = true;
  each(collection, function(element) {
    if (!callback(element)) {
      result = false;
    }
  });
  return result;
}
//reduce
function reduce(collection, callback, initial) {
  var accumulator = initial;
  each(collection, function(element) {
    if (accumulator === undefined) {
      accumulator = element;
    } else {
      accumulator = callback(accumulator, element);
    }
  });
  return accumulator;
}
//contains
function contains(collection, target) {
  return reduce(collection, function(accumulator, element) {
    return accumulator || element === target;
  }, false);
}
//indexOf
function indexOf(collection, value, fromIndex) {
  var result = -1;
  var position = fromIndex -1 || 0;
  fromIndex = fromIndex || 0;
  each(collection, function(element) {
    if ((element === target) && (result === -1) && (position >= fromIndex)) {
        result = position;
    }
    position++;
  });
  return result;
}

Object.prototype.getKey = function(value){
  for(var key in this) {
     if(this[key] == value) {
      return key;
     }
  }
 return null;
};

function defaults(collection, object) {
  each(object, function(element) {
    var key = collection.getKey(element);
    if (key !== null) {

      collection[key] = object[element];
    }
  });
  return collection;
}

function first(array, n) {
  return n === undefined ? array[0] : array.slice(0, n);
}

function last(array, n) {
  return n === undefined ? array[array.length - 1] : array.slice(n > array.length ? 0 : array.length - n);
}
