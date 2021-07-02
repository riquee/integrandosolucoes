const express = require('express')
const cors = require('cors')
const clientes = require('./controllers/Clientes');
const usuarios = require('./controllers/Usuarios');
const errMiddleware = require('./middlewares/errMiddleware');
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.use('/clientes', clientes);
app.use('/usuarios', usuarios);

app.use(errMiddleware);

app.listen(port, () => console.log(`App listening on port: ${port}!`))