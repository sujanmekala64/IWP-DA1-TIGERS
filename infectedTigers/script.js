const infectedCountSpan = document.getElementById("infected-count");
const getNamesButton = document.getElementById("get-names-button");
const infectedTigersDiv = document.getElementById("infected-tigers");

getNamesButton.disabled = false; 


const infectedTigers = [
  { name: "Blaze", rfid: 12345 },
  { name: "Hobbes", rfid: 54321 }
];

getNamesButton.addEventListener("click", () => {
  infectedTigersDiv.innerHTML = ""; 

  const infectedCount = parseInt(infectedCountSpan.textContent);

  if (infectedCount > 0) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    thead.appendChild(nameHeader);

    const rfidHeader = document.createElement("th");
    rfidHeader.textContent = "RFID";
    thead.appendChild(rfidHeader);

    table.appendChild(thead);

    
    infectedTigers.forEach(tiger => {
      const tableRow = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.textContent = tiger.name;

      const rfidCell = document.createElement("td");
      rfidCell.textContent = tiger.rfid;

      tableRow.appendChild(nameCell);
      tableRow.appendChild(rfidCell);

      tbody.appendChild(tableRow);
    });

    table.appendChild(tbody);
    infectedTigersDiv.appendChild(table);
  } else {
    infectedTigersDiv.textContent = "No infected tigers today.";
  }
});
