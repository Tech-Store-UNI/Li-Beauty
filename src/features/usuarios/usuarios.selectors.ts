import type { RootState } from "../../app/store";

export const selectTodosUsuarios = (state: RootState) => state.usuario.itens;

export const selectTodosUsuariosLoading = (state: RootState) => state.login.loading;

export const selectTodosUsuariosError = (state: RootState) => state.login.error;
