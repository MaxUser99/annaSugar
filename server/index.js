const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const app = express(),
  port = 3000;

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
  // res.send("Hello world");
});

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

app.listen(port, () => {
  console.log(`server is listening on the port::${port}`);
});