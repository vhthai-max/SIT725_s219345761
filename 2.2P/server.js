const express = require("express");
const app = express();
const port = 3000;

// serve static files from public folder
app.use(express.static("public"));

// web service endpoint: add two numbers
app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  const sum = num1 + num2;
  res.send({ result: sum });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
