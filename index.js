const express = require('express');



// Crear el servidor de express
const app = express();


// Rutas
app.get('/', (req, res) => {

  res.json({
    ok: true
  })

});


// Escuchar peticiones
app.listen( 4000, () => {
  console.log(`Servidor correindo en el puerto ${ 4000 }`);
})