const express = require("express");

// const cors = require("cors");

const app = express();

// const corsOptions = {
//   origin: "http://localhost:8081",
// };
// app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Working!" });
});

require("./routes/index")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
