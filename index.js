
let placeholder = document.querySelector('#textile-container');
let info = document.querySelector('.info');
let intro = document.querySelector('#intro');

// fetch("https://jumbled-ludicrous-okapi.glitch.me/source_data.json")
fetch("/file.json")



.then(function (response) {
    return response.json();
})


// .then(function (textiles) {




// displayData(textiles);

// function displayData(textiles) {
//     placeholder.innerHTML = "";

//     for (let textile of textiles) {
//         const itemElement = document.createElement("div");

//         itemElement.innerHTML = `<div class="textile"><img src='${textile.image}'></div>`;

//         placeholder.appendChild(itemElement);
//     }

// }






// })



.then(function (textiles) {

placeholder.innerHTML = "";


function showInfo(name, state, type, source, link, image) {
    // info.innerHTML = `<p>Name: ${name}</p><p>Amount: ${amount}</p>`;
    info.innerHTML = 

    `
  
    
    <div class="info-flex-bars">
    <span class="italic">name</span>
    <span class="regular"> ${name} </span></div>
    
    <div class="info-flex-bars">
    <span class="italic">state</span> 
    <span class="regular"> ${state}</span></div>

    <div class="info-flex-bars">
    <span class="italic">type</span> 
    <span class="regular"> ${type}</span></div>

    <div class="info-flex-bars">
    <span class="italic">source</span> 
    <span class="regular"> ${source}</span></div>   

    <div class="info-flex-bars">
    <span class="italic"> link</span> 
    <span class="link"><a href="${link}">Link</a></span></div>
    
    `;

    intro.style.display = 'hidden';

    info.style.display = 'block';
}
    
for (let textile of textiles) {
    const itemElement = document.createElement("div");
    
    itemElement.innerHTML = `<div class="textile"><img src='${textile.image}'></div>`;
    
    placeholder.appendChild(itemElement);

    itemElement.addEventListener('click', () => {
        showInfo(textile.name, textile.state, textile.type, textile.source, textile.link, textile.image);

        intro.style.opacity = "0%";
    });




   
}

let randomColors =
[  "#b93254", "#af2642", "#472515", "#ffffff", "#b99a4d", "#484b67", "#23021a", "#d9d9d9", "#3d2024", "#0b1d26",  "#82676b", "#7c0208", "#ce7d39", "#bc672f", "#ebd9a9", "#e2d9c1", "#d0af84", "#b69a85", "#e0bf7c", "#dddcda",  "#9e2020", "#89211a", "#895d0d", "#a68433", "#bab1a8", "#84256a", "#e6dbc3", "#e8ded1", "#bc9c6f", "#a38334",  "#b3b3a9", "#867652", "#1d4d78", "#e8eadb", "#aaa9aa", "#bdb347", "#3a8489", "#e19a69", "#bb5326", "#b19d80",  "#a68e6d", "#ffffff", "#f0f0f0", "#db802f", "#a08455", "#050805", "#01031e", "#785d4e", "#545421", "#d9c967",  "#bbaf92", "#c7b199", "#877339", "#ce3b3f", "#1d488d", "#225198", "#68686d", "#701510", "#474648", "#142d8d",  "#b8977f", "#255aa1", "#85b8d5", "#5b575e", "#982f1a", "#2c2c2c", "#697cbe", "#4c946f", "#555659", "#2c0605",  "#252222"];

const textileImages = document.querySelectorAll('.textile');

function randomFromArray(arr){
    return arr[Math.floor(Math.random()*arr.length)]
  }

for (i=0; i<textileImages.length; i++) {

    textileImages[i].style.borderColor = randomFromArray(randomColors);
}
    
});








