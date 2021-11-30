var artesModel = require("../models/artesModel");

function buscarUltimasMedidas(req, res) {

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
}

module.exports = {
    buscarUltimasMedidas,
    enviarGrafico,
    obterTotal
}