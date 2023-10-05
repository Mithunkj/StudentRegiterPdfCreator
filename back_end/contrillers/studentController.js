const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const options = require("../helpers/options");

const registr = async (req, res, next) => {
  try {
    const basePath = `${req.protocol}://${req.get("host")}/public`;
    
    if (req.file == undefined) {
      console.log("undefined file 11");
      res.send({ data: "Required image" });
    } else {
      const html = fs.readFileSync(
        path.join(__dirname, "../views/template.html"),
        "utf-8"
      );

      const filename = Math.floor(1000 + Math.random() * 9000) + `${req.body.name}` + ".pdf";

      const obj = {
        name: req.body.name,
        mobile: req.body.mobile,
        logo: `${basePath}/logo.png`,
        photo: `${basePath}/${req.file.filename}`,
        email: req.body.email,
        qulification: req.body.qulification,
        address: req.body.address,
      };

      const document = {
        html: html,
        data: {
          students: obj,
        },
        path: "./docs/" + filename,
      };

      pdf
        .create(document, options)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });

      const filepath = "http://localhost:8000/docs/" + filename;

      res.render("download", {
        path: filepath,
      });
      res.send({ data: filepath });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { registr };
