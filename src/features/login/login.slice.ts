import { createSlice } from "@reduxjs/toolkit";
import { loginUsuario } from "./login.thunks";
import type { UsuarioLogado } from "./login.types";

interface LoginState {
  usuario: UsuarioLogado | null;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  usuario: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout(state) {
      state.usuario = null;
      sessionStorage.removeItem("usuario");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUsuario.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUsuario.fulfilled, (state, action) => {
        state.loading = false;
        state.usuario = action.payload;
        sessionStorage.setItem("usuario", JSON.stringify(action.payload));
      })
      .addCase(loginUsuario.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Erro ao fazer login";
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
