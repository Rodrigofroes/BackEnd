const express = require('express');
const cadastroRoute = require('./routes/cadastroRoute');
const cors = require('cors');

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());

app.use('/cadastro', cadastroRoute);

app.listen(5000, ()=>{
    console.log("Online")
});