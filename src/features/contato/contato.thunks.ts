import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Contato } from "./contato.type";
import { isErrorResponse } from "../../util/validation";
import { ContatoService } from "./contato.service";


export const enviarMensagem = createAsyncThunk(
  "usuario/enviarMensagem",
  async (
    dados: Omit<Contato, "id">,
    { rejectWithValue }
  ) => {
    try {
      return await ContatoService.enviarMensagem(dados);
    } catch (error: unknown) {
      if (isErrorResponse(error)) {
        return rejectWithValue(
          error.erros?.[0]?.message || "Erro ao enviar mensagem"
        );
      }

      return rejectWithValue("Erro ao enviar mensagem");
    }
  }
);