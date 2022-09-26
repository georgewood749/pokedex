const fetchAsync = async (index) => {
    const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    const pokeData = await rawData.json()
    console.log(pokeData);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const pokemonName = capitalizeFirstLetter(pokeData.name)
    const nameHeading = document.getElementById('pokeName')
    nameHeading.textContent = `#${index}: ${pokemonName}`

    const pokeFront = pokeData.sprites.front_default
    spriteFront.src = pokeFront;

    const pokeBack = pokeData.sprites.back_default
    spriteBack.src = pokeBack;

    const pokeShinyFront = pokeData.sprites.front_shiny
    shinyFront.src = pokeShinyFront;

    const pokeShinyBack = pokeData.sprites.back_shiny
    shinyBack.src = pokeShinyBack;

    const movesList = document.getElementById('moves');
    movesList.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        let li = document.createElement('li');
        li.textContent = capitalizeFirstLetter(pokeData.moves[i].move.name)
        movesList.appendChild(li);
    }

    const type1Text = capitalizeFirstLetter(pokeData.types[0].type.name)
    type1.textContent = `Primary type: ${type1Text}`

    if (pokeData.types.length == 2) {
        const type2Text = capitalizeFirstLetter(pokeData.types[1].type.name)
        type2.textContent = `Secondary type: ${type2Text}`
    } else {
        type2.textContent = ''
    }
}

let index = 1;
fetchAsync(index).catch(err => console.log(err))

const previousPoke = document.getElementById('previous')
previousPoke.addEventListener('click', () => {
    index--;
    // if (index < 1) {
    //     index = 1000;
    // }
    fetchAsync(index).catch(err => console.log(err))
})


const nextPoke = document.getElementById('next')
nextPoke.addEventListener('click', () => {
    index++;
    // if (index == Math.max(pokeDate.id)) {
    //     index = 1
    // }
    fetchAsync(index).catch(err => console.log(err))
})

// const searchID = document.getElementById('pokeID');
// searchID.addEventListener("submit", e => {
//     e.preventDefault();
//     index = searchID.textContent
// })


