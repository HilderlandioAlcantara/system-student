const express = require('express');
const app = express();

app.listen(3000, console.log("server is running on port 3000"));

app.use(express.json());

const cors = require('cors');
app.use(cors());

const routes = require('./routes');
app.use(routes);

const prisma = require('./database');
prisma.$connect()
      .then(()=> console.log('datanse is connected ...'))
      .catch((error)=> console.error(error)); 

