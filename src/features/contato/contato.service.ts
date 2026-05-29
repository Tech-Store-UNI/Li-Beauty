import api from "../../util/api";
import type { Contato } from "./contato.type";

export const ContatoService = {
  async enviarMensagem(dados: Omit<Contato, "id">) {
    const response = await api.post("/contato", dados);
    return response.data;
  },
};