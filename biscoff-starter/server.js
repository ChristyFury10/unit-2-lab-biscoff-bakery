// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;
app.set("view engine", "ejs");

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');
app.use(express.urlencoded({ extended:false }));

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
  res.render("index", {bakedGoods})

});

// show route

app.get('/bakedgoods/new', (req, res) => {
  res.render("new")
});

app.get('/bakedgoods/:id', (req, res) => {
  let item = bakedGoods[req.params.id];
  res.render("show", {item})
});

// POST
app.post('/bakedgoods', (req, res) => {
  console.log(req.body)
bakedGoods.push(req.body);
// redirect to the INDEX route for fruits
res.redirect('/bakedgoods');
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
