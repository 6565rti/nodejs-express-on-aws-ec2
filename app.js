const express = require('express');
const app = express();
const port =3000;

app.get('/', (req,res) => {

  res.send("<H1>Hello! Welcome to Nodejs Express</H1> <H4>Message:Success</H4> <p>Version:4.17.1</p>");
})

app.get('/products', (req,res) => {

   res.send([
     {
       "product_id":100,
       "product_price":"20.00"
     },
     {
       "product_id":101,
       "product_price":"25.00"
     }
   ])
})


app.listen(port,()=>{
  console.log(`Demo app is up and listening at port ${port}`);
})
