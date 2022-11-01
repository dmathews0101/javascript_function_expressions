const fetch = require('node-fetch');

// function statement
function fetchAMalePokemon(){
    fetch('https://pokeapi.co/api/v2/gender/2/')
    .then(res => res.json())
    .then(json => console.log(json.pokemon_species_details[Math.floor(Math.random() * json.pokemon_species_details.length)].pokemon_species))
}

fetchAMalePokemon();

// ---------------------------------

// function expression -> variable = anonymous function
var ff = function fetchAFemalePokemon(){
  fetch('https://pokeapi.co/api/v2/gender/1/')
    .then(res => res.json())
    .then(json => console.log(json.pokemon_species_details[Math.floor(Math.random() * json.pokemon_species_details.length)].pokemon_species))
}

ff();