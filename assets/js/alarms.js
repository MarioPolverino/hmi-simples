// Simulated alarm data
const alarms = [
  { id: 1, description: "High temperature in reactor 3" },
  { id: 2, description: "Pressure drop in line 4" },
  { id: 3, description: "Unexpected flow rate in valve 5" },
  // Add more alarms as needed
];

document.addEventListener("DOMContentLoaded", function () {
  // Find the table's tbody
  const tableBody = document.querySelector("#alarmTable tbody");

  let alarmsCounter = document.getElementById("alarmsCounter"); // Removed the "#" from "alarmsCounter"

  if (alarms.length > 0) {
    // Correct condition to check the length of the alarms array
    alarmsCounter.textContent = alarms.length;
    alarmsCounter.style.display = "flex"; // Ensure this matches your CSS for visibility
  }else{
    alarmsCounter.style.display = "none"; // Ensure this matches your CSS for visibility
  }

  // Populate the table with alarms
  alarms.forEach((alarm) => {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    idCell.textContent = alarm.id;
    const descCell = document.createElement("td");
    descCell.textContent = alarm.description;

    row.appendChild(idCell);
    row.appendChild(descCell);
    tableBody.appendChild(row);
  });
});