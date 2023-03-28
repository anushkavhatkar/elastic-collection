

fetch("https://jumbled-ludicrous-okapi.glitch.me/source_data.json")

.then(function (response) {
    return response.json();
})


.then(function (textiles) {

let placeholder = document.querySelector('#container');

displayData(textiles);

function displayData(textiles) {
    placeholder.innerHTML = "";

    for (let textile of textiles) {
        const itemElement = document.createElement("div");

        itemElement.innerHTML = `<div class="textileimage"><img src='${textile.image}'></div>
        <div class="${textile.name}">${textile.name +" - "+ textile.state}</div>`;

        placeholder.appendChild(itemElement);
    }

}





})