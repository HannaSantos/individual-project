var express = require("express");
var router = express.Router();

var artesController = require("../controllers/artesController");

/* router.get("/enviarGrafico/:id", function (req, res) {
    artesController.enviarGrafico(req, res);
});

router.get("/obterTotal/", function (req, res) {
    artesController.obterTotal(req, res);
});

router.get("/tempo-real/:id", function (req, res) {
    artesController.buscarMedidasEmTempoReal(req, res);
})
 */
router.post("/cadastrarArte/", function (req, res) {
    artesController.cadastrarArte(req, res);
})

router.get("/contagemDados/", function (req, res) {
    artesController.contagemDados(req, res);
});

router.get("/enviarGrafico/:id", function (req, res) {
    artesController.enviarGrafico(req, res);
});

module.exports = router;