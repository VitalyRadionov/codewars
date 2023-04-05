let object = {
	user: {
		name: {
			first: 'John',
			last: 'Snow'
		}
	},

};

let object2 = {
	people: ['John', 'Dave', 'Lisa']
};

let path = 'user.name.first';
let path2 = 'people.1';

let actual = find(object, path);
let actual2 = find(object2, path2);

// solution 1
function find(object, path) {
	path = path.split('.');
	for (let i = 0; i < path.length; i++) {
		if (object.hasOwnProperty(path[i])) {
			object = object[path[i]]
		} else return undefined;
	}
	return object
}

// solution 2
// function find(object, path) {
// 	return path.split('.').reduce(function (acc, pathName) {
// 		return (acc && acc.hasOwnProperty(pathName)) ? acc[pathName] : undefined;
// 	}, object);
// }

// solution 3
const find = (a, b) => b.split`.`.reduce((a, b) => a && !/to/i.test(b) ? a[b] : [][0], a)

console.log(actual2);
console.log(actual); // 'John'