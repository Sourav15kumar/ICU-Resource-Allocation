// Sample patient dataset
let patients = [
    { id: 1, p_with: 0.92, p_without: 0.40 },
    { id: 2, p_with: 0.80, p_without: 0.50 },
    { id: 3, p_with: 0.60, p_without: 0.20 },
    { id: 4, p_with: 0.75, p_without: 0.70 },
    { id: 5, p_with: 0.90, p_without: 0.30 },
];

// Insert gains + display in table
function loadTable() {
    let body = document.getElementById("patient-body");
    body.innerHTML = "";

    patients.forEach(p => {
        p.gain = p.p_with - p.p_without;

        let row = `<tr>
            <td>${p.id}</td>
            <td>${p.p_with}</td>
            <td>${p.p_without}</td>
            <td>${p.gain.toFixed(3)}</td>
        </tr>`;
        body.innerHTML += row;
    });
}

loadTable();

// Knapsack (simple greedy because weight=1 for all)
function runKnapsack() {
    let beds = parseInt(document.getElementById("beds").value);

    // Sort by gain descending
    let sorted = [...patients].sort((a, b) => b.gain - a.gain);

    let selected = sorted.slice(0, beds);
    let notSelected = sorted.slice(beds);

    displayResults(selected, notSelected);
}

function displayResults(selected, notSelected) {
    document.getElementById("selected").innerHTML = "";
    document.getElementById("notselected").innerHTML = "";

    selected.forEach(p => {
        document.getElementById("selected").innerHTML += `
            <li>Patient ${p.id} (Gain: ${p.gain.toFixed(3)})</li>`;
    });

    notSelected.forEach(p => {
        document.getElementById("notselected").innerHTML += `
            <li>Patient ${p.id} (Gain: ${p.gain.toFixed(3)})</li>`;
    });
}
