// cadastro.slice.ts
import { createSlice } from "@reduxjs/toolkit";
import { cadastrarUsuario } from "./cadastro.thunks";

interface CadastroState {
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: CadastroState = {
  loading: false,
  error: null,
  successMessage: null,
};

const cadastroSlice = createSlice({
  name: "cadastro",
  initialState,
  reducers: {
    limparMensagem(state) {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cadastrarUsuario.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(cadastrarUsuario.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.mensagem;
      })
      .addCase(cadastrarUsuario.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Erro ao cadastrar usuário";
      });
  },
});

export const { limparMensagem } = cadastroSlice.actions;
export default cadastroSlice.reducer;