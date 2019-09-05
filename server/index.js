const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const dbConnection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerce'
});

dbConnection.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});

// app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/api/categories', (req, res) => {
  dbConnection.query('SELECT * FROM category', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'users list.' });
});
});

app.get('/api/product_list', (req, res) => {
  dbConnection.query('SELECT * FROM products limit 5', function (error, results, fields) {
    console.log(results);
    if (error) throw error;
    return res.send({ error: error, data: results, message: 'sepecification name list.' });
  });
});

app.post('/api/productDetails', (req, res) => {
 
  var resultData = [];
  dbConnection.query('SELECT * FROM products where id='+req.body.productId+' limit 1', function (error, results, fields) {
    // console.log(results);
    if (error) throw error;
    return res.send({ error: error, data: results, message: 'sepecification name list.' });
  });
  // return res.send(req.body.productId);
    //  return res.send({ error: error, data: req.body, message: 'sepecification name list.' });

  // dbConnection.query('SELECT * FROM products limit 5', function (error, results, fields) {
  //   console.log(results);
  //   if (error) throw error;
  //   return res.send({ error: error, data: results, message: 'sepecification name list.' });
  // });
});

app.post('/api/saveCategory',(req,res)=>{
    //return res.send({success:true});
  return res.send(req.body);
   //console.log(req);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);