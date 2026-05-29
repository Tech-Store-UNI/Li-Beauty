import type { RootState } from "../../app/store";

export const selectTodasContato = (state: RootState) => state.contato.itens;

export const selectTodasContatoLoading = (state: RootState) => state.contato.loading;

export const selectTodasContatoError = (state: RootState) => state.contato.error;

