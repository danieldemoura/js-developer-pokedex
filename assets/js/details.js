const pokemonData = JSON.parse(localStorage.getItem("pokemon"));

const title = document.querySelector(".title");
const type = document.querySelector(".type");
const image = document.querySelector(".image");
const abilities = document.querySelector(".abilitiesName");
const types = document.querySelector(".types");
const weight = document.querySelector(".weight");
const body = document.body;

body.classList.add(pokemonData.type)

document.title = "Pokemon: " + pokemonData.name
title.textContent = "Pokemon: " + pokemonData.name;
type.textContent = "Tipo: " + pokemonData.type;
image.src = pokemonData.photo;
image.alt = "Imagem do Pokemon " + pokemonData.name

pokemonData.abilities.forEach(abilitie => {
    abilities.textContent += abilitie.ability.name + ", ";
})

pokemonData.types.forEach(type => types.textContent += type + ", ");
weight.textContent = pokemonData.weight + " kg"
