import type { RootState } from "../../app/store";

export const selectUsuarioLogado = (state: RootState) => state.login.usuario;

export const selectLoginLoading = (state: RootState) => state.login.loading;

export const selectLoginError = (state: RootState) => state.login.error;
