var express = require("express");
var router = express.Router();

var artesController = require("../controllers/artesController");

router.get("/enviarGrafico/:id", function (req, res) {
    artesController.enviarGrafico(req, res);
});

router.get("/obterTotal/", function (req, res) {
    artesController.obterTotal(req, res);
});

router.get("/tempo-real/:id", function (req, res) {
    artesController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;