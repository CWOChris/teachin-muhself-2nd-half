const express = require("express");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");

const Cars = require("./models/Cars");

const app = express();

// Static Directory for css/js/images
app.use(express.static("public"));

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create({});

//Sets handlebars configurations
app.engine("handlebars", hbs.engine);
//Sets our app to use the handlebars engine
app.set("view engine", "handlebars");

const shopTitle = "Bobs Cars for Sale";

app.get(["/", "/cars"], async (req, res) => {
  const carData = await Cars.findAll();
  const carArrayPlain = carData.map((car) => car.get({ plain: true }));
  res.render("allcars", { shopTitle: shopTitle, allCars: carArrayPlain });
});

app.get("/car/:id", async (req, res) => {
  const carData = await Cars.findByPk(req.params.id);
  const carPlain = carData.get({ plain: true });
  console.log(carPlain);
  res.render("car", carPlain);
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Listening on PORT:" + PORT));
});
