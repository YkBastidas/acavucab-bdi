CREATE SEQUENCE public.secuencia_historia_cerveza
     start with 1
     increment 1
     minvalue 1
     maxvalue 20000
     cycle
;

CREATE TABLE public.historia_cerveza 
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_historia_cerveza'::regclass),
     descripcion varchar NOT NULL,
     CONSTRAINT pk_clave_historia_cerveza PRIMARY KEY (clave)
);

CREATE SEQUENCE public.secuencia_ale
     start with 1
     increment 1
     minvalue 1
     maxvalue 5000
     cycle
;

CREATE TABLE public.ale
(
    clave numeric NOT NULL DEFAULT nextval('secuencia_ale'::regclass),
    tipo varchar NOT NULL,
    fk_historia_cerveza numeric,
    CONSTRAINT pk_clave_ale PRIMARY KEY (clave),
    CONSTRAINT fk_fk_historia_cerveza_ale FOREIGN KEY (fk_historia_cerveza) REFERENCES historia_cerveza(clave)
);

CREATE SEQUENCE public.secuencia_lager
     start with 1
     increment 1
     minvalue 1
     maxvalue 5000
     cycle
;

CREATE TABLE public.lager
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_lager'::regclass),
     tipo varchar NOT NULL,
     fk_historia_cerveza numeric,
     CONSTRAINT pk_clave_lager PRIMARY KEY (clave),
    CONSTRAINT fk_fk_historia_cerveza_ale FOREIGN KEY (fk_historia_cerveza) REFERENCES historia_cerveza(clave)
);

CREATE SEQUENCE public.secuencia_ingrediente
     start with 1
     increment 1
     minvalue 1
     maxvalue 20000
     cycle
;

CREATE TABLE public.ingrediente
(
     id numeric NOT NULL DEFAULT nextval('secuencia_ingrediente'::regclass),
     nombre varchar(15) NOT NULL,
     tipo varchar(15) NOT NULL,
     CONSTRAINT pk_id_ingrediente PRIMARY KEY (id)
);

CREATE SEQUENCE public.secuencia_cerveza
     start with 1
     increment 1
     minvalue 1
     maxvalue 20000
     cycle
;

CREATE TABLE public.cerveza_artesanal
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_cerveza'::regclass),
     nombre varchar(40) NOT NULL,
     descripcion varchar, 
     fk_ale numeric,
     fk_lager numeric,
     CONSTRAINT pk_clave_cerveza PRIMARY KEY (clave),
     CONSTRAINT fk_ale_cerveza FOREIGN KEY (fk_ale) REFERENCES ale(clave),
     CONSTRAINT fk_lager_cerveza FOREIGN KEY (fk_lager) REFERENCES lager(clave)
);

CREATE SEQUENCE public.secuencia_receta
     start with 1
     increment 1
     minvalue 1
     maxvalue 25000
     cycle
;

CREATE TABLE public.receta 
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_receta'::regclass),
     descripcion varchar(50) NOT NULL,
     fk_cerveza numeric NOT NULL,
     CONSTRAINT pk_clave_receta PRIMARY KEY (clave),
     CONSTRAINT fk_fk_cerveza FOREIGN KEY (fk_cerveza) REFERENCES cerveza_artesanal(clave)
);

CREATE SEQUENCE public.secuencia_receta_ingrediente
     start with 1
     increment 1
     minvalue 1
     maxvalue 70000
     cycle
;

CREATE TABLE public.receta_ingre
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_receta_ingrediente'),
     fk_ingrediente numeric NOT NULL,
     fk_receta numeric NOT NULL,
     cant_ingrediente numeric NOT NULL,
     CONSTRAINT pk_receta_ingrediente PRIMARY KEY (clave),
     CONSTRAINT fk_fk_ingrediente FOREIGN KEY (fk_ingrediente) REFERENCES ingrediente(id),
     CONSTRAINT fk_fk_receta FOREIGN KEY (fk_receta) REFERENCES receta (clave)
);   

CREATE SEQUENCE public.secuencia_caracteristica
     start with 1
     increment 1
     minvalue 1
     maxvalue 70000
     cycle
;

CREATE TABLE public.caracteristica     
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_caracteristica'),
     tipo varchar(15) NOT NULL,
     valor varchar(15) NOT NULL,
     descripcion varchar(50) NOT NULL,
     CONSTRAINT pk_clave_caracteristica PRIMARY KEY (clave),
     CONSTRAINT chk_tipo_caracteristica CHECK(tipo in ('IBUs','Densidad inicial','Densidad final','Color','Nivel de alcohol'))
);

CREATE SEQUENCE public.secuencia_cerveza_caracteristica
     start with 1
     increment 1
     minvalue 1
     maxvalue 100000
     cycle
;

CREATE TABLE public.cerveza_caracteristica 
(
     id numeric NOT NULL DEFAULT nextval('secuencia_cerveza_caracteristica'::regclass),
     fk_cerveza numeric NOT NULL,
     fk_caracteristica numeric NOT NULL,
     CONSTRAINT pk_id_cerveza_caracteristica PRIMARY KEY (id),
     CONSTRAINT fk_fk_cerveza_cerveza_caracteristica FOREIGN KEY (fk_cerveza) REFERENCES cerveza_artesanal(clave),
     CONSTRAINT fk_fk_caracteristica_cerveza_caracteristica FOREIGN KEY (fk_caracteristica) REFERENCES caracteristica(clave)
);

CREATE SEQUENCE public.secuencia_departamento
     start with 1
     increment 1
     minvalue 1
     maxvalue 250
     cycle
;

CREATE TABLE public.departamento
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_departamento'::regclass),  
     nombre varchar(50) NOT NULL,
     CONSTRAINT pk_clave_departamento PRIMARY KEY (clave)
);

CREATE SEQUENCE public.secuencia_direccion
     start with 1
     increment 1
     minvalue 1
     maxvalue 10000
     cycle
;

CREATE TABLE public.direccion
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_direccion'),
     tipo varchar(15) NOT NULL,
     nombre varchar NOT NULL,
     fk_direccion numeric,
     CONSTRAINT pk_clave_direccion PRIMARY KEY (clave),
     CONSTRAINT  fk_fk_direccion FOREIGN KEY (fk_direccion) REFERENCES direccion(clave),
     CONSTRAINT chk_tipo_direccion CHECK (tipo in ('Estado','Ciudad','Municipio','Parroquia', 'Avenida', 'Edificio', 'Piso', 'Oficina', 'Apartamento') )
);

CREATE SEQUENCE public.secuencia_privilegio
     start with 1
     increment 1
     minvalue 1
     maxvalue 200
     cycle
;

CREATE TABLE public.privilegio
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_privilegio'::regclass),
     tipo varchar NOT NULL,
     tabla varchar NOT NULL,
     CONSTRAINT pk_clave_privilegio PRIMARY KEY (clave),
     CONSTRAINT chk_tipo_privilegio CHECK (tipo in ('Crear','Consultar','Modificar','Eliminar'))
);

CREATE SEQUENCE public.secuencia_rol
     start with 1
     increment 1
     minvalue 1
     maxvalue 100
     cycle
;

CREATE TABLE public.rol 
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_rol'),
     nombre varchar NOT NULL,
     CONSTRAINT pk_clave_rol PRIMARY KEY (clave)
);

CREATE SEQUENCE public.secuencia_rol_privilegio
     start with 1
     increment 1
     minvalue 1
     maxvalue 1000
     cycle
;

CREATE TABLE public.rol_privilegio
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_rol_privilegio'::regclass),
     fk_rol numeric NOT NULL,
     fk_privilegio numeric NOT NULL,
     CONSTRAINT pk_clave_rol_privilegio PRIMARY KEY (clave),
     CONSTRAINT fk_fk_rol_rol_privilegio FOREIGN KEY (fk_rol) REFERENCES rol(clave),
     CONSTRAINT fk_fk_privilegio_rol_privilegio FOREIGN KEY (fk_privilegio) REFERENCES privilegio(clave)
);

CREATE SEQUENCE public.secuencia_usuario
     start with 1
     increment 1
     minvalue 1
     maxvalue 200000
     cycle
;

CREATE TABLE public.usuario  
(
     id numeric NOT NULL DEFAULT nextval('secuencia_usuario'::regclass),
     nombre varchar NOT NULL,
     contrasena varchar NOT NULL,
     CONSTRAINT pk_id_usuario PRIMARY KEY (id)
);

CREATE SEQUENCE public.secuencia_personal
     start with 1
     increment 1
     minvalue 1
     maxvalue 500
     cycle
;

CREATE TABLE public.personal
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_personal'::regclass),  
     nombre varchar(15) NOT NULL,
     apellido varchar(15) NOT NULL,
     ci numeric(9) NOT NULL,
     salario varchar(11) NOT NULL, 
     cargo varchar(50) NOT NULL,
     genero varchar NOT NULL,
     fk_rol numeric,
     fk_usuario numeric NOT NULL,
     CONSTRAINT pk_clave_personal PRIMARY KEY (clave),
     CONSTRAINT fk_personal_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
     CONSTRAINT fk_fk_rol_personal FOREIGN KEY (fk_rol) REFERENCES rol(clave),
     CONSTRAINT chk_genero_personal CHECK (genero in ('Hombre','Mujer','Otro'))
);

CREATE SEQUENCE public.secuencia_motivos_laborales
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.motivos_laborales
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_motivos_laborales'::regclass),
     tipo varchar NOT NULL,
     fecha_inicio date NOT NULL,
     fecha_fin date,
     fk_personal numeric NOT NULL,
     CONSTRAINT pk_situaciones_especiales PRIMARY KEY (clave),
     CONSTRAINT fk_fk_personal_situaciones_especiales FOREIGN KEY (fk_personal) REFERENCES personal(clave),
     CONSTRAINT chk_tipo_situaciones_especiales CHECK (tipo in('Vacaciones','Motivos de salud','Problemas familiares'))
);

CREATE SEQUENCE public.secuencia_horario
     start with 1
     increment 1
     minvalue 1
     maxvalue 100
     cycle
;

CREATE TABLE public.horario 
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_horario'::regclass),
     dia varchar NOT NULL,
     hora_inicio numeric NOT NULL,
     hora_fin numeric NOT NULL,
     CONSTRAINT pk_clave_horario PRIMARY KEY (clave)
);

CREATE SEQUENCE public.secuencia_beneficio
     start with 1
     increment 1
     minvalue 1
     maxvalue 2000
     cycle
;

CREATE TABLE public.beneficio
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_beneficio'::regclass),
     valor numeric NOT NULL,
     tipo varchar NOT NULL,
     CONSTRAINT pk_clave_beneficio PRIMARY KEY (clave)
);

CREATE SEQUENCE public.secuencia_personal_beneficio
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.personal_beneficio
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_personal_beneficio'::regclass),
     fk_beneficio numeric NOT NULL,
     fk_personal numeric NOT NULL,
     CONSTRAINT pk_clave_personal_beneficio PRIMARY KEY (clave),
     CONSTRAINT fk_fk_personal_personal_beneficio FOREIGN KEY (fk_personal) REFERENCES personal(clave),
     CONSTRAINT fk_fk_beneficio_personal_beneficio FOREIGN KEY (fk_beneficio) REFERENCES beneficio(clave)
);
 
CREATE SEQUENCE public.secuencia_personal_horario
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.personal_horario
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_personal_horario'::regclass),
     tipo varchar NOT NULL,
     fecha_falta date,
     fk_personal numeric NOT NULL,
     fk_horario numeric NOT NULL,
     CONSTRAINT pk_clave_personal_horario PRIMARY KEY (clave),
     CONSTRAINT fk_fk_personal_personal_horario FOREIGN KEY (fk_personal) REFERENCES personal(clave),
     CONSTRAINT fk_fk_horario_personal_horario FOREIGN KEY (fk_horario) REFERENCES horario(clave),
     CONSTRAINT chk_tipo_horario_personal CHECK (tipo in('Horario asignado','Inasistente'))
);

CREATE SEQUENCE public.secuencia_proveedor
     start with 1
     increment 1
     minvalue 1
     maxvalue 1000
     cycle
;

CREATE TABLE public.proveedor
(
     rif numeric NOT NULL DEFAULT nextval('secuencia_proveedor'::regclass),
     razon_social varchar NOT NULL,
     denominacion_comercial varchar NOT NULL,
     pagina_web varchar NOT NULL,
     fecha_afiliacion date NOT NULL,
     fk_direccion numeric NOT NULL,
     CONSTRAINT pk_rif_proveedor PRIMARY KEY (rif),
     CONSTRAINT fk_fk_direccion_proveedor FOREIGN KEY (fk_direccion) REFERENCES direccion(clave)
);

CREATE SEQUENCE public.secuencia_cerveza_proveedor
     start with 1
     increment 1
     minvalue 1
     maxvalue 4000
     cycle
;

CREATE TABLE public.cerveza_proveedor 
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_proveedor'::regclass),
     fk_cerveza_artesanal numeric NOT NULL,
     fk_proveedor numeric NOT NULL,
     CONSTRAINT pk_clave_cerveza_proveedor PRIMARY KEY (clave),
     CONSTRAINT fk_fk_cerveza_cerveza_proveedor FOREIGN KEY (fk_cerveza_artesanal) REFERENCES cerveza_artesanal(clave),
     CONSTRAINT fk_fk_proveedor_cerveza_proveedor FOREIGN KEY (fk_proveedor) REFERENCES proveedor(rif)
);

CREATE SEQUENCE public.secuencia_evento
     start with 1
     increment 1
     minvalue 1
     maxvalue 1500
     cycle
;

CREATE TABLE public.evento
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_evento'::regclass),
     fecha_inicio date NOT NULL,
     fecha_fin date NOT NULL,
     nombre varchar NOT NULL,
     cant_entrada_vendida numeric NOT NULL,
     cant_entrada_disponible numeric NOT NULL,
     fk_direccion numeric NOT NULL,
     CONSTRAINT pk_clave_evento PRIMARY KEY (clave),
     CONSTRAINT fk_fk_direccion_evento FOREIGN KEY (fk_direccion) REFERENCES direccion(clave)
);

CREATE SEQUENCE public.secuencia_evento_proveedor
     start with 1
     increment 1
     minvalue 1
     maxvalue 10000
     cycle
;

CREATE TABLE public.evento_proveedor
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_evento_proveedor'::regclass),
     fk_evento numeric NOT NULL,
     fk_proveedor numeric NOT NULL,
     CONSTRAINT pk_clave_evento_proveedor PRIMARY KEY (clave),
     CONSTRAINT fk_fk_evento_evento_proveedor FOREIGN KEY (fk_evento) REFERENCES evento(clave),
     CONSTRAINT fk_fk_proveedor_eventoproveedor FOREIGN KEY (fk_proveedor) REFERENCES proveedor(rif)
);

CREATE SEQUENCE public.secuencia_pasillo
     start with 1
     increment 1
     minvalue 1
     maxvalue 50
     cycle
;

CREATE TABLE public.pasillo
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_pasillo'::regclass),
     numero numeric NOT NULL,
     CONSTRAINT pk_pasillo PRIMARY KEY (clave)
);

CREATE SEQUENCE public.secuencia_tienda
     start with 1
     increment 1
     minvalue 1
     maxvalue 200
     cycle
;

CREATE TABLE public.tienda
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_tienda'::regclass),
     tipo varchar(7) NOT NULL,
     fisica_nombre varchar,
     fk_fisica_direccion numeric NOT NULL,
     virtual_pagina_web varchar,
     CONSTRAINT pk_tienda PRIMARY KEY (clave),
     CONSTRAINT fk_fk_fisica_direccion_tienda FOREIGN KEY (fk_fisica_direccion) REFERENCES direccion(clave)
);

CREATE SEQUENCE public.secuencia_zona
     start with 1
     increment 1
     minvalue 1
     maxvalue 1500
     cycle
;

CREATE TABLE public.zona 
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_zona'::regclass),
     numero_estante numeric NOT NULL,
     numero_repisa numeric NOT NULL,
     fk_tienda numeric NOT NULL,
     fk_rol numeric NOT NULL,
     fk_pasillo numeric NOT NULL,
     CONSTRAINT pk_zona PRIMARY KEY (clave),
     CONSTRAINT fk_fk_tienda_zona FOREIGN KEY (fk_tienda) REFERENCES tienda(clave),
     CONSTRAINT fk_fk_rol_zona FOREIGN KEY (fk_rol) REFERENCES rol(clave),
     CONSTRAINT fk_fk_pasillo_zona FOREIGN KEY (fk_pasillo) REFERENCES pasillo(clave)
);

CREATE SEQUENCE public.secuencia_factura
     start with 1
     increment 1
     minvalue 1
     maxvalue 100000
     cycle
;

CREATE TABLE public.venta    
(
     total numeric NOT NULL DEFAULT nextval('secuencia_factura'::regclass),
     nro_factura numeric NOT NULL,
     fecha date NOT NULL,
     CONSTRAINT pk_nro_factura_venta PRIMARY KEY (nro_factura)
);

CREATE SEQUENCE public.secuencia_detalle_venta
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.detalle_venta     --A su vez, un historico inventario no tendria un solo inventario? La relacion no deberia ser uno a uno?
(
     codigo numeric NOT NULL DEFAULT nextval('secuencia_detalle_venta'::regclass),
     cantidad numeric NOT NULL,
     precio_unitario numeric NOT NULL,
     fk_venta numeric NOT NULL,
     fk_cerveza_proveedor numeric NOT NULL,
     CONSTRAINT pk_codigo_detalle_venta PRIMARY KEY (codigo),
     CONSTRAINT fk_fk_venta_detalle_venta FOREIGN KEY (fk_venta) REFERENCES venta(nro_factura),
     CONSTRAINT fk_fk_cerveza_proveedor_detalle_venta FOREIGN KEY (fk_cerveza_proveedor) REFERENCES cerveza_proveedor(clave)
);

CREATE SEQUENCE public.secuencia_status
     start with 1
     increment 1
     minvalue 1
     maxvalue 25
     cycle
;

CREATE TABLE public.status
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_status'),
     nombre varchar NOT NULL,
     CONSTRAINT pk_clave_status PRIMARY KEY (clave)
);

CREATE SEQUENCE public.secuencia_status_venta
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.status_venta  
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_status_venta'::regclass),
     fk_status numeric NOT NULL,
     fk_venta numeric NOT NULL,
     CONSTRAINT pk_status_venta PRIMARY KEY (clave),
     CONSTRAINT fk_fk_status_status_venta FOREIGN KEY (fk_status) REFERENCES status(clave),
     CONSTRAINT fk_fk_venta_status_venta FOREIGN KEY (fk_venta) REFERENCES venta(nro_factura)
);

CREATE TABLE public.cliente 
(
     rif varchar(15), 
     tipo varchar(8) NOT NULL,
     fk_direccion_fisica numeric NOT NULL,
     natural_ci numeric(9),
     natural_nombre varchar(15),
     natural_apellido varchar(15),
     natural_genero varchar,
     natural_fecha_nacimiento date,
     juridico_denominacion_comercial varchar(30),
     juridico_razon_social varchar(30),
     juridico_pagina_web varchar(30),
     juridico_capital numeric,
     juridico_fk_direccion_fiscal numeric,
     fk_usuario numeric NOT NULL,
     CONSTRAINT pk_cliente PRIMARY KEY (rif),
     CONSTRAINT chk_tipo_cliente CHECK (tipo in ('Natural','Juridico')),
     CONSTRAINT fk_fk_direccion_fisica_cliente FOREIGN KEY (fk_direccion_fisica) REFERENCES direccion(clave),
     CONSTRAINT fk_juridico_fk_direccion_fiscal_cliente FOREIGN KEY (juridico_fk_direccion_fiscal) REFERENCES direccion(clave),
     CONSTRAINT fk_cliente_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id),    
     CONSTRAINT chk_natural_genero_cliente CHECK (natural_genero in ('Hombre','Mujer','Otro'))
);

CREATE SEQUENCE public.secuencia_comentario_cerveza
     start with 1
     increment 1
     minvalue 1
     maxvalue 100000
     cycle
;

CREATE TABLE public.comentario_cerveza
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_comentario_cerveza'::regclass),
     calificacion numeric(1,0) NOT NULL,
     descripcion varchar(100),
     fk_cliente varchar NOT NULL,
     fk_cerveza numeric NOT NULL,
     CONSTRAINT pk_comentario_cerveza PRIMARY KEY (clave),
     CONSTRAINT fk_fk_cliente_comentario_cerveza FOREIGN KEY (fk_cliente) REFERENCES cliente(rif),
     CONSTRAINT fk_fk_cerveza_comentario_cerveza FOREIGN KEY (fk_cerveza) REFERENCES cerveza_artesanal(clave),
     CONSTRAINT chk_calificacion_comentario_cerveza CHECK (calificacion BETWEEN 0 AND 5)
);

CREATE SEQUENCE public.secuencia_correo_electronico
     start with 1
     increment 1
     minvalue 1
     maxvalue 200000
     cycle
;

CREATE TABLE public.correo_electronico   
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_correo_electronico'::regclass),
     direccion varchar NOT NULL,
     fk_cliente varchar NOT NULL,
     CONSTRAINT pk_clave_correo_electronico PRIMARY KEY (clave),
     CONSTRAINT fk_fk_cliente_correo_electronico FOREIGN KEY (fk_cliente) REFERENCES cliente(rif)
);

CREATE TABLE public.compra 
(                          
     total_pago numeric NOT NULL DEFAULT nextval('secuencia_factura'::regclass),
     nro_factura numeric NOT NULL,
     fecha_compra date NOT NULL,
     fk_tienda_fisica numeric,
     fk_tienda_virtual numeric,
     fk_cliente varchar NOT NULL,
     CONSTRAINT pk_nro_factura_compra_status PRIMARY KEY (nro_factura),
     CONSTRAINT fk_fk_tienda_fisica_compra FOREIGN KEY (fk_tienda_fisica) REFERENCES tienda(clave),
     CONSTRAINT fk_fk_tienda_virtual_compra FOREIGN KEY (fk_tienda_virtual) REFERENCES tienda(clave),
     CONSTRAINT fk_fk_cliente_compra FOREIGN KEY (fk_cliente) REFERENCES cliente(rif)
);

CREATE SEQUENCE public.secuencia_detalle_compra
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.detalle_compra 
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_detalle_compra'::regclass),
     cantidad numeric NOT NULL,
     precio_unitario numeric NOT NULL,
     fk_compra numeric NOT NULL,
     fk_cerveza numeric NOT NULL,
     CONSTRAINT pk_clave_detalle_compra PRIMARY KEY (clave),
     CONSTRAINT fk_fk_compra_detalle_compra FOREIGN KEY (fk_compra) REFERENCES compra(nro_factura),
     CONSTRAINT fk_fk_cerveza_detalle_compra FOREIGN KEY (fk_cerveza) REFERENCES cerveza_artesanal(clave)
);

CREATE SEQUENCE public.secuencia_inventario
     start with 1
     increment 1
     minvalue 1
     maxvalue 75000
     cycle
;

CREATE TABLE public.inventario     --Una zona no deberia tener un solo inventario? No se guarda historico por pasillos, una repisa y un estante tienen mas de un producto entonces?
(                                 
     clave numeric NOT NULL DEFAULT nextval('secuencia_inventario'::regclass),
     cantidad numeric NOT NULL,
     fk_evento numeric,
     fk_zona numeric,
     CONSTRAINT pk_clave_inventario PRIMARY KEY (clave),
     CONSTRAINT fk_fk_evento_inventario FOREIGN KEY (fk_evento) REFERENCES evento(clave),
     CONSTRAINT fk_fk_zona_inventario   FOREIGN KEY (fk_zona) REFERENCES zona(clave)
);

CREATE SEQUENCE public.secuencia_historico_inventario_cerveza
     start with 1
     increment 1
     minvalue 1
     maxvalue 250000
     cycle
;

CREATE TABLE public.historico_inventario_cerveza   -- REVISAR la cardinalidad entre inventario e historico inventario 
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_historico_inventario_cerveza'::regclass),
     cant_disponible numeric NOT NULL,
     fecha_inicio date NOT NULL,
     fecha_fin date,
     fk_cerveza numeric NOT NULL,
     fk_detalle_venta numeric,
     fk_detalle_compra numeric,
     fk_inventario numeric,
     CONSTRAINT pk_clave_historico_inventario_cerveza PRIMARY KEY (clave),
     CONSTRAINT fk_fk_cerveza FOREIGN KEY (fk_cerveza) REFERENCES cerveza_artesanal(clave),
     CONSTRAINT fk_fk_detalle_compra_historico_inventario FOREIGN KEY (fk_detalle_compra) REFERENCES detalle_compra(clave),
     CONSTRAINT fk_fk_detalle_venta_historico_inventario FOREIGN KEY (fk_detalle_venta) REFERENCES detalle_venta(codigo),
     CONSTRAINT fk_fk_inventario_historico_inventario FOREIGN KEY (fk_inventario) REFERENCES inventario(clave)
);

CREATE SEQUENCE public.secuencia_historico_puntos_cliente
     start with 1
     increment 1
     minvalue 1
     maxvalue 175000
     cycle
;

CREATE TABLE public.historico_puntos_cliente  --Falta el chck en tipo
(
     clave numeric NOT NULL DEFAULT nextval('historico_puntos_cliente'::regclass),
     cantidad numeric NOT NULL,
     fecha_cambio date NOT NULL,
     tipo char NOT NULL,
     fk_cliente varchar NOT NULL,
     CONSTRAINT pk_clave_historico_puntos_cliente PRIMARY KEY (clave),
     CONSTRAINT fk_fk_cliente_historico_puntos_cliente FOREIGN KEY (fk_cliente) REFERENCES cliente(rif),
     CONSTRAINT chk_tipo_historico_puntos_cliente CHECK (tipo in('+','-'))
);

CREATE SEQUENCE public.secuencia_persona_contacto
     start with 1
     increment 1
     minvalue 1
     maxvalue 200000
     cycle
;

CREATE TABLE public.persona_contacto
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_persona_contacto'::regclass),
     nombre varchar NOT NULL,
     numero numeric NOT NULL,
     fk_cliente varchar NOT NULL,
     CONSTRAINT pk_clave_persona_contacto PRIMARY KEY (clave),
     CONSTRAINT fk_fk_cliente_persona_contacto FOREIGN KEY (fk_cliente) REFERENCES cliente(rif)
);

CREATE SEQUENCE public.secuencia_telefono
     start with 1
     increment 1
     minvalue 1
     maxvalue 300000
     cycle
;

CREATE TABLE public.telefono
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_telefono'::regclass),
     numero numeric NOT NULL,
     fk_cliente varchar,
     fk_proveedor numeric,
     CONSTRAINT pk_clave_telefono PRIMARY KEY (clave),
     CONSTRAINT fk_fk_cliente_telefono FOREIGN KEY (fk_cliente) REFERENCES cliente(rif),
     CONSTRAINT fk_fk_proveedor_cliente FOREIGN KEY (fk_proveedor) REFERENCES proveedor(rif)
);

CREATE SEQUENCE public.secuencia_tipo_pago_credito
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.tipo_pago_credito 
(
     codigo numeric NOT NULL DEFAULT nextval('secuencia_tipo_pago_credito'::regclass),
     banco varchar(25),
     numero numeric NOT NULL,
     tipo varchar(10) NOT NULL,
     cvc numeric NOT NULL,
     nombre_impreso varchar NOT NULL,
     cedula numeric NOT NULL,
     CONSTRAINT pk_codigo_tipo_pago_credito PRIMARY KEY (codigo),
     CONSTRAINT chk_tipo_tipo_pago_credito CHECK (tipo in('Visa','Mastercard'))
);

CREATE SEQUENCE public.secuencia_tipo_pago_debito
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.tipo_pago_debito
(
     codigo numeric NOT NULL DEFAULT nextval('secuencia_tipo_pago_debito'::regclass),
     banco varchar(25),
     numero numeric NOT NULL,
     tipo varchar(10) NOT NULL,
     cvc numeric NOT NULL,
     nombre_impreso varchar NOT NULL,
     cedula numeric NOT NULL,
     CONSTRAINT pk_codigo_tipo_pago_debito PRIMARY KEY (codigo),
     CONSTRAINT chk_tipo_tipo_pago_debito CHECK (tipo in('Maestro'))
);

CREATE SEQUENCE public.secuencia_tipo_pago_efectivo
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.tipo_pago_efectivo     --Revisar FK de TODOS tipo_pago
(
     codigo numeric NOT NULL DEFAULT nextval('secuencia_tipo_pago_efectivo'::regclass),
     banco varchar(15),
     denominacion numeric NOT NULL,
     cantidad numeric NOT NULL,
     CONSTRAINT pk_codigo_tipo_pago_efectivo PRIMARY KEY (codigo)
);

CREATE SEQUENCE public.secuencia_tipo_pago_cheque 
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.tipo_pago_cheque
(
     codigo numeric NOT NULL DEFAULT nextval('secuencia_tipo_pago_cheque'::regclass),
     banco varchar(15),
     numero_cuenta numeric NOT NULL,
     numero_cheque numeric NOT NULL,
     CONSTRAINT pk_codigo_tipo_pago_cheque PRIMARY KEY (codigo)
);

CREATE SEQUENCE public.secuencia_historico_tasa
     start with 1
     increment 1
     minvalue 1
     maxvalue 2500
     cycle
;

CREATE TABLE public.historico_tasa 
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_historico_tasa'::regclass),
     numero_cambio numeric NOT NULL,
     fecha_inicio date NOT NULL,
     fecha_fin date,
     CONSTRAINT pk_clave_historico_tasa PRIMARY KEY (clave)
);

CREATE SEQUENCE public.secuencia_tipo_pago_divisa
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.tipo_pago_divisa  
(
     codigo numeric NOT NULL DEFAULT nextval('secuencia_tipo_pago_divisa'::regclass),
     banco varchar(15),
     tipo varchar(10) NOT NULL,
     fk_historico_tasa numeric NOT NULL,
     CONSTRAINT pk_codigo_tipo_pago_divisa PRIMARY KEY(codigo),
     CONSTRAINT fk_fk_historico_tasa_tipo_pago_divisa FOREIGN KEY (fk_historico_tasa) REFERENCES historico_tasa(clave)
);

CREATE SEQUENCE public.secuencia_historico_valor_puntos
     start with 1
     increment 1
     minvalue 1
     maxvalue 2500
     cycle
;

CREATE TABLE public.historico_valor_puntos
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_historico_valor_puntos'::regclass),
     numero_cambio numeric NOT NULL,
     fecha_inicio date NOT NULL,
     fecha_fin date,
     CONSTRAINT pk_clave_historico_valor PRIMARY KEY (clave)
);

CREATE SEQUENCE public.secuencia_tipo_pago_puntos
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.tipo_pago_puntos  
(
     codigo numeric NOT NULL DEFAULT nextval('secuencia_tipo_pago_puntos'::regclass),
     banco varchar(15),
     tipo varchar(10) NOT NULL,
     fk_historico_valor_puntos numeric NOT NULL,
     CONSTRAINT pk_codigo_tipo_pago_puntos PRIMARY KEY (codigo),
     CONSTRAINT fk_fk_historico_valor_puntos_tipo_pago_puntos FOREIGN KEY (fk_historico_valor_puntos) REFERENCES historico_valor_puntos(clave)
);

CREATE SEQUENCE public.secuencia_cuota_afiliacion
     start with 1
     increment 1
     minvalue 1
     maxvalue 75000
     cycle
;

CREATE TABLE public.cuota_afiliacion  
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_cuota_afiliacion'::regclass),
     inversion numeric NOT NULL,
     fecha date NOT NULL,
     fk_proveedor numeric NOT NULL,
     CONSTRAINT pk_clave_cuota_afiliacion PRIMARY KEY (clave)
);

CREATE SEQUENCE public.secuencia_pago
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.pago 
(
     codigo numeric NOT NULL DEFAULT nextval('secuencia_pago'::regclass),
     monto numeric NOT NULL,
     fk_compra numeric,
     fk_tipo_pago_credito numeric,
     fk_tipo_pago_debito numeric,
     fk_tipo_pago_cheque numeric,
     fk_tipo_pago_efectivo numeric,
     fk_tipo_pago_puntos numeric,
     fk_tipo_pago_divisa numeric,
     fk_cuota_afiliacion numeric,
     CONSTRAINT pk_codigo_pago PRIMARY KEY (codigo),
     CONSTRAINT fk_fk_tipo_pago_credito_pago FOREIGN KEY (fk_tipo_pago_credito) REFERENCES tipo_pago_credito(codigo),
     CONSTRAINT fk_fk_tipo_pago_debito_pago FOREIGN KEY (fk_tipo_pago_debito) REFERENCES tipo_pago_debito(codigo),
     CONSTRAINT fk_fk_tipo_pago_cheque_pago FOREIGN KEY (fk_tipo_pago_cheque) REFERENCES tipo_pago_cheque(codigo),
     CONSTRAINT fk_fk_tipo_pago_efectivo_pago FOREIGN KEY (fk_tipo_pago_efectivo) REFERENCES tipo_pago_efectivo(codigo),
     CONSTRAINT fk_fk_tipo_pago_puntos_pago FOREIGN KEY (fk_tipo_pago_puntos) REFERENCES tipo_pago_puntos(codigo),
     CONSTRAINT fk_fk_tipo_pago_divisa_pago FOREIGN KEY (fk_tipo_pago_divisa) REFERENCES tipo_pago_divisa(codigo),
     CONSTRAINT fk_fk_cuota_afiliacion_pago FOREIGN KEY (fk_cuota_afiliacion) REFERENCES cuota_afiliacion(clave)
);

CREATE SEQUENCE public.secuencia_status_compra
     start with 1
     increment 1
     minvalue 1
     maxvalue 50000
     cycle
;

CREATE TABLE public.status_compra
(
     clave numeric NOT NULL DEFAULT nextval('secuencia_status_compra'::regclass),
     fecha_cambio date NOT NULL,
     fk_status numeric NOT NULL,
     fk_compra numeric NOT NULL,
     fk_departamento numeric NOT NULL,
     CONSTRAINT pk_clave_status_compra PRIMARY KEY (clave),
     CONSTRAINT fk_fk_status_status_compra FOREIGN KEY (fk_status) REFERENCES status(clave),
     CONSTRAINT fk_fk_compra_status_compra FOREIGN KEY (fk_compra) REFERENCES compra(nro_factura),
     CONSTRAINT fk_fk_departamento_status_compra FOREIGN KEY (fk_departamento) REFERENCES departamento(clave)
);

CREATE SEQUENCE public.secuencia_descuento
     start with 1
     increment 1
     minvalue 1
     maxvalue 15000
     cycle
;

CREATE TABLE public.descuento   --Cambie fecha, a fecha_inicio, deberiamos colocar un atributo que sea porcentaje, que sea el porcentaje de descuento, y registrar con precio o porcentaje
(                              
     clave numeric NOT NULL DEFAULT nextval('secuencia_descuento'::regclass),
     fecha_inicio date NOT NULL,
     precio numeric NOT NULL,
     fk_rol numeric NOT NULL,
     fk_cerveza numeric NOT NULL,
     CONSTRAINT pk_clave_descuento PRIMARY KEY (clave),
     CONSTRAINT fk_fk_cerveza_descuento FOREIGN KEY (fk_cerveza) REFERENCES cerveza_artesanal(clave),
     CONSTRAINT fk_fk_rol_descuento FOREIGN KEY (fk_rol) REFERENCES rol(clave)
);