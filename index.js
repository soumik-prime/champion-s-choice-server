const express = require('express')
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 3000

const app = express();

// use middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send(`You are in Champion's Choice Server`)
})


app.listen(port, () => {
  console.log(`Champion's Choice Server is running in port: ${port}`);
})