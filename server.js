const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequilizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "secret",
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequilizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

// Set up Handlebars as the view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Use the "public" folder for static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} to create an account`
    )
  );
});
// Define a route for the homepage and render the "home" template
// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get("/profile", (req, res) => {
//   res.render("profile");
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/signup", (req, res) => {
//   res.render("signup");
// });

// app.get("/post", (req, res) => {
//   res.render("post");
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
