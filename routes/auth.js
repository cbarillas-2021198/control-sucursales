const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controller/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/login',[
    check('correo', 'El correo no es correcto').isEmail(),
    check('password','el password es obligatorio').not().isEmpty(),
    check('password','la contraseña').isLength({min: 6}),
    validarCampos
] ,login)

module.exports = router;