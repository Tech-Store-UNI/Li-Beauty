// features/login/login.slice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { Usuarios } from "./usuarios.type";
import type { UsuarioLogado } from "../login/login.types";
import { loginUsuario } from "../login/login.thunks";


interface LoginState {
  usuario: UsuarioLogado | null;
  loading: boolean;
  error: string | null;
  usuarios: Usuarios[];
  usuariosLoading: boolean;
  usuariosError: string | null;
}

const initialState: LoginState = {
  usuario: null,
  loading: false,
  error: null,
  // Valores iniciais do novo estado
  usuarios: [],
  usuariosLoading: false,
  usuariosError: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout(state) {
      state.usuario = null;
      state.usuarios = [];
      sessionStorage.removeItem("usuario");
    },
  },
  extraReducers: (builder) => {
    builder
      // ExtraReducers do LoginOriginal
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
      })
      

  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;