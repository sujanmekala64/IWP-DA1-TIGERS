const tigerReserves = [
    "Periyar National Park",
    "Kanha National Park",
    "Manas National Park",
    "Namdapha National Park",
    "Valmiki National Park",
    "Bandipur Tiger Reserve",
    "Sariska Tiger Reserve",
    "Ranthambore National Park",
    "Bhadra Wildlife Sanctuary",
    "Orang Tiger Reserve",
    "Bandhavgarh National Park",
    "Indravati Tiger Reserve",
    "Kalakkad Mundanthurai Tiger Reserve",
    "Kaziranga National Park",
    "Dudhwa National Park",
    "Pench Tiger Reserve",
    "Tadoba Andhari Tiger Reserve",
    "Pench National Park",
    "Kamlang Wildlife Sanctuary",
    "Similipal National Park",
    "Corbett Tiger Reserve"

];

const tigerReserveList = document.getElementById("tiger-reserves");

tigerReserves.forEach(reserve => {
    const listItem = document.createElement("li");
    listItem.textContent = reserve;
    tigerReserveList.appendChild(listItem);
});
