function handAngle(date) {
	// solution 1
	// let ang = Math.abs(((date.getHours() + (date.getMinutes() / 60)) * 30) - (date.getMinutes() * 6));
	// return ang > 180 ? (360 - ang) * (Math.PI / 180) : ang * (Math.PI / 180);

	// solution 2
	let m = date.getMinutes() / 60, h = (date.getHours() + m) / 12;
	let angle = Math.abs(h - m) * (Math.PI * 2);
	return Math.min(angle, (Math.PI * 2) - angle);
}

function makeDate(hours, minutes) {
	const date = new Date();
	date.setMinutes(minutes);
	date.setHours(hours);
	return date;
}

console.log(handAngle(makeDate(0, 0))); // 0.0
console.log(handAngle(makeDate(12, 0))); // 0.0
console.log(handAngle(makeDate(6, 0))); // 3.141592653589793
console.log(handAngle(makeDate(1, 0))); // 0.5235987755982988
console.log(handAngle(makeDate(9, 0))); // 1.5707963267948966
console.log(handAngle(makeDate(10, 0))); // 1.0471975511965976
console.log(handAngle(makeDate(0, 15))); // 1.4398966328953218
console.log(handAngle(makeDate(0, 45))); // 1.9634954084936207
console.log(handAngle(makeDate(12, 30))); // 2.8797932657906435
console.log(handAngle(makeDate(7, 15))); // 2.2252947962927703