import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AgendamentoRequest, AgendamentoResponse, } from "./agendamento.type";
import { AgendamentoService } from "./agendamento.service";
import { isErrorResponse } from "../../util/validation";

export const criarAgendamento = createAsyncThunk<AgendamentoResponse, AgendamentoRequest>("agendamento/criar",
    async (dados, { rejectWithValue }) => {
        try {
            return await AgendamentoService.criarAgendamento(dados);
        } catch (error: unknown) {
            if (isErrorResponse(error)) {
                return rejectWithValue(
                    error.erros?.[0]?.message || "Erro ao criar agendamento"
                );
            }

            return rejectWithValue(
                "Erro ao criar agendamento"
            );
        }
    }
);