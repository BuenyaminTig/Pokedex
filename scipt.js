let allPokemon = [];

let Index = 1;

function onload() {
  fetchRibbon();
  document.getElementById("popUpPokemonId").classList.add("d-none");
}

async function fetchRibbon() {
  if (allPokemon.length < 100) {
    for (let i = Index; i < Index + 20; i++) {
      await fetchData(i);
    }
    Index += 20;
  }
}

async function fetchData(i) {
  let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  let response = await fetch(url);
  let responseAsJson = await response.json();
  allPokemon.push(responseAsJson);
  renderPokes();
}

function renderPokes() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  for (let i = 0; i < allPokemon.length; i++) {
    let typePokemon = allPokemon[i]["types"][0]["type"]["name"];
    let type2Pokemon;
    if (allPokemon[i]["types"][1]) {
      type2Pokemon = allPokemon[i]["types"][1]["type"]["name"];
    } else {
      type2Pokemon = null;
    }
    content.innerHTML += htmlRenderPokes(i, typePokemon, type2Pokemon);
  }
}

function filterPokemons() {
  let search = document.getElementById("searchPokemons").value;
  search = search.toLowerCase();
  let content = document.getElementById("content");
  if (search.length >= 3) {
    content.innerHTML = "";
  }
  for (let i = 0; i < allPokemon.length; i++) {
    let typePokemon = allPokemon[i]["types"][0]["type"]["name"];
    let type2Pokemon;
    if (allPokemon[i]["types"][1]) {
      type2Pokemon = allPokemon[i]["types"][1]["type"]["name"];
    } else {
      type2Pokemon = null;
    }
    if (allPokemon[i]["forms"]["0"]["name"].toLowerCase().includes(search)) {
      content.innerHTML += htmlFilterPokemons(i, typePokemon, type2Pokemon);
    }
  }
}

function openPokemonInfo(i) {
  document.getElementById("popUpPokemonId").classList.add("popUpPokemon");
  document.getElementById("popUpPokemonId").classList.remove("d-none");
  document.getElementById("popUpPokemonId").innerHTML = htmlOpenPokemonInfo(i);
}

function closePokemonInfo() {
  document.getElementById("popUpPokemonId").classList.add("d-none");
}

function doNotClose(event) {
  event.stopPropagation();
}

function arrowLeft(i) {
  if (i == 0) {
    i = allPokemon.length - 1;
  } else {
    i = i - 1;
  }
  openPokemonInfo(i);
}

function arrowright(i) {
  if (i == allPokemon.length - 1) {
    i = 0;
  } else {
    i = i + 1;
  }
  openPokemonInfo(i);
}

function loadMorePokemon() {
  fetchRibbon();
}
