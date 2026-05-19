fetch('fetch('https://neadnacional.github.io/assets/dados.json')
.then(response => response.json())
.then(data => {

const container = document.getElementById('central-atendimento');

let html = `
<div class="grid-ies">
`;

Object.keys(data).forEach(key => {

const ies = data[key];

html += `
<div class="card-ies" onclick="mostrarIES('${key}')">

<img src="${ies.logo}" alt="${ies.nome}">

<p>${ies.nome}</p>

</div>
`;

});

html += `
</div>

<div id="resultado-ies"></div>
`;

container.innerHTML = html;

window.dadosIES = data;

});

function mostrarIES(chave){

const ies = window.dadosIES[chave];

document.getElementById('resultado-ies').innerHTML = `

<div class="card-resultado">

<h3>${ies.nome}</h3>

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

<p>
<strong>WhatsApp:</strong><br>
<a href="https://wa.me/55${ies.telefone}" target="_blank">
(${ies.telefone})
</a>
</p>

</div>

`;

}
