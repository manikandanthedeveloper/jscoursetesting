const employees = [
	{
		id: 1,
		name: "John Doe",
		age: 30,
		department: "IT",
		salary: 50000,
		specialization: "Web Development",
	},
	{
		id: 2,
		name: "Alice Smith",
		age: 28,
		department: "HR",
		salary: 45000,
		specialization: "Recruitment",
	},
	{
		id: 3,
		name: "Bob Johnson",
		age: 35,
		department: "Finance",
		salary: 60000,
		specialization: "Javascript",
	},
	{
		id: 4,
		name: "Eve Davis",
		age: 32,
		department: "IT",
		salary: 52000,
		specialization: "Network Security",
	},
	{
		id: 5,
		name: "Charlie Brown",
		age: 29,
		department: "Marketing",
		salary: 48000,
		specialization: "Digital Marketing",
	},
	{
		id: 6,
		name: "Diana Prince",
		age: 31,
		department: "HR",
		salary: 47000,
		specialization: "Employee Relations",
	},
	{
		id: 7,
		name: "Frank Castle",
		age: 36,
		department: "Finance",
		salary: 61000,
		specialization: "Investment Banking",
	},
	{
		id: 8,
		name: "Grace Hopper",
		age: 34,
		department: "IT",
		salary: 53000,
		specialization: "Cloud Computing",
	},
	{
		id: 9,
		name: "Hank Pym",
		age: 33,
		department: "Marketing",
		salary: 49000,
		specialization: "Content Strategy",
	},
	{
		id: 10,
		name: "Ivy League",
		age: 27,
		department: "HR",
		salary: 46000,
		specialization: "Training and Development",
	},
];

function displayAllEmployees() {
	const totalEmployees = employees
		.map(
			(employee) =>
				`<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
		)
		.join("");
	document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
	const totalSalaries = employees.reduce(
		(total, employee) => total + employee.salary,
		0
	);
	document.getElementById(
		"employeesDetails"
	).innerHTML = `<p>Total Salaries: $${totalSalaries}</p>`;
}

function displayHREmployees() {
	const hrEmployees = employees
		.filter((employee) => employee.department === "HR")
		.map(
			(employee) =>
				`<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
		)
		.join("");
	document.getElementById("employeesDetails").innerHTML = hrEmployees;
}

function findEmployeeById(id) {
	const employee = employees.find((employee) => employee.id === id);
	if (employee) {
		document.getElementById(
			"employeesDetails"
		).innerHTML = `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`;
	} else {
		document.getElementById(
			"employeesDetails"
		).innerHTML = `<p>No employee found with ID ${id}</p>`;
	}
}

function findBySpecializationAtJavascript() {
	const jsEmployees = employees
		.filter((employee) => employee.specialization === "Javascript")
		.map(
			(employee) =>
				`<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`
		)
		.join("");
	document.getElementById("employeesDetails").innerHTML = jsEmployees;
}
