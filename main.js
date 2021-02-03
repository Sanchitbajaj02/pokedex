let btn = document.querySelector("#btn");
let pokename = document.querySelector("#pokename");
let pokeDetails = document.querySelector("#pokeDetails");
let pokeImg = document.querySelector("#pokeImg");
let dexEntry = document.querySelector("#dexEntry");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (pokename.value !== "") {
    let temp = pokename.value.toLowerCase();
    fetch("https://pokeapi.co/api/v2/pokemon/" + temp)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dexEntry.innerHTML = `
      <h4>Pokdex Entry: ${data.id}, Name: ${data.name}</h4>`;

        pokeImg.innerHTML = `
      <img src=${data.sprites.back_default} class="img-border">
      <img src=${data.sprites.front_default} class="img-border">
      `;

        pokeDetails.innerHTML = `
      <div style="font-size: 1.2rem">
      <p>Weight: ${data.weight * 0.1}kg</p>
      <p>Height: ${data.height * 0.1}m</p>
      <p>Base Experience: ${data.base_experience}</p>
      <p>Abilities:  ${data.abilities.map((e) => {
        return e.ability.name;
      })}</p>
      <p>Types:  ${data.types.map((e) => {
        return e.type.name;
      })}
      </p>
      </div>
      `;
      })
      .catch((err) => alert(err));
  }
  else {
    dexEntry.innerHTML = `Please fill the correctly`;
  }
});
