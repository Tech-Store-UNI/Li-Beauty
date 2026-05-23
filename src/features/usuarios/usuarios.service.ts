// usuarios.service.ts
import api from "../../util/api";
import type { Usuario, UsuariosResponse } from "./usuarios.type";

export const UsuarioService = {
  async listarUsuarios(): Promise<Usuario[]> {
    const response = await api.post<UsuariosResponse>("/usuario");
    return response.data.usuarios;
  },
};