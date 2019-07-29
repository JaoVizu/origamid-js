const APIKEY = '95aa93da67838a46b702047400d81f9f';
const URL = `https://gateway.marvel.com:443/v1/public/series?apikey=${APIKEY}`;
const divCards = document.querySelector('.card-group');

fetch(URL)
.then(response => response.json())
.then(data => {
    const series = data.data.results;
    console.log(data.data.results);
    series.forEach(serie => {
        createCard(serie.title, serie.description);
    });
});

const createCard = (nome, descricao) => {
    let cardHTML = 
    `<div class="card">
        <div class="card-body">
            <h4 class="card-title">${nome}</h4>
            <p class="card-text">${descricao}</p>
        </div>
    </div>`;

    
    divCards.innerHTML += cardHTML;
};