const app = require("express")();
const { get_prices } = require("./scraper.js");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  get_prices(res);
});

app.get("/prices", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  get_prices(res);
});

app.listen(port, () => {
  console.log("listening on port: " + port);
});
