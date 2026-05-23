// features/login/usuarios.thunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";;
import { isErrorResponse } from "../../util/validation";
import { UsuarioService } from "./usuarios.service";
import type { Usuario } from "./usuarios.type";


export const buscarTodosUsuarios = createAsyncThunk<Usuario[]>(
    "usuario/buscarTodos",
    async (_, { rejectWithValue }) => {
        try {
            return await UsuarioService.listarUsuarios();
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