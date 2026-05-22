import api from "../../util/api";
import type { LoginRequest, UsuarioLogado } from "./login.types";

export const LoginService = {
  async login(payload: LoginRequest): Promise<UsuarioLogado> {
    const response = await api.post("/login", payload);
    return response.data.usuario;
  },
};

