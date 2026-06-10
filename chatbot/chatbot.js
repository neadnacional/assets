let conhecimento = {};

fetch('conhecimento.json')
.then(response => response.json())
.then(data => {

conhecimento = data;

});

function perguntar(){

const pergunta = document
.getElementById('pergunta')
.value
.toLowerCase()
.trim();

let respostaEncontrada = false;

Object.keys(conhecimento).forEach(topico => {

conhecimento[topico].perguntas.forEach(item => {

if(
pergunta.includes(item)
||
item.includes(pergunta)
){

document.getElementById('resposta').innerHTML =

conhecimento[topico].resposta;

respostaEncontrada = true;

}

});

});

if(!respostaEncontrada){

document.getElementById('resposta').innerHTML =

`Desculpe, ainda não conheço a resposta para essa dúvida.<br><br>
Tente reformular sua pergunta ou entre em contato com seu tutor.`;

}

}
