"use strict";

const student = {
	name: "Boris",
	sureName: "Medvedev",
	lastName: "Nicolaevech",
	dateBirth: new Date(1978, 10, 22),
	startDate: new Date(2015, 9, 1),
	faculty: "physics",
};

//возврат ФИО
function getFIO(student) {
	return student.sureName + " " + student.name + " " + student.lastName;
}

//возврат текущей даты
function getcurrentDate() {
	const today = new Date();
	const yyyy = today.getFullYear();
	let mm = today.getMonth() + 1; // Months start at 0!
	let dd = today.getDate();

	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;

	return dd + "." + mm + "." + yyyy;
}

//возврат даты рождения
function getdateBirth(student) {
	const yyyy = student.dateBirth.getFullYear();
	let mm = student.dateBirth.getMonth() + 1; // Months start at 0!
	let dd = student.dateBirth.getDate();

	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;

	return dd + "." + mm + "." + yyyy;
}

//возврат даты начала обучения
function getstartDate(student) {
	const yyyy = student.startDate.getFullYear();
	let mm = student.startDate.getMonth() + 1; // Months start at 0!
	let dd = student.startDate.getDate();

	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;

	return dd + "." + mm + "." + yyyy;
}

//возврат возраст
function getAge(student) {
	const today = new Date();
	let age = today.getFullYear() - student.dateBirth.getFullYear();
	let m = today.getMonth() - student.dateBirth.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < student.birthDate.getDate())) {
		age--;
	}
	return age;
}
console.log(getAge(student));


