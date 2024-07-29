import { Usuario } from '../interfaces/Usuario';
import api, { verificaErroApi } from './api';

export async function cadastrarUsuario(usuario: Usuario) {
  if (!usuario) {
    return;
  }

  const usuarioJSON: string = JSON.stringify(usuario);

  try {
    const res = await api.post('/login/cad/user', usuarioJSON, {
      headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
  } catch (error) {
    return verificaErroApi(error);
  }
}

export async function detalhaUsuario(id: number) {
  if (!id) {
    return;
  }

  try {
    const res = await api.get(`/user/${id}`);
    return res.data;
  } catch (error) {
    return verificaErroApi(error);
  }
}
