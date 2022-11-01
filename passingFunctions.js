// Passing functions
const fetch = require('node-fetch');

function fetch2MalePokemons(func){
    console.log('\nTwo random male pokemons : \n')
    func();
    func();
}
// ---------------------------------

// function expression -> variable = anonymous function
var fm = function fetchAMalePokemon(){
  fetch('https://pokeapi.co/api/v2/gender/2/')
    .then(res => res.json())
    .then(json => console.log(json.pokemon_species_details[Math.floor(Math.random() * json.pokemon_species_details.length)].pokemon_species))
}

fetch2MalePokemons(fm);