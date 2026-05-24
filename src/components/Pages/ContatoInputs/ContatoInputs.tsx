import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
} from "@mui/material";

import { getGradient } from "../../../util/gradients";
import { textGradient } from "../../../styles/StylesComun.style";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../../app/store";
import { enviarMensagem } from "../../../features/contato/contato.thunks";


export const ContatoInputs: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.mensagem);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const [alertaErro, setAlertaErro] = useState(false);

  const handleAgendamentoClick = () => {
    const tokenJWT = localStorage.getItem("token");

    if (tokenJWT) {
      navigate("/agendamento");
    } else {
      navigate("/login");
    }
  };

  const handleEnviarContato = async () => {

    const mostrarMensagem = (mensagem: string, erro = false) => {
      setAlertaMensagem(mensagem);
      setAlertaErro(erro);
      setTimeout(() => {
        setAlertaMensagem("");
      }, 4000);
    };

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      mostrarMensagem("Por favor, preencha todos os campos antes de enviar.", true);
      return;
    }

    try {
      await dispatch(
        enviarMensagem({ nome, email, mensagem, })
      ).unwrap();

      mostrarMensagem("Mensagem enviada com sucesso!");
      setNome("");
      setEmail("");
      setMensagem("");

    } catch (erro) {
      mostrarMensagem(typeof erro === "string" ? erro : "Erro ao enviar mensagem", true);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 5, }}>
        <Box sx={{ flex: 1 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 500, mb: 1, color: "#text.primary", }}>
              ENTRE EM{" "}
              <Box component="span" sx={{ background: getGradient("dark"), ...textGradient, fontWeight: 500, }}>
                CONTATO
              </Box>
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ textAlign: "justify" }}>
              Será um prazer te atender! Se você tiver dúvidas,
              quiser mais informações ou realizar um agendamento,
              entre em contato pelos canais abaixo.
            </Typography>

          </Box>

          <Box>

            <Typography variant="h4" sx={{ fontWeight: 500, background: getGradient("dark"), ...textGradient, mt: 5, }} gutterBottom>
              AGENDAMENTO
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ textAlign: "justify" }}>
              Agende seu horário de forma rápida e prática.
            </Typography>

            <Button
              onClick={handleAgendamentoClick}
              variant="contained"
              sx={{
                background: getGradient("texto-banner"),
                color: "#fff",
                borderRadius: "12px",
                px: 10,
                py: 1,
                boxShadow: "0 3px 10px #00000038",
                fontSize: 19,
                mt: 3,
              }}
            >
              Agendamento online
            </Button>

          </Box>

        </Box>

        <Box sx={{ flex: 1 }}>

          <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, }}>


              <TextField
                fullWidth
                label="Nome:"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <TextField
                fullWidth
                label="E-mail:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                fullWidth
                label="Mensagem:"
                multiline
                rows={5}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />

              <Button
                onClick={handleEnviarContato}
                disabled={loading}
                fullWidth
                sx={{
                  background: loading ? "#ccc" : getGradient("texto-banner"),
                  color: "#fff",
                  borderRadius: "12px",
                  px: 20,
                  py: 1,
                  fontSize: 19,
                  mt: 1,
                }}
              >
                {loading ? "Enviando..." : "Enviar"}
              </Button>
              {(alertaMensagem || error) && (
                <Alert severity={alertaErro ? "error" : "success"}>
                  {alertaMensagem || error}
                </Alert>
              )}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};