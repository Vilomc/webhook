
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Habilita el parsing de JSON

app.post('/webhook', (req, res) => {
const data = req.body;
console.log(data); // Imprime los datos recibidos en el webhook
res.send({ mensaje: 'Datos recibidos con éxito' });
});

app.listen(port, () => {
console.log(`Servidor escuchando en el puerto ${port}`);
});
