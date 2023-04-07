<<<<<<< HEAD
const express = require('express');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
=======
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Use the "public" folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage and render the "home" template
app.get('/', (req, res) => {
  res.render('home');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
>>>>>>> 5217b1f8310c41fd888446a3dffbfe3291f2fa5f
