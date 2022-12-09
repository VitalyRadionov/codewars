/*!****BRIEFING ****!*\
// Greetings, warrior! In this kata you will learn, how Object.create method does its job.

// First over, what does it do? The signature of Object.create is like this:

//throws TypeError
//returns newly created object
// Object.create(prototype, [properties])
// Object.create serves to create new object that inherits given prototype and has properties being defined by "properties" parameter set on it.Parameters values must meet following requirements:

// prototype parameter should be some object1(i.e.a non - primitive value) or null(but not undefined!).If bad value passed for prototype, error TypeError must be thrown.

// properties parameter can be of any type or omitted at all.

// As a result of execution, Object.create will return a newly created object with inner property[[Prototype]]2 set to value of prototype parameter.If properties parameter is passed and is not undefined, then Object.create will make call Object.defineProperties(obj, properties), where obj is the object to be returned by Object.create.

/*!****OBJECTIVES****!*\
// In absence of the original Object.create create your own implementation of it that acts like the original one and assign it to the Object.create.To access inner[[Prototype]] property of object use its __proto__ property2.

// Your implementation will be used like this:

/* var citizen = {
  sleep: function () { return "zzZ..."; },
  panic: function () { return "AaAaAaAa!"; }
}; */

/* var veteran = Object.create(citizen, {
  panic: {
    value: function () {
      return "SNAFU";
    }
  }
}); */

// solution

// Object.create = function (proto, propertiesObject) {
//   if (typeof proto !== 'object' && typeof proto !== 'function') {
//     throw new TypeError('Object prototype may only be an Object: ' + proto);
//   } else if (proto === null) {
//     throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
//   }

//   if (typeof propertiesObject != 'undefined') {
//     throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
//   }

//   function F() { }
//   F.prototype = proto;

//   return new F();
// };

Object.create = function (prototype, properties = {}) {


  if (typeof prototype !== 'object' && typeof prototype !== 'function') {
    throw new TypeError('Object prototype may only be an Object: ' + prototype);
  } else {
    let newObj = {};
    newObj = {
      __proto__: prototype,
    };
    Object.defineProperties(newObj, properties);
    return newObj
  }
};

let citizen = {
  sleep: function () { return "zzZ..."; },
  panic: function () { return "AaAaAaAa!"; }
};

let veteran = Object.create(citizen, {
  panic: {
    value: function () {
      return "SNAFU";
    }
  }
});

// let veteran = Object.create(null);

// console.log(veteran.panic());
// console.log(Object.getPrototypeOf(veteran) === citizen);
console.log(veteran.panic());

// console.log(veteran);