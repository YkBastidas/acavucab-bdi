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

router.get('/metodopagotienda', (req , res) => {
    res.render('metodopagotienda.html');
});

router.get('/eventos', (req , res) => {
    res.render('eventos.html');
});

router.get('/descrip-evento/evento1', (req , res) => {
    res.render('descrip-evento/evento1.html');
});

router.get('/descrip-evento/evento2', (req , res) => {
    res.render('descrip-evento/evento2.html');
});

router.get('/descrip-evento/evento3', (req , res) => {
    res.render('descrip-evento/evento3.html');
});

router.get('/descrip-evento/evento4', (req , res) => {
    res.render('descrip-evento/evento4.html');
});

router.get('/descrip-evento/agregarevento', (req , res) => {
    res.render('descrip-evento/agregarevento.html');
});

router.get('/descrip-pedido/pedidoencurso', (req , res) => {
    res.render('descrip-pedido/pedidoencurso.html');
});

router.get('/descrip-pedido/pedidocancelado', (req , res) => {
    res.render('descrip-pedido/pedidocancelado.html');
});

router.get('/descrip-pedido/listadeseo', (req , res) => {
    res.render('descrip-pedido/listadeseo.html');
});

router.get('/descrip-pedido/pedidoportiempo', (req , res) => {
    res.render('descrip-pedido/pedidoportiempo.html');
});

router.get('/descrip-seguridad/nombre', (req , res) => {
    res.render('descrip-seguridad/nombre.html');
});

router.get('/descrip-seguridad/correo', (req , res) => {
    res.render('descrip-seguridad/correo.html');
});

router.get('/descrip-seguridad/contrasena', (req , res) => {
    res.render('descrip-seguridad/contrasena.html');
});

router.get('/descrip-seguridad/numerotlf', (req , res) => {
    res.render('descrip-seguridad/numerotlf.html');
});

router.get('/descrip-direccion/editar-dir', (req , res) => {
    res.render('descrip-direccion/editar-dir.html');
});

router.get('/descrip-direccion/agregar-dir', (req , res) => {
    res.render('descrip-direccion/agregar-dir.html');
});

router.get('/descrip-direccion/eliminar-dir', (req , res) => {
    res.render('descrip-direccion/eliminar-dir.html');
});

router.get('/descrip-direccion/eliminar-dir', (req , res) => {
    res.render('descrip-direccion/eliminar-dir.html');
});

router.get('/descrip-empleado/empleado1', (req , res) => {
    res.render('descrip-empleado/empleado1.html');
});

router.get('/descrip-empleado/empleado2', (req , res) => {
    res.render('descrip-empleado/empleado2.html');
});

router.get('/descrip-empleado/empleado3', (req , res) => {
    res.render('descrip-empleado/empleado3.html');
});

router.get('/descrip-empleado/empleado4', (req , res) => {
    res.render('descrip-empleado/empleado4.html');
});

router.get('/descrip-empleado/empleado5', (req , res) => {
    res.render('descrip-empleado/empleado5.html');
});

router.get('/descrip-empleado/empleado6', (req , res) => {
    res.render('descrip-empleado/empleado6.html');
});

router.get('/descrip-empleado/empleado7', (req , res) => {
    res.render('descrip-empleado/empleado7.html');
});

router.get('/descrip-empleado/empleado8', (req , res) => {
    res.render('descrip-empleado/empleado8.html');
});

router.get('/descrip-empleado/agregarempleado', (req , res) => {
    res.render('descrip-empleado/agregarempleado.html');
});

router.get('/descrip-empleado/modificarempleado', (req , res) => {
    res.render('descrip-empleado/modificarempleado.html');
});

router.get('/proveedores', (req , res) => {
    res.render('proveedores.html');
});

router.get('/direccion', (req , res) => {
    res.render('direccion.html');
});

router.get('/personal', (req , res) => {
    res.render('personal.html');
});

router.get('/horarios', (req , res) => {
    res.render('horarios.html');
});

router.get('/contacto', (req , res) => {
    res.render('contacto.html');
});

router.get('/seguridad', (req , res) => {
    res.render('seguridad.html');
});

router.get('/presupuesto', (req , res) => {
    res.render('presupuesto.html');
});

router.get('/pedidos', (req , res) => {
    res.render('pedidos.html');
});

router.get('/tienda', (req , res) => {
    res.render('tienda.html');
});

router.get('/proveedores', (req , res) => {
    res.render('proveedores.html');
});

router.get('/descrip-proveedor/eliminarproveedor', (req , res) => {
    res.render('descrip-proveedor/eliminarproveedor.html');
});

router.get('/descrip-proveedor/modificarproveedor', (req , res) => {
    res.render('descrip-proveedor/modificarproveedor.html');
});

router.get('/descrip-proveedor/fichaproveedor', (req , res) => {
    res.render('descrip-proveedor/fichaproveedor.html');
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

router.get('/codigorecuperacion', (req , res) => {
    res.render('codigorecuperacion.html');
});

router.get('/carrito', (req , res) => {
    res.render('carrito.html');
});

module.exports = router;