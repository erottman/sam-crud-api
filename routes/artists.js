const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/artists')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.delete('/:id', ctrl.destroy)







module.exports = router
