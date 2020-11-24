const container = document.querySelector("#container");
const url1 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i=1; i<=151; i++)
{
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");
    const label = document.createElement("span");
    label.innerText = `No.${i}`;
    const img1 = document.createElement("img");
    img1.src =  `${url1}${i}.png`;
    
    pokemon.appendChild(img1)
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}

