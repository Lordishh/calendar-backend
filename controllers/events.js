
const { response } = require('express');


const getEventos = async(req, res = response ) => {

  res.json({
    ok: true,
    msg: 'getEventos'
  });

}

const crearEvento = async(req, res = response ) => {

  // verificar que tenga el evento.
  console.log( req.body );

  res.json({
    ok: true,
    msg: 'crearEvento'
  });



}

const actualizarEvento = async(req, res = response ) => {

  res.json({
    ok: true,
    msg: 'actualizarEvento'
  });

}

const eliminarEvento = async(req, res = response ) => {

  res.json({
    ok: true,
    msg: 'eliminarEvento'
  });

}

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
}

