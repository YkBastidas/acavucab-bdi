const express = require('express');
const router = express.Router();
const reportCtrl = require('../controllers/reporte_controller');

router.get('/1', reportCtrl.getReporte1);
router.get('/2/', reportCtrl.getReporte2);
router.get('/3/', reportCtrl.getReporte3);
router.get('/4/', reportCtrl.getReporte4);
router.get('/5/', reportCtrl.getReporte5);
router.get('/6/:fecha', reportCtrl.getReporte6);
router.get('/7/:fecha', reportCtrl.getReporte7);
router.get('/8/:fecha', reportCtrl.getReporte8);
router.get('/9/:fecha', reportCtrl.getReporte9);
router.get('/10/:fecha', reportCtrl.getReporte10);
router.get('/11/:fecha', reportCtrl.getReporte11);
router.get('/12/:mes', reportCtrl.getReporte12);
router.get('/13/', reportCtrl.getReporte13);
router.get('/14/', reportCtrl.getReporte14);

module.exports = router;