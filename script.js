// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet);
   })
   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
   event.preventDefault();
   let list = document.getElementById("faultyItems")
   let pilot = document.querySelector("input[name=pilotName]");
   let pilotValue = pilot.value;
   let copilot = document.querySelector("input[name=copilotName]");
   let copilotValue = copilot.value;
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let fuelLevelValue = fuelLevel.value;
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let cargoMassValue = cargoMass.value;
   formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoMassValue);
    
   
   }
   );

});



