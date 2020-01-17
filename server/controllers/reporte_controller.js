const reportCtrl = {};
const pool = require('../database/connectiondb');
const request = require('request');

function redata (rep, tem, res){
    const data = {
        template: {
            "shortid": tem
        },
        data : {
            rep
        },
        options:{
            preview: true
        }
    }
    const options = {
        url: 'http://localhost:5488/api/report',
        method: 'POST',
        json: data
    }
    request(options).pipe(res)
}

reportCtrl.getReporte1 = async (req, res) => {
    await pool.query('SELECT nombre, apellido, cargo, tipo, dia, hora_inicio AS inicio, hora_fin AS fin FROM personal p, personal_horario ph, horario h WHERE p.clave = ph.fk_horario and h.clave = fk_personal;')
        .then(response => {
            console.log('Generando Reporte 1');
            console.log(response.rows)
            redata(response.rows,'Bkg0IgeOlU',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte2 = async (req, res) => {
    await pool.query('select nro_factura AS factura, fecha_compra AS fecha,natural_nombre AS nombre, juridico_denominacion_comercial AS comercio, cantidad, precio_unitario AS precio, SUM(cantidad * precio_unitario) AS total from detalle_compra, compra, cliente where fk_compra = nro_factura and fk_cliente = rif group by (nro_factura, fecha_compra, cantidad, precio_unitario, natural_nombre, juridico_denominacion_comercial);')
        .then(response => {
            console.log('Generando Reporte 2');
            console.log(response.rows)
            redata(response.rows,'Hyxwob43xU',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte3 = async (req, res) => {
    await pool.query('select nro_factura AS factura_venta, fecha AS fecha_venta, cantidad As cant, precio_unitario AS pre_uni, denominacion_comercial AS denom, SUM(cantidad * precio_unitario) AS total2 from venta, detalle_venta, cerveza_proveedor, proveedor where fk_venta = nro_factura and fk_cerveza_proveedor = clave and fk_proveedor = rif  group by (nro_factura, fecha, cantidad, precio_unitario, denominacion_comercial);')
        .then(response => {
            console.log('Generando Reporte 3');
            console.log(response.rows)
            redata(response.rows,'ryxeoOVnl8',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte4 = async (req, res) => {
    await pool.query('select sc.fecha_cambio AS fe_cambio, d.nombre AS depa_nombre, s.nombre AS sta_nombre from status_compra sc, departamento d, status s, compra c where sc.fk_compra = c.nro_factura and sc.fk_departamento = d.clave and s.clave = sc.fk_status;')
        .then(response => {
            console.log('Generando Reporte 4');
            console.log(response.rows)
            redata(response.rows,'rJxLlqE2xL',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte5 = async (req, res) => {
    await pool.query('select v.nro_factura AS fact, v.fecha AS fec_ve, s.nombre AS no_ven from venta v, status_venta sv, status s where sv.fk_venta = v.nro_factura and sv.fk_status = s.clave; ')
        .then(response => {
            console.log('Generando Reporte 5');
            console.log(response.rows)
            redata(response.rows,'rJekiiV3eI',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte6 = async (req, res) => { //por agregar periodo de tiempo
    const rep = req.params.fecha;
    const fecha = rep.split('+');
    const inicio = fecha[0];
    const fin = fecha[1];
    await pool.query("SELECT nombre, apellido, cargo, tipo, dia, fecha_falta AS falta, hora_inicio AS inicio, hora_fin AS fin FROM personal p, personal_horario ph, horario h WHERE p.clave = ph.fk_horario and h.clave = fk_personal and ph.tipo = 'Inasistente' and ( fecha_falta BETWEEN '"+inicio+"' AND '"+fin+"');")
        .then(response => {
            console.log('Generando Reporte 6');
            redata(response.rows,'r1gkdjC5lL',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte7 = async (req, res) => { //por agregar periodo de tiempo
    const rep = req.params.fecha;
    const fecha = rep.split('+');
    const inicio = fecha[0];
    const fin = fecha[1];
    await pool.query("select c.nro_factura AS factura, c.fecha_compra AS compra,ca.nombre AS nombre, sum(dc.cantidad) AS vendida from compra c, cerveza_artesanal ca, detalle_compra dc where dc.fk_compra = c.nro_factura and dc.fk_cerveza = ca.clave  and ( fecha_compra BETWEEN '"+inicio+"' AND '"+fin+"')  group by (c.nro_factura, c.fecha_compra, ca.nombre, dc.cantidad) order by dc.cantidad desc limit 10 offset 0;")
        .then(response => {
            console.log('Generando Reporte 7');
            redata(response.rows,'HkeydNRhlL',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte8 = async (req, res) => { //por agregar periodo de tiempo
    const rep = req.params.fecha;
    const fecha = rep.split('+');
    const inicio = fecha[0];
    const fin = fecha[1];
    await pool.query("select e.fecha_inicio AS inicio, e.fecha_fin AS fin, e.nombre AS nombre_e, ca.nombre AS nombre, sum(dv.cantidad) AS ventas from evento e, inventario i, historico_inventario_cerveza hi, detalle_venta dv, venta v, cerveza_artesanal ca where i.fk_evento = e.clave and hi.fk_inventario = i.clave and hi.fk_detalle_venta = dv.codigo and dv.fk_venta = v.nro_factura and hi.fk_cerveza = ca.clave and ( e.fecha_inicio BETWEEN '"+inicio+"' AND '"+fin+"' OR e.fecha_fin BETWEEN '"+inicio+"' AND '"+fin+"' OR '"+inicio+"' BETWEEN e.fecha_inicio AND e.fecha_fin OR '"+fin+"' BETWEEN e.fecha_inicio AND e.fecha_fin )  group by (e.fecha_inicio, e.fecha_fin, e.nombre, ca.nombre, dv.cantidad) order by dv.cantidad desc limit 5 offset 0;")
        .then(response => {
            console.log('Generando Reporte 8');
            redata(response.rows,'H1qHtgTgU',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte9 = async (req, res) => { //por agregar periodo de tiempo
    const rep = req.params.fecha;
    const fecha = rep.split('+');
    const inicio = fecha[0];
    const fin = fecha[1];
    await pool.query("select c.fecha_compra AS fecha, cl.natural_nombre AS nombre, cl.juridico_denominacion_comercial AS comercio, sum(dc.cantidad) AS total_c from cliente cl, compra c, detalle_compra dc where c.fk_tienda_fisica =1 and c.fk_cliente = cl.rif and dc.fk_compra = c.nro_factura  and ( c.fecha_compra BETWEEN '"+inicio+"' AND '"+fin+"') group by (c.fecha_compra, cl.natural_nombre, cl.juridico_denominacion_comercial, dc.cantidad) order by dc.cantidad desc limit 10 offset 0;")
        .then(response => {
            console.log('Generando Reporte 9');
            redata(response.rows,'ByxuzCM6lU',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte10 = async (req, res) => { //por agregar periodo de tiempo
    const rep = req.params.fecha;
    const fecha = rep.split('+');
    const inicio = fecha[0];
    const fin = fecha[1];
    await pool.query("select hv.fecha_inicio AS inicio, hv.fecha_fin AS fin, c.natural_nombre AS natural, c.juridico_denominacion_comercial AS juridico, sum(hp.cantidad) AS tot, sum(tp.cantidad) AS total, (hp.cantidad - tp.cantidad) as punto  from tipo_pago_puntos tp, cliente c, historico_puntos_cliente hp, historico_valor_puntos hv where tp.fk_cliente = c.rif and hp.fk_historico_puntos = hv.clave and tp.fk_historico_valor_puntos = hv.clave   and ( hv.fecha_inicio BETWEEN '"+inicio+"' AND '"+fin+"' OR hv.fecha_fin BETWEEN '"+inicio+"' AND '"+fin+"' OR '"+inicio+"' BETWEEN hv.fecha_inicio AND hv.fecha_fin OR '"+fin+"' BETWEEN hv.fecha_inicio AND hv.fecha_fin ) group by (hv.fecha_inicio, hv.fecha_fin,c.natural_nombre, c.juridico_denominacion_comercial, hp.cantidad, tp.cantidad);")
        .then(response => {
            console.log('Generando Reporte 10');
            redata(response.rows,'BJ5cULTl8',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte11 = async (req, res) => { //por agregar periodo de tiempo 
    const rep = req.params.fecha;
    const fecha = rep.split('+');
    const inicio = fecha[0];
    const fin = fecha[1];
    await pool.query("select hi.fecha_inicio AS inicio, hi.fecha_fin as fin,ca.nombre as nombre, hi.cant_disponible as cant, dc.cantidad as cant2, dv.cantidad as cant3, (hi.cant_disponible -(dc.cantidad)+(dv.cantidad)) as total from tienda t, zona z, inventario i, historico_inventario_cerveza hi, detalle_compra dc, detalle_venta dv, cerveza_artesanal ca where z.fk_tienda = t.clave and i.fk_zona = z.clave and hi.fk_inventario = i.clave and (hi.fk_detalle_compra = dc.clave or hi.fk_detalle_venta = dv.codigo)  and hi.fk_cerveza = ca.clave and ( hi.fecha_inicio BETWEEN '"+inicio+"' AND '"+fin+"' OR hi.fecha_fin BETWEEN '"+inicio+"' AND '"+fin+"' OR '"+inicio+"' BETWEEN hi.fecha_inicio AND hi.fecha_fin OR '"+fin+"' BETWEEN hi.fecha_inicio AND hi.fecha_fin ) group by(hi.fecha_inicio, hi.fecha_fin,ca.nombre, dc.cantidad, dv.cantidad, hi.cant_disponible);")
        .then(response => {
            console.log('Generando Reporte 11');
            redata(response.rows,'ryeTDBspeI',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte12 = async (req, res) => { //por agregar periodo de tiempo 
    const rep = req.params.mes;
    await pool.query("select tabla.fecha_compra AS fecha, tabla.tipo AS tipo ,tabla.cantidad AS cantidad, '"+rep+"' AS mes from(select c.fecha_compra, a.tipo, dc.cantidad from ale a, cerveza_artesanal ca, detalle_compra dc, compra c where '"+rep+"-01' >= tabla.fecha_compra AND '"+rep+"-01' dc.fk_compra = c.nro_factura and  ca.fk_ale = a.clave and dc.fk_cerveza = ca.clave  UNION (select c.fecha_compra,  l.tipo, dc.cantidad from Lager l, cerveza_artesanal ca, detalle_compra dc, compra c where dc.fk_compra = c.nro_factura and  ca.fk_ale = l.clave and dc.fk_cerveza = ca.clave) AS tabla) order by(tabla.cantidad) desc limit 1 offset 0;")
        .then(response => {
            console.log('Generando Reporte 12');
            redata(response.rows,'S1YaJmCeU',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte13 = async (req, res) => {
    await pool.query('select d.fecha_inicio as inicio, ca.nombre as nombre, d.precio AS descuento, (dc.cantidad*dc.precio_unitario) as total, ((dc.cantidad*dc.precio_unitario)* d.precio/100) as totald from cerveza_artesanal ca, descuento d, detalle_compra dc where d.fk_cerveza = ca.clave and dc.fk_cerveza = ca.clave;')
        .then(response => {
            console.log('Generando Reporte 13');
            console.log(response.rows)
            redata(response.rows,'Byx698jpx8',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

reportCtrl.getReporte14 = async (req, res) => {
    await pool.query('select p.fecha_afiliacion AS fecha, p.razon_social AS razon, p.denominacion_comercial AS denominacion, ca.nombre AS nombre, dv.cantidad AS cantidad from proveedor p, cerveza_proveedor cp, cerveza_artesanal ca, detalle_venta dv where cp.fk_cerveza_artesanal = ca.clave and cp.fk_proveedor = p.rif and dv.fk_cerveza_proveedor = cp.clave;')
        .then(response => {
            console.log('Generando Reporte 14');
            console.log(response.rows)
            redata(response.rows,'HyxO7e1Re8',res);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
    };
module.exports = reportCtrl;