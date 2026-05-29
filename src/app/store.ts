// store/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import loginReducer from "../features/login/login.slice";
import usuarioReducer from "../features/usuarios/usuarios.slice";
import cadastroReducer from "../features/cadastro/cadastro.slice";
import contatoReducer from "../features/contato/contato.slice";
import mensagemReducer from "../features/mensagem/mensagem.slice";
import agendamentoReducer from "../features/agendamento/agendamento.slice";

const customSessionStorage = {
    getItem: (key: string) => {
        return Promise.resolve(sessionStorage.getItem(key));
    },
    setItem: (key: string, value: string) => {
        sessionStorage.setItem(key, value);
        return Promise.resolve();
    },
    removeItem: (key: string) => {
        sessionStorage.removeItem(key);
        return Promise.resolve();
    },
};

const rootReducer = combineReducers({
    login: loginReducer,
    usuario: usuarioReducer,
    cadastro: cadastroReducer,
    mensagem: mensagemReducer,
    contato: contatoReducer,
    agendamento: agendamentoReducer,
});

const persistConfig = {
    key: "root",
    storage: customSessionStorage,
    whitelist: [
        "login",
        "usuario",
        "cadastro",
        "mensagem",
        "agendamento",
        "contato",
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;