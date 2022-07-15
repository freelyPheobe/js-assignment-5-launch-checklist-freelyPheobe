require('isomorphic-fetch');

function addDestinationInfo(document, planet) {
   // Here is the HTML formatting for our mission target div.
 let missionTarget = document.getElementById("missionTarget");
 missionTarget.innerHTML = `
             <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planet.name}</li>
                    <li>Diameter: ${planet.diameter}</li>
                    <li>Star: ${planet.star}</li>
                    <li>Distance from Earth: ${planet.distance}</li>
                    <li>Number of Moons: ${planet.moons}</li>
                </ol>
                <img src="${planet.image}">
   `
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(Number(testInput))) {
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
   // let list = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");

   if ("Empty" === validateInput(pilotValue) || validateInput(copilotValue) === "Empty" || validateInput(fuelLevelValue) === "Empty" || validateInput(cargoLevelValue) === "Empty") {
    alert(" All fields are required");
   } else if (validateInput(fuelLevelValue) === "Not a Number" || validateInput(cargoLevelValue) === "Not a Number") {
    alert("Please enter a numerical value only");
   } else if (validateInput(pilotValue) === "Is a Number" || validateInput(copilotValue) === "Is a Number") {
    alert("Please enter a name");
   } else { 
    list.style.visibility = "visible"
    pilotStatus.innerHTML = `${pilotValue} is ready to rock! `;
    copilotStatus.innerHTML = `${copilotValue} is good to go!`;
        if (fuelLevelValue  > 10000 && cargoLevelValue > 10000) {
            fuelStatus.innerHTML = `${fuelLevelValue} is more than enough.`;
            cargoStatus.innerHTML = `${cargoLevelValue} is too much weight.`;
            launchStatus.innerHTML = "Shuttle Not Ready for launch";
            launchStatus.style.color = "red";
        } else if (fuelLevelValue < 10000 && cargoLevelValue < 10000) {
            fuelStatus.innerHTML = `${fuelLevelValue} is not enough.`;
            cargoStatus.innerHTML = `${cargoLevelValue} is a good weight.`;
            launchStatus.innerHTML = "Shuttle Not Ready for launch";
            launchStatus.style.color = "red";
        } else if (fuelLevelValue > 10000 && cargoLevelValue < 10000) {
            fuelStatus.innerHTML = `${fuelLevelValue} is good to go .`;
            cargoStatus.innerHTML = `${cargoLevelValue} is a good weight.`;
            launchStatus.innerHTML = "Shuttle Is Ready for launch";
            launchStatus.style.color = "green";
        } else  if (fuelLevelValue < 10000 && cargoLevelValue > 10000) {
            fuelStatus.innerHTML = `${fuelLevelValue} is not enough.`;
            cargoStatus.innerHTML = `${cargoLevelValue} is too much weight.`;
            launchStatus.innerHTML = "Shuttle Is Not Ready for launch";
            launchStatus.style.color = "red"; 
        }
 
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json()
        });
        
    return planetsReturned;
}

function pickPlanet(planets) {
    let picker = Math.floor(Math.random()*planets.length);
    return planets[picker];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
