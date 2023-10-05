const express = require("express");
const cors = require("cors");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

port = 8000;

const app = express();
//using middleware
app.use(express.json());
app.use(cors());

app.use(expressLayouts);
app.set("view engine", "ejs");

//image path link to frentend to backend
app.use("/docs", express.static(path.join(__dirname, "docs")));
app.use("/public", express.static(path.join(__dirname, "public")));

//router
app.use("/", require("./routes/studentRouter"));

app.listen(port, () => {
  console.log(`app start listnening on port ${port}`);
});
