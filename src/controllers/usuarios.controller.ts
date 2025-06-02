import * as usuariosDao from '../dao/usuarios.dao';
import { Usuarios } from '../models/usuarios';
import { Request, Response } from 'express';

export const getUsuarios = async (): Promise<Usuarios[]> => {
    try {
        let p = await usuariosDao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}


export const eliminarUsuario = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await usuariosDao.eliminar(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }

};
export const crearUsuario = async (req: Request, res: Response) => {
  try {
    const nuevoUsuario: Usuarios = req.body;
    const usuarioCreado = await usuariosDao.insertar(nuevoUsuario);
    res.status(201).json(usuarioCreado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};


export const actualizarUsuario = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const usuarioActualizado: Usuarios = {
      ...req.body,
      Registro_Salida: req.body.Registro_Salida ?? new Date(),
      Reserva: req.body.Reserva ?? new Date()
    };

    await usuariosDao.actualizar(id, usuarioActualizado);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};