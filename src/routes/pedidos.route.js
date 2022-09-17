const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidos-controller');

router.post('/', controller.create);

router.put('/:id', controller.updateById);

router.delete('/id/:id', controller.deleteById);

router.get('/id/:id', controller.selectById);

router.get('/id/:id', controller.selectByClienteId);

router.get('/id/:id', controller.selectByPedidoId);

router.get('/', controller.selectAll);

module.exports = router;