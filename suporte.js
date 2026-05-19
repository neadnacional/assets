fetch('https://neadnacional.github.io/assets/dados.json')
.then(response => response.json())
.then(data => {

const container = document.getElementById('central-atendimento');

let options = `<option value="">Selecione sua instituição</option>`;

Object.keys(data).forEach(key => {

options += `
<option value="${key}">
${data[key].nome}
</option>
`;

});

container.innerHTML = `

<div class="select-wrapper">

<select id="ies-select">

${options}

</select>

</div>

<div id="resultado-ies"></div>

`;

window.dadosIES = data;

document
.getElementById('ies-select')
.addEventListener('change', function(){

mostrarIES(this.value);

});

});

function formatarTelefone(numero){

if(!numero) return '';

numero = numero.replace(/\D/g,'');

if(numero.length === 11){

return `(${numero.substring(0,2)}) ${numero.substring(2,7)}-${numero.substring(7)}`;

}

return numero;

}

function mostrarIES(chave){

if(!chave){

document.getElementById('resultado-ies').innerHTML = '';

return;

}

const ies = window.dadosIES[chave];

const telefoneFormatado = formatarTelefone(ies.telefone);

document.getElementById('resultado-ies').innerHTML = `

<div class="card-resultado">

<img
class="logo-ies"
src="${ies.logo}"
alt="${ies.nome}"
>

<h2>${ies.nome}</h2>

<p>
<strong>Responsável:</strong><br>
${ies.responsavel}
</p>

<p>
<strong>E-mail:</strong><br>

<a href="mailto:${ies.email}">
${ies.email}
</a>

</p>

${
ies.telefone
?
`
<p>

<strong>WhatsApp:</strong><br>

<a
href="https://wa.me/55${ies.telefone}"
target="_blank"
>

${telefoneFormatado}

</a>

</p>
`
:
''
}

</div>

`;

}
