const express = require("express");
const app = express();
const fs = require("fs");
let employees = [];

app.get("/employees", function (req, res) {
  fs.readFile("./data.json", "utf-8", (error, data) => {
    if (!error) {
      employees = JSON.parse(data);
    }
  });
  res.send(employees);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
