let conhecimento = {};

fetch('conhecimento.json')
.then(response => response.json())
.then(data => {

    conhecimento = data;

})
.catch(error => {

    console.error('Erro ao carregar conhecimento.json:', error);

});

function normalizarTexto(texto){

    return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

}

function perguntar(){

    const perguntaOriginal = document
    .getElementById('pergunta')
    .value;

    const pergunta = normalizarTexto(perguntaOriginal);

    if(pergunta === ""){

        document.getElementById('resposta').innerHTML = `

        <div style="
        background:#fff8e6;
        border-left:4px solid #ffb300;
        border-radius:8px;
        padding:12px 16px;
        ">

        ⚠️ Digite uma pergunta para continuar.

        </div>

        `;

        return;

    }

    let respostaEncontrada = false;

    for(const topico of Object.keys(conhecimento)){

        for(const palavra of conhecimento[topico].palavras){

            const palavraNormalizada =
            normalizarTexto(palavra);

            if(
                pergunta.includes(palavraNormalizada)
            ){

                document.getElementById('resposta').innerHTML =
                conhecimento[topico].resposta;

                respostaEncontrada = true;

                break;

            }

        }

        if(respostaEncontrada){

            break;

        }

    }

    if(!respostaEncontrada){

        document.getElementById('resposta').innerHTML = `

        <h3>🤔 Não encontrei uma resposta para essa dúvida.</h3>

        <p>
        Tente reformular sua pergunta utilizando outras palavras.
        </p>

        <div style="
        background:#eef5ff;
        border-left:4px solid #030b79;
        border-radius:8px;
        padding:12px 16px;
        margin:16px 0;
        ">

            <strong>📚 Dúvidas sobre o conteúdo da disciplina?</strong><br>

            Converse diretamente com seu tutor. Você encontrará um botão para falar com ele(a) no bloco
            <strong>Central da Disciplina</strong>.

        </div>

        <div style="
        background:#f5f7fa;
        border:1px solid #e3e7ee;
        border-radius:14px;
        padding:16px 18px;
        margin:16px 0;
        ">

            <div style="
            font-size:16px;
            font-weight:600;
            color:#1f2937;
            margin-bottom:6px;
            ">

                🏛️ Presisa de outro tipo de suporte?

            </div>

            <div style="
            font-size:14px;
            line-height:1.6;
            color:#4b5563;
            ">

                Se sua dúvida for acadêmica, administrativa ou relacionada ao ambiente virtual que não encontrou aqui, selecione abaixo sua instituição para visualizar os canais oficiais de suporte.

            </div>

        </div>

        <iframe
        src="https://neadnacional.github.io/assets/"
        width="100%"
        height="380"
        style="
        border:none;
        border-radius:16px;
        overflow:hidden;
        background:white;
        ">
        </iframe>

        `;

    }

}
