import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Mensagem } from "./contato.type";
import { isErrorResponse } from "../../util/validation";
import { MensagemService } from "./contato.service";

export const buscarTodasMensagem = createAsyncThunk<Mensagem[]>(
    "usuario/buscarTodos",
    async (_, { rejectWithValue }) => {
        try {
            return await MensagemService.listarMensagem();
        } catch (error: unknown) {
            if (isErrorResponse(error)) {
                return rejectWithValue(
                    error.erros?.[0]?.message || "Erro ao carregar usuários"
                );
            }
            return rejectWithValue("Erro ao carregar usuários");
        }
    }
);


export const enviarMensagem = createAsyncThunk(
  "usuario/enviarMensagem",
  async (
    dados: Omit<Mensagem, "id">,
    { rejectWithValue }
  ) => {
    try {
      return await MensagemService.enviarMensagem(dados);
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