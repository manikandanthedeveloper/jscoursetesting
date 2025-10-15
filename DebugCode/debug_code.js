function performOperation() {
	const num1 = parseInt(document.getElementById("input1").value);
	const num2 = parseInt(document.getElementById("input2").value);

	console.log("performOperation inputs:", { num1, num2 });
	debugger;

	const results = computeSimultaneous(num1, num2);

	displayResult({
		results,
	});
}

function computeSimultaneous(a, b) {
	debugger;

	const res = {
		add: undefined,
		mul: undefined,
		div: undefined,
	};

	if (res.add === undefined) res.add = a + b;
	if (res.mul === undefined) res.mul = a * b;
	if (res.div === undefined) res.div = a / b;

	debugger;
	return res;
}

function displayResult(result) {
	const resultElement = document.getElementById("result");

	if (typeof result === "string") {
		resultElement.textContent = result;
	} else {
		resultElement.textContent = JSON.stringify(result, null, 2);
	}
}
