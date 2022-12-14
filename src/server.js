require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3333;
const path = require('path');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./docs/swagger_output.json')

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 5
    },
}));

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const indexRoute = require('./routes/index-route');
const produtoRoute = require('./routes/produto-route');
const marcaRoute = require('./routes/marca-route');
const contatoRoute = require('./routes/contato-route');
const clienteRoute = require('./routes/cliente-route');
const enderecoRoute = require('./routes/endereco-route');
const pedidoRoute = require('./routes/pedido.route');
const pagamentoRoute = require('./routes/pagamento-route');

//Carrega as Rotas
app.use('/', indexRoute);
app.use('/cliente', clienteRoute);
app.use('/produto', produtoRoute);
app.use('/marcas', marcaRoute);
app.use('/contato', contatoRoute);
app.use('/endereco', enderecoRoute);
app.use('/cliente', clienteRoute);
app.use('/pedido', pedidoRoute);
app.use('/pagamento', pagamentoRoute)

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});