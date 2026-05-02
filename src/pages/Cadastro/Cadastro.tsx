import { Box, TextField, Button, Typography, CircularProgress, InputAdornment, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import fundoLogin from "../../img/FundoLogin.png";
import logo from "../../img/Logo-mais-clara.png";

export const Cadastro = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ nome: "", email: "", senha: "", confirmar: "" });
    const [erroCadastro, setErroCadastro] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [localLoading, setLocalLoading] = useState(false);

    const handleCadastro = async () => {
        let novosErros = { nome: "", email: "", senha: "", confirmar: "" };
        if (!nome.trim()) novosErros.nome = "Informe o nome completo.";
        if (!email.trim()) novosErros.email = "Informe o e-mail.";
        if (senha.length < 6) novosErros.senha = "A senha deve ter no mínimo 6 caracteres.";
        setErroCadastro("");

        setErros(novosErros);

        if (Object.values(novosErros).some(x => x !== "")) return;

        setLocalLoading(true);
        try {
            // Preparação dos dados para enviar para a API
            const dadosEnvio = {
                nome: nome,
                email: email,
                senha: senha
            };
    
            const resposta = await fetch('http://li-beauty-back.test/index.php?rota=login&acao=cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosEnvio)
            });
    
            const resultado = await resposta.json();
    
            if (resultado.erro) {
                alert("Erro: " + resultado.mensagem);
            } else {
                alert("Cadastro realizado com sucesso!");
                navigate("/login");
            }
        } catch (error) {
            console.error("Erro com a comunicação com a API:", error);
            alert("Erro de conexão. Por favor, tente novamente mais tarde.");
        } finally {
            setLocalLoading(false);
        }
    }


    return (
        <Box component="main" sx={{ display: { xs: "block", md: "flex" }, height: "100vh", alignItems: "center", overflow: "hidden" }}>

            <Box sx={{ backgroundImage: `url(${fundoLogin})`, backgroundSize: "cover", backgroundPosition: "center", height: { xs: "0vh", md: "100vh" }, width: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "center", alignItems: "center", px: 3, }}>
                <Box component="img" src={logo} alt="Logo" sx={{ width: "86%" }} />
            </Box>

            <Box sx={{ width: { xs: "100%", md: "50%" }, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: theme.palette.background.paper, px: 4, }}>
                <Box sx={{ minWidth: { xs: "100%", sm: "80%", md: "75%" }, display: "flex", flexDirection: "column", gap: 2 }}>

                    <Typography variant="h4" sx={{ textAlign: "center", color: "primary.main", fontWeight: "bold", mb: 2, letterSpacing: 2, display: { xs: "none", md: "block" } }}>
                        CADASTRO
                    </Typography>

                 {erroCadastro && !localLoading && (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                         <Typography color="error" sx={{ fontSize: "14px", mt: 1 }}>
                                {erroCadastro}
                        </Typography>
                    </Box>
                )}

                    <TextField
                        label="Nome completo"
                        fullWidth
                        variant="outlined"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        error={!!erros.nome}
                        helperText={erros.nome}
                    />

                    <TextField
                        label="E-mail"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!erros.email}
                        helperText={erros.email}
                    />

                    <TextField
                        label="Senha"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        error={!!erros.senha}
                        helperText={erros.senha}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    <Button variant="contained" fullWidth onClick={handleCadastro} disabled={localLoading} sx={{ fontSize: "14px", mt: 1, py: 1.7 }}>
                        {localLoading ? <CircularProgress size={24} color="inherit" /> : "CRIAR CONTA"}
                    </Button>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography variant="body2" sx={{ position: "absolute", bottom: 26, textAlign: "center", color: theme.palette.primary.main, fontSize: { xs: "10px", md: "17px" }, }}>
                            Já possui cadastro?
                            <span onClick={() => navigate("/login")} style={{ fontWeight: "bold", cursor: "pointer", textDecoration: "underline", marginLeft: "5px" }}>
                                Fazer Login
                            </span>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};