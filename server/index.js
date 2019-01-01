require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const controller = require("./controllers/controller");

const app = express();

app.use(json());
app.use(cors());

app.use(express.static(`${__dirname}/../build`));

app.get("/api/images", controller.read);

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db), console.log("Database Connected"))
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
