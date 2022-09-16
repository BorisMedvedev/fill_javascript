"use strict";

const student = {
	name: "Boris",
	sureName: "Medvedev",
	lastName: "Nicolaevech",
	dateBirth: new Date(1978, 10, 22),
	startDate: new Date(2015, 9, 1),
	faculty: "physics",
};

function getFIO(student) {
	return student.sureName + " " + student.name + " " + student.lastName;
}

function getdateBirth(student) {
	const yyyy = student.dateBirth.getFullYear();
	let mm = student.dateBirth.getMonth() + 1; // Months start at 0!
	let dd = student.dateBirth.getDate();

	if (dd < 10) dd = '0' + dd;
	if (mm < 10) mm = '0' + mm;

	return dd + '.' + mm + '.' + yyyy;
}

console.log(getdateBirth(student));

function getstartDate(student) {
	const yyyy = student.startDate.getFullYear();
	let mm = student.startDate.getMonth() + 1; // Months start at 0!
	let dd = student.startDate.getDate();

	if (dd < 10) dd = '0' + dd;
	if (mm < 10) mm = '0' + mm;

	return dd + '.' + mm + '.' + yyyy;
}

console.log(getstartDate(student));
