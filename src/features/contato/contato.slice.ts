import { createSlice } from "@reduxjs/toolkit";
import type { Contato } from "./contato.type";
import { enviarMensagem } from "./contato.thunks";


export interface ContatoState {
    itens: Contato[];
    loading: boolean;
    error: string | null;
}

const initialState: ContatoState = {
    itens: [],
    loading: false,
    error: null,
};

const contatoSlice = createSlice({
    name: "contato",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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

export default contatoSlice.reducer;