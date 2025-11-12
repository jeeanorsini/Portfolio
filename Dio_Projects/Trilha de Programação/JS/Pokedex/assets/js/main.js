
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

let allPokemons = [];
const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `;
}

function displayPokemons(pokemons) {
    const newHtml = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml;
}

async function initializePokedex() {
    pokemonList.innerHTML = `<p class="loading">Carregando...</p>`;
    allPokemons = await pokeApi.getPokemons(0, maxRecords);
    displayPokemons(allPokemons.slice(0, limit));
    loadMoreButton.style.display = 'block';
}

initializePokedex();

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNextPage = offset + limit;

    if (qtdRecordsWithNextPage >= maxRecords) {
        displayPokemons(allPokemons);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        const nextPokemons = allPokemons.slice(0, offset + limit);
        displayPokemons(nextPokemons);
    }
});

searchInput.addEventListener('input', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (!searchTerm) {
        offset = 0;
        displayPokemons(allPokemons.slice(0, limit));
        loadMoreButton.style.display = 'block';
        return;
    }

    const filteredPokemons = allPokemons.filter(pokemon => 
        pokemon.name.includes(searchTerm) || pokemon.number.toString().includes(searchTerm)
    );

    if (filteredPokemons.length > 0) {
        displayPokemons(filteredPokemons);
    } else {
        pokemonList.innerHTML = `<p class="error">Nenhum Pokémon encontrado!</p>`;
    }

    loadMoreButton.style.display = 'none';
});
