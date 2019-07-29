// const promessa = new Promise((resolve, rejected) => {
//    if(false){
//        setTimeout(() => {
//            resolve({ nome: 'Joao Vitor', idade: 20 })
//        }, 1000)
//    }else{
//        rejected(Error('Um erro foi encontrado'));
//    }
// });

// const retorno = promessa
// .then(resolucao => {
//     resolucao.profissao ='Designer';
//     return resolucao;
// })
// .then(resolucao => {
//     console.log(resolucao)
// },rejeitada =>{
//     console.log(rejeitada)
// }).finally(() => {
//     console.log('Acabou');
// })

// console.log(retorno)

const cep = document.querySelector('#txtCep');
const dados = document.querySelector('#dadosCep');
const button = document.querySelector('#button');
const tableBody = document.querySelector('#table-body');

const fetchCep = (cep) => fetch(`http://viacep.com.br/ws/${cep}/json/`);

button.addEventListener('click', () => {
   fetchCep(cep.value).then(r => r.json()).then(r => mostrarDados(r));
   cep.value = '';
});

//POPULA OS DADOS NA TABELA
const mostrarDados = (data => {
    var row = document.createElement('tr');
    for(var t in data){
        var cell = document.createElement('td');
        var cellText = document.createTextNode(`${data[t]}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tableBody.appendChild(row);
});
