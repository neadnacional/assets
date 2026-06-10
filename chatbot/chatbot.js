let conhecimento = {};

fetch('conhecimento.json')
.then(response => response.json())
.then(data => {

    conhecimento = data;

})
.catch(error => {

    console.error('Erro ao carregar conhecimento.json:', error);

});

function perguntar(){

    const pergunta = document
    .getElementById('pergunta')
    .value
    .toLowerCase()
    .trim();

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

        for(const item of conhecimento[topico].perguntas){

            if(
                pergunta.includes(item)
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

        Converse diretamente com seu tutor no bloco
        <strong>Central da Disciplina</strong>.

        </div>

        <div style="
        background:#f5f7fa;
        border-left:4px solid #6b7280;
        border-radius:8px;
        padding:12px 16px;
        ">

        <strong>🏛️ Precisa de suporte acadêmico ou administrativo?</strong><br>

        Entre em contato com o coordenador local da sua instituição através do bloco
        <strong>Suporte Acadêmico</strong> disponível na disciplina.

        </div>

        `;

    }

}
