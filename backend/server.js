const express = require("express");
const cors=require('cors')
const bodyParser=require('body-parser')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
