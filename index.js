const express = require("express");
const app = express();

const connection = require("./knexfile")["development"];
const database = require("knex")(connection);
app.use(express.json());
// var port = process.env.PORT || 3000;npm run dev

app.get("/", (req, res) => {
  res.json({ message: "Get home route working find" });
});
app.listen(3001, () => {
  console.log(`Server running`);
});
//USUARIOS//
app.post("/habilidades", (req, res) => {
  const toCreate = req.body;
  database("habilidades")
    .insert(toCreate)
    .then((habilidades) => {
      res.json(habilidades);
    });
});
app.delete("/habilidades/:id", (req, res) => {
  const { id } = req.params;
  database("habilidad")
    .where({ id_habilidad: id })
    .del()
    .then((nombre_habilidad) => {
      res.json;
    });
});
