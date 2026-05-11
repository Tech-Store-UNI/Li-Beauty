import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper, Alert } from "@mui/material";
import { getGradient } from "../../../util/gradients";
import { textGradient } from "../../../styles/StylesComun.style";
import { useNavigate } from "react-router-dom";

export const ContatoInputs: React.FC = () => {

 const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [alertaMensagem, setAlertaMensagem] = useState("");
  const [alertaErro, setAlertaErro] = useState(false);
  const [loading, setLoading] = useState(false);

 const handleAgendamentoClick = () => {
        const tokenJWT = localStorage.getItem("token");

        if (tokenJWT) {
            navigate("/agendamento");
        } else {
            navigate("/login");
        }
    }

  const handleEnviarContato = async () => {
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      setAlertaErro(true);
      setAlertaMensagem("Por favor, preencha todos os campos antes de enviar.");
      return;
    }
    setLoading(true);
  
  try {
    const dadosEnvio = {
      nome: nome,
      email: email,
      mensagem: mensagem
    };

    const resposta = await fetch ('http://li-beauty-back.test/index.php?rota=contato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosEnvio)
    });

    const resultado = await resposta.json();

    if (resultado.erro) {
      setAlertaErro(true);
      setAlertaMensagem(resultado.mensagem);
    } else {
      setAlertaErro(false);
      setAlertaMensagem(resultado.mensagem);
      setNome("");
      setEmail("");
      setMensagem("");
    }
  } catch (erro) {
    console.error("Erro de requisição", erro);
    setAlertaErro(true);
    setAlertaMensagem("Erro de conexão com o Servidor. Tente novamente mais tarde!");
  } finally {
    setLoading(false);
  }
}

  return (
    <Box sx={{ p: 4, }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 5, }}>
        <Box sx={{ flex: 1 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 500, mb: 1, color: '#text.primary' }}>
              ENTRE EM <Box component="span" sx={{ background: getGradient("dark"), ...textGradient, fontWeight: 500 }}>CONTATO</Box>
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ textAlign: "justify" }}>
              Será um prazer te atender! Se você tiver dúvidas, quiser mais
              informações ou realizar um agendamento, entre em contato pelos
              canais abaixo. Estamos disponíveis para oferecer todo o suporte
              necessário e garantir a melhor experiência desde o primeiro
              contato.

            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, background: getGradient("dark"), ...textGradient, mt: 5 }}
              gutterBottom
            >
              AGENDAMENTO
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ textAlign: "justify" }}>
              Agende seu horário de forma rápida e prática. Entre em contato pelo
              WhatsApp ou redes sociais e escolha o melhor dia para você.
            </Typography>

            <Button onClick={handleAgendamentoClick} variant="contained" sx={{ background: getGradient('texto-banner'), color: "#fff", borderRadius: "12px", px: 10, py: 1, boxShadow: "0 3px 10px #00000038", fontSize: 19, mt: 3 }}>
              Agendamento online
            </Button>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

              {alertaMensagem && (
                <Alert severity={alertaErro ? "error" : "success"}>
                  {alertaMensagem}
                </Alert>
              )}

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

              <Button onClick={handleEnviarContato} disabled={loading} sx={{ background: loading ? "#ccc" : getGradient('texto-banner'), color: "#fff", borderRadius: "12px", px: 20, py: 1., fontSize: 19, mt: 1 }} fullWidth>
                {loading ? "Enviando..." : "Enviar"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

