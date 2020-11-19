const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors())
app.use(express.json()) // for parsing application/json

app.get("/personas", (req, res) => {
  res.send('{"list":[{"id":111, "name": "Cristhian"},{"id":112, "name": "Laura"}]}');
});

app.post("/personas", (req, res) => {
  console.log("llego");
  var i;
  console.log(req.body.dataString);
  console.log(req.params.dataString);
  console.log(req.params.Formulario);
  console.log(req.get('Nombre'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})






