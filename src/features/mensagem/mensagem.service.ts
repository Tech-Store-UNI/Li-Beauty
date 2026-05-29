import api from "../../util/api";
import type { Mensagem } from "./mensagem.type";

export const MensagemService = {
  async mensagemDados(): Promise<Mensagem []> {
    const response = await api.get("/mensagem");
    return response.data.mensagens;
  },
};

