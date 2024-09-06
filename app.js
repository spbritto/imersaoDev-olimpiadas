function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultado = "";

     // Seleciona o elemento de entrada (campo de pesquisa)
    let inputPesquisa = document.getElementById("campo-pesquisa");

    // Obtém o valor digitado pelo usuário
    let termoPesquisa = inputPesquisa.value;
    termoPesquisa = termoPesquisa.toLowerCase();
    let nomeAtleta = "";
    let descricaoAtleta = "";
    let tags = "";
    
    // Itera sobre cada atleta na lista de atletas
    for (let dado of atletas) {
        nomeAtleta = dado.nome.toLowerCase();
        descricaoAtleta = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if(nomeAtleta.includes(termoPesquisa) || descricaoAtleta.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
            // Constrói o HTML para cada resultado, formatando o nome, descrição e link do atleta
            resultado += `<div class="item-resultado">
                            <h2><a id="titulo" href="#" target="_blank">${nomeAtleta}</a></h2>
                            <p class="descricao-meta">${descricaoAtleta}</p>
                            <a class="link" href="${dado.link}" target="_blank">Mais informações</a>
                        </div>`;
        }       
    }
    
    if (resultado == ""){
        resultado += `<div class="item-resultado">
                         <h2>Não há dados para o termo informado!</h2>
                        </div>`;
    }

    // Atribui o HTML gerado para a seção de resultados, atualizando a página
    section.innerHTML = resultado;
}