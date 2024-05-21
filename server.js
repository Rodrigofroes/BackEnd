const express = require("express");
const cadastroRoute = require("./routes/cadastroRoute");
const homeRoute = require("./routes/homeRoute");
const loginRoute = require("./routes/loginRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./swaggerConfig');

const app = express();
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/cadastro", cadastroRoute);
app.use("/consultar", homeRoute);
app.use("/auth", loginRoute);

app.listen(8000, () => {
  console.log("Online");
});
