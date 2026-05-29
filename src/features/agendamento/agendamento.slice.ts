import { createSlice } from "@reduxjs/toolkit";
import { criarAgendamento } from "./agendamento.thunks";
import type { AgendamentoRequest } from "./agendamento.type";

interface AgendamentoState {
    itens: AgendamentoRequest[];
    loading: boolean;
    error: string | null;
}

const initialState: AgendamentoState = {
    itens: [],
    loading: false,
    error: null,
};

const agendamentoSlice = createSlice({
    name: "agendamento",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(criarAgendamento.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(criarAgendamento.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(criarAgendamento.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload as string;
            });
    },
});

export default agendamentoSlice.reducer;