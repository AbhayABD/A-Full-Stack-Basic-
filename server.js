//server file to be saved

const express = require("express");
//const bodyparser = require("body-parser");

const app = express();
const port = 5000;

app.listen(port, () => console.log(`Server on ${port}`));
app.get("/customers", (req, res) => {
  const customers = [
    { id: "1", name: "Abhay" },
    { id: "2", name: "Akshay" },
    { id: "3", name: "Aviray" }
  ];
  res.json(customers);
});
