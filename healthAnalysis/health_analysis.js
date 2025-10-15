const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById("btnSearch");
const patients = [];

function addPatient() {
	const name = document.getElementById("name").value;
	const age = parseInt(document.getElementById("age").value);
	const condition = document.getElementById("condition").value;
	const gender = document.querySelector('input[name="gender"]:checked').value;

	if (!name || isNaN(age) || !condition || !gender) {
		alert("Please fill all fields correctly.");
		return;
	}

	patients.push({ name, age, condition, gender });

	resetForm();
	generateReport();
}

function resetForm() {
	document.getElementById("name").value = "";
	document.getElementById("age").value = "";
	document.getElementById("condition").value = "";
	document.querySelector('input[name="gender"]:checked').checked = false;
}

function generateReport() {
	if (patients.length === 0) {
		report.innerHTML = "<p>No patients added yet.</p>";
		return;
	}

	const totalPatients = patients.length;
	const conditionsCount = {
		Diabetes: 0,
		Thyroid: 0,
		"High Blood Pressure": 0,
	};
	const genderConditionsCount = {
		Male: {
			Diabetes: 0,
			Thyroid: 0,
			"High Blood Pressure": 0,
		},
		Female: {
			Diabetes: 0,
			Thyroid: 0,
			"High Blood Pressure": 0,
		},
	};

	for (const patient of patients) {
		conditionsCount[patient.condition]++;
		genderConditionsCount[patient.gender][patient.condition]++;
	}

	const conditionRows = Object.entries(conditionsCount || {})
		.map(
			([condition, count]) => `
            <tr>
                <td>${condition}</td>
                <td class="text-end">${count}</td>
            </tr>
        `
		)
		.join("");

	const genderConditionRows = Object.entries(genderConditionsCount || {})
		.map(([gender, conds]) =>
			Object.entries(conds || {})
				.map(
					([condition, count]) => `
      <tr>
        <td>${gender}</td>
        <td>${condition}</td>
        <td class="text-end">${count}</td>
      </tr>
    `
				)
				.join("")
		)
		.join("");

	report.innerHTML = `
        <div class="card shadow-sm mb-4">
            <div class="card-body">
            <h5 class="card-title mb-0">Number of patients</h5>
            <p class="display-6 mt-2 mb-0">${totalPatients}</p>
            </div>
        </div>

        <div class="card shadow-sm mb-4">
            <div class="card-header bg-primary text-white">Conditions Breakdown</div>
            <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-sm mb-0">
                <thead class="table-light">
                    <tr>
                    <th>Condition</th>
                    <th class="text-end">Count</th>
                    </tr>
                </thead>
                <tbody>
                    ${
						conditionRows ||
						`<tr><td colspan="2" class="text-center text-muted">No data</td></tr>`
					}
                </tbody>
                </table>
            </div>
            </div>
        </div>

        <div class="card shadow-sm">
            <div class="card-header bg-secondary text-white">Gender-Based Conditions</div>
            <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-sm mb-0">
                <thead class="table-light">
                    <tr>
                    <th>Gender</th>
                    <th>Condition</th>
                    <th class="text-end">Count</th>
                    </tr>
                </thead>
                <tbody>
                    ${
						genderConditionRows ||
						`<tr><td colspan="3" class="text-center text-muted">No data</td></tr>`
					}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    `;
}

function searchCondition() {
	const input = document.getElementById("conditionInput").value.toLowerCase();
	const resultDiv = document.getElementById("result");
	resultDiv.innerHTML = "";

	fetch("health_analysis.json")
		.then((response) => response.json())
		.then((data) => {
			const condition = data.conditions.find(
				(item) => item.name.toLowerCase() === input
			);

			if (condition) {
				const symptoms = condition.symptoms.join(", ");
				const prevention = condition.prevention.join(", ");
				const treatment = condition.treatment;

				resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
				resultDiv.innerHTML += `<img src="./images/${condition.imagesrc}" alt="${condition.name}" class="img-fluid mb-3" />`;

				resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
				resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
				resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
			} else {
				resultDiv.innerHTML = "Condition not found.";
			}
		})
		.catch((error) => {
			console.error("Error:", error);
			resultDiv.innerHTML = "An error occurred while fetching data.";
		});
}
btnSearch.addEventListener("click", searchCondition);

addPatientButton.addEventListener("click", addPatient);
