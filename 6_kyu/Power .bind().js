// solution 1
// Function.prototype.bind = function (ctx) {
// 	const func = this;
// 	return function (...args) {
// 		const rightCtx = this === global ? ctx : this;
// 		return func.apply(rightCtx, args);
// 	}
// }

// solution 2
Function.prototype.bind = function (ctx) {
	const func = this;
	return function (...args) {
		return func.apply(this === global ? ctx : this, args);
	}
}

const obj1 = {prop: 1};
const obj2 = {prop: 2};

let func = function () {
	return this.prop;
};

func = func.bind(obj1);
console.log(func()); // 1

func = func.bind(obj2);
console.log(func()); // 2