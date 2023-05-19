const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.all("*", function (req, res, next) {
  res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type,Authorization ,Accept"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Expose-Headers", "Authorization");
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type, Authorization"
  );
  next();
});

connectToMongo();
app.use(express.json());

app.use("/api/auth", require("./Routes/auth"));
app.use("/api/notes", require("./Routes/notes"));
app.use("/api/contact", require("./Routes/contact"));

app.listen(port, () => {
  console.log(`Cnotebook listening on port ${port}`);
});
