import * as usuariosController from '../controllers/usuarios.controller';
import express from 'express';

const router = express.Router();

router.get('/', (_, rs) => {
    usuariosController.getUsuarios()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })
});



router.delete('/:id', (req, res) => {
  usuariosController.eliminarUsuario(req, res);
});

router.post('/', (req, res) => {
  usuariosController.crearUsuario(req, res);
});

router.put('/:id', (req, res) => {
  usuariosController.actualizarUsuario(req, res);
});


export default router;