import { createSlice } from "@reduxjs/toolkit";
import type { Mensagem } from "./contato.type";
import { buscarTodasMensagem, enviarMensagem } from "./contato.thunks";


export interface UsuarioState {
    itens: Mensagem[];
    loading: boolean;
    error: string | null;
}

const initialState: UsuarioState = {
    itens: [],
    loading: false,
    error: null,
};

const usuarioSlice = createSlice({
    name: "usuario",
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
            .addCase(enviarMensagem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(enviarMensagem.fulfilled, (state) => {
                state.loading = false;
            })

            .addCase(enviarMensagem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default usuarioSlice.reducer;