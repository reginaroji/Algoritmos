var numPokemon;
var language = "es";

fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then(respuesta => respuesta.json())
    .then(pokemonInfo1 => {
        let pokemon1 = document.getElementById('pokemon1');
        pokemon1.innerHTML = `<h2>Nombre: ${pokemonInfo1.name}</h2><img src='${pokemonInfo1.sprites.front_default}'><h3>Info:</h3><ul><li>Altura: ${pokemonInfo1.height}</li><li>Peso: ${pokemonInfo1.weight}</li></ul>`;
        console.log(pokemonInfo1);
    })
    .catch(err => console.log(err));

fetch("https://pokeapi.co/api/v2/pokemon-species/1")
    .then((response) => response.json())
    .then((data) => {
        // Set description of Pokemon
        var description = data.flavor_text_entries.find((text_entry) => text_entry.language.name === language).flavor_text;
        document.getElementById("description1").innerHTML = description;
    })
    .catch(err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    .then(respuesta => respuesta.json())
    .then(pokemonInfo2 => {
        let pokemon2 = document.getElementById('pokemon2');
        pokemon2.innerHTML = `<h2>Nombre: ${pokemonInfo2.name}</h2><img src='${pokemonInfo2.sprites.front_default}'><h3>Info:</h3><ul><li>Altura: ${pokemonInfo2.height}</li><li>Peso: ${pokemonInfo2.weight}</li></ul>`;
        console.log(pokemonInfo2);
    })
    .catch(err => console.log(err));

fetch("https://pokeapi.co/api/v2/pokemon-species/4")
    .then((response) => response.json())
    .then((data) => {
        // Set description of Pokemon
        var description = data.flavor_text_entries.find((text_entry) => text_entry.language.name === language).flavor_text;
        document.getElementById("description2").innerHTML = description;
    })
    .catch(err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
    .then(respuesta => respuesta.json())
    .then(pokemonInfo3 => {
        let pokemon3 = document.getElementById('pokemon3');
        pokemon3.innerHTML = `<h2>Nombre: ${pokemonInfo3.name}</h2><img src='${pokemonInfo3.sprites.front_default}'><h3>Info:</h3><ul><li>Altura: ${pokemonInfo3.height}</li><li>Peso: ${pokemonInfo3.weight}</li></ul>`;
        console.log(pokemonInfo3);
    })
    .catch(err => console.log(err));

    fetch("https://pokeapi.co/api/v2/pokemon-species/7")
    .then((response) => response.json())
    .then((data) => {
        // Set description of Pokemon
        var description = data.flavor_text_entries.find((text_entry) => text_entry.language.name === language).flavor_text;
        document.getElementById("description3").innerHTML = description;
    })
    .catch(err => console.log(err));
