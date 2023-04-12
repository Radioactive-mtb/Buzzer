const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequilizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("./config/connection");

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

// Set up Handlebars as the view engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Use the "public" folder for static files
app.use(express.static(path.join(__dirname, "public")));

// Define a route for the homepage and render the "home" template
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/post", (req, res) => {
  res.render("post");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
