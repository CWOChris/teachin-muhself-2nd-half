const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const carsForSale = require('./models/carsForSale.json');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create({});

app.get("/", (req, res) => {
  const lastCarObj = carsForSale[carsForSale.length - 1];
  return res.render("cars", { shopTitle: shopTitle, carsForSale, lastCar });
});

app.get("/cars", (req, res) => {
  return res.render("index", { msg: "Hello World!" });
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

