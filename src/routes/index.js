const express = require('express');
const router = express.Router();

router.get('/inicio', (req , res) => {
    res.render('inicio.html');
});

router.get('', (req , res) => {
    res.render('inicio.html');
});

router.get('/tipocerveza', (req , res) => {
    res.render('tipocerveza.html');
});

router.get('/carnet', (req , res) => {
    res.render('carnet.html');
});

router.get('/iniciosesion', (req , res) => {
    res.render('iniciosesion.html');
});

router.get('/afiliarse', (req , res) => {
    res.render('afiliarse.html');
});

router.get('/metodopago', (req , res) => {
    res.render('metodopago.html');
});


router.get('/eventos', (req , res) => {
    res.render('eventos.html');
});

router.get('/contacto', (req , res) => {
    res.render('contacto.html');
});

router.get('/tienda', (req , res) => {
    res.render('tienda.html');
});

router.get('/proveedores', (req , res) => {
    res.render('proveedores.html');
});

router.get('/serviciocliente', (req , res) => {
    res.render('serviciocliente.html');
});

router.get('/micuenta', (req , res) => {
    res.render('micuenta.html');
});

router.get('/contrasena', (req , res) => {
    res.render('contrasena.html');
});

router.get('/carrito', (req , res) => {
    res.render('carrito.html');
});

module.exports = router;