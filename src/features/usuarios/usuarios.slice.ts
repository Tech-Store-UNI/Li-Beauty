import { createSlice } from "@reduxjs/toolkit";
import { buscarTodosUsuarios } from "../usuarios/usuarios.thunks";
import type { Usuario } from "./usuarios.type";


export interface UsuarioState {
    itens: Usuario[];
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
            .addCase(buscarTodosUsuarios.pending, (state) => {
                state.loading = true;
            })
            .addCase(buscarTodosUsuarios.fulfilled, (state, action) => {
                state.loading = false;
                state.itens = action.payload;
            })
            .addCase(buscarTodosUsuarios.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export default usuarioSlice.reducer;