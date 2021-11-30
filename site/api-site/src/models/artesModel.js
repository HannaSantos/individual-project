var database = require("../database/config");

function enviarGrafico(id) {
    instrucaoSql = `select fkvota 
                    from usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterTotal() {
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
}


module.exports = {
    enviarGrafico,
    buscarMedidasEmTempoReal,
    obterTotal
}