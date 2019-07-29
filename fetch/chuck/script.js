const paragrafo = document.querySelector('#piada');
const botao = document.querySelector('#proximo');

const puxarPiada = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(resposta => resposta.json())
        .then(piada => paragrafo.innerText = piada.value);
}

botao.addEventListener('click', puxarPiada);
