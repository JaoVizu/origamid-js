const cep = document.querySelector('#cep');
const button = document.querySelector('#button');
const resultado = document.querySelector('#resultado');

const puxarCep = cep => {
    fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(promisse => promisse.json())
        .then(result => resultado.innerHTML = popularHTML(result))
        .catch(resultado.innerHTML = '<strong>Digite um CEP</strong>')
}

button.addEventListener('click', () => {
    puxarCep(tirarHifen(cep.value));
    cep.value = '';
});

const popularHTML = dados => {
    let html =
    `<p>Localidade: <strong>${dados.localidade}</strong></p>
    <p>Bairro: <strong>${dados.bairro}</strong></p>
    <p>Logradouro: <strong>${dados.logradouro}</strong></p>
    <p>Complemento: <strong>${dados.complemento}</strong></p>
    <p>Estado: <strong>${dados.uf}</strong></p>`;
    
    return html;
}

const tirarHifen = valor => {
    return valor.replace(/\-/g, '');
}

$(document).ready(function(){
    $('#cep').mask('00000-000');
})