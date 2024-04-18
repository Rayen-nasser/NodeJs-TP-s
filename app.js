const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


const checkWorkingTime = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.send('Sorry, the website is not available now.');
  }
};

app.use(checkWorkingTime);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.use(express.static('styles'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
