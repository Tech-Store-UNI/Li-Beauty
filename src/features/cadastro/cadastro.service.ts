import api from "../../util/api";
import type { CadastroRequest, CadastroResponse } from "../cadastro/cadastro.type";

export const CadastroService = {
  async cadastrar(payload: CadastroRequest): Promise<CadastroResponse> {
    const response = await api.post("/cadastrar", payload);
    return response.data;
  },
};