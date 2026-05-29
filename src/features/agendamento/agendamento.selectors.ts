import type { RootState } from "../../app/store";

export const selectAgendamentoitens = (state: RootState) => state.agendamento.itens;

export const selectAgendamentoLoading = (state: RootState) => state.agendamento.loading;

export const selectAgendamentoError = (state: RootState) => state.agendamento.error;