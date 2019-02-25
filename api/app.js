const express =  require( "express");
const bodyParser =  require( "body-parser");
const routing = require( "./routes.js");

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const HOSTNAME = "127.0.0.1";
const PORT = 8000;

// Allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`server running at http://${HOSTNAME}:${PORT}/`);
});

routing(app);
