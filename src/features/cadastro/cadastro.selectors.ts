// cadastro.selectors.ts
import type { RootState } from "../../app/store";

export const selectCadastroLoading = (state: RootState) => state.cadastro.loading;
export const selectCadastroError = (state: RootState) => state.cadastro.error;
export const selectCadastroSuccess = (state: RootState) => state.cadastro.successMessage;