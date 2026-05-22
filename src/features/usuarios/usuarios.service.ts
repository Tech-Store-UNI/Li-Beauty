import api from "../../util/api";
import type { Usuarios } from "./usuarios.type";

export const LoginService = {
    async listarUsuarios(): Promise<Usuarios[]> {
        const response = await api.post("/usuario");
        return response.data.usuarios; 
    },
};