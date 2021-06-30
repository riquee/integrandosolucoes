const express = require('express')
const cors = require('cors')
const clientes = require('./controllers/Clientes');
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

app.use('/clientes', clientes);

app.listen(port, () => console.log(`App listening on port: ${port}!`))