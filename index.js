const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require("./schema/config");
const axios = require('axios');
const chalk = require('chalk');
const cfonts = require('cfonts');
const cheerio = require("cheerio");
const docs = require("./schema/endpoint");
const api = require("./router/api");
const qs = require('qs');
const fs = require('fs');
const Spinnies = require('spinnies');
const util = require('util');
const swaggerUi = require("swagger-ui-express");
const { SwaggerTheme, SwaggerThemeNameEnum } = require('swagger-themes');
const anim = require('./lib/print');
const danz = require("d-scrape");

const app = express();
const dev = '@Rulxzz';
const theme = new SwaggerTheme();

app.enable("trust proxy");
app.set("json spaces", 2);
app.use("/api", api)
app.use(express.static(path.join(__dirname, '/resources')));

// Middleware untuk CORS
app.use(cors());

app.get("/", (req, res) => {
  res.render("index")
})


app.use("/playground", swaggerUi.serve, swaggerUi.setup(docs.swaggerDocument, docs.options));

// Handle 404 error
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Handle error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server

app.listen(config.options.port, () => {
console.log(chalk.cyan('Simple Rest API by @Irull2nd'))
    anim('Server is running on http://localhost:' + config.options.port);
});