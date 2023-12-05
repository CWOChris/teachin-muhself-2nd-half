const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create({});

app.get("/", (req, res) => {

  return res.render("index", { msg: "Hello World!" });
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);