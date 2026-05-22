import { createAsyncThunk } from "@reduxjs/toolkit";
import { CadastroService } from "./cadastro.service";
import type { CadastroRequest, CadastroResponse } from "./cadastro.type";

export const cadastrarUsuario = createAsyncThunk<
  CadastroResponse,
  CadastroRequest,
  { rejectValue: string }
>(
  "cadastro/entrar",
  async (payload, { rejectWithValue }) => {
    try {
      const result = await CadastroService.cadastrar(payload);
      if (result.erro) {
        return rejectWithValue(result.mensagem);
      }
      return result;
    } catch (error: unknown) {
      return rejectWithValue("Erro ao cadastrar usuário");
    }
  }
);