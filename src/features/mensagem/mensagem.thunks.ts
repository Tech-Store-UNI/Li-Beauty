import { createAsyncThunk } from "@reduxjs/toolkit";
import { isErrorResponse } from "../../util/validation";
import { MensagemService } from "./mensagem.service";
import type { Mensagem } from "./mensagem.type";


export const buscarTodasMensagem = createAsyncThunk< Mensagem[]>("mensagem/buscarTodos",
    async (_, { rejectWithValue }) => {
        try {
            return await MensagemService.mensagemDados();
        } catch (error: unknown) {
            if (isErrorResponse(error)) {
                return rejectWithValue(
                    error.erros?.[0]?.message || "Erro ao carregar Mensagem contato"
                );
            }
            return rejectWithValue("Erro ao carregar Mensagem contato");
        }
    }
);


