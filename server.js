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

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
