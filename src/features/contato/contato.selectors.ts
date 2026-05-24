import type { RootState } from "../../app/store";

export const selectTodasMensagem = (state: RootState) => state.mensagem.itens;

export const selectTodasMensagemLoading = (state: RootState) => state.mensagem.loading;

export const selectTodasMensagemError = (state: RootState) => state.mensagem.error;

