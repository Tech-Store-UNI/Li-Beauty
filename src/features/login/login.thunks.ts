import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginService } from "./login.service";
import type {  LoginRequest, UsuarioLogado } from "./login.types";
import { isErrorResponse } from "../../util/validation";



export const loginUsuario = createAsyncThunk<
  UsuarioLogado,
  LoginRequest,
  { rejectValue: string }
>(
  "login/entrar",
  async (payload, { rejectWithValue }) => {
    try {
      return await LoginService.login(payload);
    } catch (error: unknown) {
      if (isErrorResponse(error)) {
        return rejectWithValue(
          error.erros?.[0]?.message || "Usuário ou senha inválidos"
        );
      }
      return rejectWithValue("Usuário ou senha inválidos");
    }
  }
);

