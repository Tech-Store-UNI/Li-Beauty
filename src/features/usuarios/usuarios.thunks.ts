// features/login/usuarios.thunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";;
import { isErrorResponse } from "../../util/validation";
import type { Usuarios } from "./usuarios.type";
import { LoginService } from "./usuarios.service";

export const fetchUsuarios = createAsyncThunk<
  Usuarios[],
  void,
  { rejectValue: string }
>(
  "login/fetchUsuarios",
  async (_, { rejectWithValue }) => {
    try {
      return await LoginService.listarUsuarios();
    } catch (error: unknown) {
      if (isErrorResponse(error)) {
        return rejectWithValue(
          error.erros?.[0]?.message || "Erro ao buscar a lista de usuários"
        );
      }
      return rejectWithValue("Erro ao buscar a lista de usuários");
    }
  }
);