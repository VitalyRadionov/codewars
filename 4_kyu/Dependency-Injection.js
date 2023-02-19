/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */

var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
// solution 1
DI.prototype.inject = function (func) {
  var deps = /^[^(]+\(([^)]+)/.exec(func.toString());

  deps = deps ? deps[1]
    .split(/\s?,\s?/)
    .map(function (dep) {
      return this.dependency[dep];
    }.bind(this)) : [];

  return function () {
    return func.apply(this, deps);
  };
}

// solution 2
// DI.prototype.inject = function (func) {
//   var params = func.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1].replace(/ /g, '').split(',').filter(n => n.length > 0);
//   var dependency = this.dependency;
//   return function () {
//     return func.apply(this, params.map(function (name) {
//       return dependency[name];
//     }));
//   };
// }

// solution 3
// class DI {
//   constructor(deps) {
//     this.deps = deps;
//   }

//   inject(fn) {
//     var deps = fn.toString().match(/function \((.+)\)/);
//     return deps ? fn.bind(fn, ...deps[1].split(', ').map(x => this.deps[x])) : fn;
//   }
// }

// solution 4
// DI.prototype.inject = function (func) {
//   var args = func.toString().match(/\(([^\)]*)\)/)[1].split(',').map(x => this.dependency[x.trim()]);
//   return () => func.apply(null, args[0] ? args : []);
// }

var deps = {
  'dep1': function () { return 'this is dep1'; },
  'dep2': function () { return 'this is dep2'; },
  'dep3': function () { return 'this is dep3'; },
  'dep4': function () { return 'this is dep4'; }
};

var di = new DI(deps);

var myFunc = di.inject(function (dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ');
});

console.log(myFunc()); // 'this is dep1 -> this is dep2 -> this is dep3'