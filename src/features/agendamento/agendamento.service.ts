import api from "../../util/api";
import type { AgendamentoRequest, AgendamentoResponse } from "./agendamento.type";


export const AgendamentoService = {
    async criarAgendamento(dados: AgendamentoRequest): Promise<AgendamentoResponse> {
        const response = await api.post("/agendamento", dados);
        return response.data;
    },
};