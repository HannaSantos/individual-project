var database = require("../database/config");

function cadastrarArte(idArte, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idArte, idUsuario);
    var instrucao = `
        INSERT INTO usuarioVoto (fkusuario, fkarte) VALUES (${idUsuario}, ${idArte});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function contagemDados() {
    instrucaoSql = `select ar.arte, count(fkarte) as "Total de artes" 
                    from usuarioVoto us
                    join tbArte ar 
                    on us.fkarte = ar.idarte
                    where idarte = ${idArte};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviarGrafico(id) {
    instrucaoSql = `select fkarte 
                    from usuarioVoto;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/* function enviarGrafico(id) {
    instrucaoSql = `select fkvota 
                    from usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contagemDados() {
    instrucaoSql = `select count(fkvota) 
                    as "Total" 
                    from usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(id) {
    instrucaoSql = `select fkvota 
                    from usuario 
                    where id = ${id} 
                    order by id desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
} */


module.exports = {
    cadastrarArte,
    contagemDados,
    enviarGrafico
}