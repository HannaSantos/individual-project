var artesModel = require("../models/artesModel");

function cadastrarArte(req, res) {
    var idArte = req.body.idArteServer;
    var idUsuario = req.body.idUsuarioServer;

    if (idArte == undefined) {
        res.status(400).send("Seu idArte está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O nome foi adcionado está undefined!");
    } else {
        
        artesModel.cadastrarArte(idArte, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function contagemDados(req, res) {

    var idArte = req.params.idArte;

    console.log(`Recuperando medidas em tempo real`);

    artesModel.contagemDados(idArte).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos votos", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
} 

/* function enviarGrafico(req, res) {

    var id = req.params.id;

    console.log(`Recuperando medidas em tempo real`);

    artesModel.enviarGrafico(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
} */

/* function buscarUltimasMedidas(req, res) {

    var id = req.params.id;

    console.log(`Recuperando os ultimo votos`);

    artesModel.buscarUltimasMedidas(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function enviarGrafico(req, res) {

    var id = req.params.id;

    console.log(`Recuperando medidas em tempo real`);

    artesModel.enviarGrafico(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterTotal(req, res) {

    var id = req.params.id;

    console.log(`Recuperando medidas em tempo real`);

    artesModel.obterTotal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
} */

module.exports = {
    cadastrarArte,
    contagemDados
}