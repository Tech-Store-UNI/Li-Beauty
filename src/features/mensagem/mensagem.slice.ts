import { createSlice } from "@reduxjs/toolkit";
import { buscarTodasMensagem } from "./mensagem.thunks";
import type { Mensagem } from "./mensagem.type";


export interface MensagemState {
    itens: Mensagem[];
    loading: boolean;
    error: string | null;
}

const initialState: MensagemState = {
    itens: [],
    loading: false,
    error: null,
};

const mensagemSlice = createSlice({
    name: "mensagem",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(buscarTodasMensagem.pending, (state) => {
                state.loading = true;
            })
            .addCase(buscarTodasMensagem.fulfilled, (state, action) => {
                state.loading = false;
                state.itens = action.payload;
            })
            .addCase(buscarTodasMensagem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

    },
});

export default mensagemSlice.reducer;