function pesquisar() {
    let section = document.getElementById("resultado-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";

    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado, você precisa digitar o nome de um atleta ou esporte.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados +=`
            <div class= "item resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
}

dados.forEach(function(atleta){
    console.log("Titulo: " + atleta.titulo);
    console.log("Descrição: " + atleta.descricao);
    console.log("Link: " + atleta.link);
    console.log("----------------------");
});