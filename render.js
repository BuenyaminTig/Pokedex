function htmlRenderPokes(i, typePokemon, type2Pokemon) {
  return `
    <div onclick="openPokemonInfo(${i})" class="card" style="width: 15rem;">
        <div class="card-body">
            <p class="card-text">${allPokemon[i]["forms"][0]["name"]}</p>
        </div>
        <img class="${typePokemon}" id="pokemonImg" src="${
    allPokemon[i]["sprites"]["other"]["dream_world"]["front_default"]
  }" >
        <div id="spanDivForTypes" class="card-body">
            <span class="bg-${typePokemon}">${typePokemon}</span>
            ${
              type2Pokemon
                ? `<span class="bg-${type2Pokemon}">${type2Pokemon}</span>`
                : ""
            }
        </div>
    </div>
  `;
}

function htmlFilterPokemons(i, typePokemon, type2Pokemon) {
  return `
    <div onclick="openPokemonInfo(${i})" class="card" style="width: 15rem;">
        <div class="card-body">
            <p class="card-text">${allPokemon[i]["forms"][0]["name"]}</p>
        </div>
        <img class="${typePokemon}" id="pokemonImg" src="${
    allPokemon[i]["sprites"]["other"]["dream_world"]["front_default"]
  }" >
        <div id="spanDivForTypes" class="card-body">
            <span class="bg-${typePokemon}">${typePokemon}</span>
            ${
              type2Pokemon
                ? `<span class="bg-${type2Pokemon}">${type2Pokemon}</span>`
                : ""
            }
        </div>
    </div>
  `;
}

function htmlOpenPokemonInfo(i) {
  return `
    <img id="arrowImages" onclick="doNotClose(event),arrowLeft(${i})" src="./img/icons/arrow-left-circle.svg" alt="">
    
            <div id="popUpCardId" class="card">
              <div class="popUpPokemonImageClass">
                <img class="${allPokemon[i]["types"][0]["type"]["name"]}" src="${allPokemon[i]["sprites"]["other"]["dream_world"]["front_default"]}" class="card-img-top" alt="...">
              </div>
              <h3 class="${allPokemon[i]["types"][0]["type"]["name"]}">${allPokemon[i]["forms"]["0"]["name"]}</h3>
              <div class="listFlexbox">
                <ul>
                  <li class="list-group-item">${allPokemon[i]["stats"]["0"]["stat"]["name"]}</li>
                  <li class="list-group-item">${allPokemon[i]["stats"]["1"]["stat"]["name"]}</li>
                  <li class="list-group-item">${allPokemon[i]["stats"]["2"]["stat"]["name"]}</li>
                  <li class="list-group-item">${allPokemon[i]["stats"]["3"]["stat"]["name"]}</li>
                  <li class="list-group-item">${allPokemon[i]["stats"]["4"]["stat"]["name"]}</li>
                  <li class="list-group-item">${allPokemon[i]["stats"]["5"]["stat"]["name"]}</li>
                </ul>
                <ul>
                  <li class="list-group-item">${allPokemon[i]["stats"]["0"]["base_stat"]}</li>
                  <li class="list-group-item">${allPokemon[i]["stats"]["1"]["base_stat"]}</li>
                  <li class="list-group-item">${allPokemon[i]["stats"]["2"]["base_stat"]}</li>
                  <li class="list-group-item">${allPokemon[i]["stats"]["3"]["base_stat"]}</li>
                  <li class="list-group-item">${allPokemon[i]["stats"]["4"]["base_stat"]}</li>
                  <li class="list-group-item">${allPokemon[i]["stats"]["5"]["base_stat"]}</li>
                </ul>
                </div>
                <div class="arrowImagesIncard">
                <img class="arrowImages" onclick="doNotClose(event),arrowLeft(${i})" src="./img/icons/arrow-left-circle.svg" alt="">
                <img class="arrowImages" onclick="doNotClose(event),arrowright(${i})" src="./img/icons/arrow-right-circle.svg" alt="">
                </div>
            </div>
            <img id="arrowImages" onclick="doNotClose(event),arrowright(${i})" src="./img/icons/arrow-right-circle.svg" alt="">
        `;
}
