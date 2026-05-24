import api from "../../util/api";
import type { Mensagem } from "./contato.type";

export const MensagemService = {
  
  async listarMensagem(): Promise<Mensagem[]> {
    const response = await api.get("/contato");
    return response.data;
  },

  async enviarMensagem(dados: Omit<Mensagem, "id">) {
    const response = await api.post("/contato", dados);
    return response.data;
  },
};