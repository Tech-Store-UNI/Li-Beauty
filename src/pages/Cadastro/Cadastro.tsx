import { Box, TextField, Button, Typography, CircularProgress, InputAdornment, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import fundoLogin from "../../img/FundoLogin.png";
import logo from "../../img/Logo-mais-clara.png";
import { cadastrarUsuario } from "../../features/cadastro/cadastro.thunks";
import { selectCadastroError, selectCadastroLoading, selectCadastroSuccess } from "../../features/cadastro/cadastro.selectors";
import { limparMensagem } from "../../features/cadastro/cadastro.slice";
import { useAppDispatch, useAppSelector } from "../../app/store";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const Cadastro = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const loading = useAppSelector(selectCadastroLoading);
    const erroCadastroRedux = useAppSelector(selectCadastroError);
    const sucessoCadastro = useAppSelector(selectCadastroSuccess);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ nome: "", email: "", senha: "" });
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (sucessoCadastro) {
            alert(sucessoCadastro);
            dispatch(limparMensagem());
            navigate("/login");
        }
    }, [sucessoCadastro, dispatch, navigate]);

    const handleCadastro = async () => {
        let novosErros = { nome: "", email: "", senha: "" };
        if (!nome.trim()) novosErros.nome = "Informe o nome completo.";
        if (!email.trim()) novosErros.email = "Informe o e-mail.";
        if (senha.length < 4) novosErros.senha = "A senha deve ter no mínimo 4 caracteres.";
        setErros(novosErros);

        if (Object.values(novosErros).some(x => x !== "")) return;

        await dispatch(cadastrarUsuario({ nome, email, senha }));
    };

    const handleSair = () => {
        navigate("/");
    };

    return (
        <Box component="main" sx={{ display: { xs: "block", md: "flex" }, height: "100vh", alignItems: "center", overflow: "hidden" }}>
            <Box sx={{ backgroundImage: `url(${fundoLogin})`, position: "relative", backgroundSize: "cover", backgroundPosition: "center", height: { xs: "0vh", md: "100vh" }, width: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "center", alignItems: "center", px: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    <Button
                        onClick={handleSair}
                        variant="contained"
                        sx={{
                            position: "absolute",
                            top: 20, 
                            left: 20,
                            minWidth: 40,
                            minHeight: 40,
                            borderRadius: "50%",
                            p: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <HighlightOffIcon sx={{ color: "white", fontSize: 30 }} />
                    </Button>

                    <Box component="img" src={logo} alt="Logo" sx={{ width: "86%" }} />
                </Box>
            </Box>

            <Box sx={{ width: { xs: "100%", md: "50%" }, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: theme.palette.background.paper, px: 4 }}>
                <Box sx={{ minWidth: { xs: "100%", sm: "80%", md: "75%" }, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Typography variant="h4" sx={{ textAlign: "center", color: "primary.main", fontWeight: "bold", mb: 2, letterSpacing: 2, display: { xs: "none", md: "block" } }}>
                        CADASTRO
                    </Typography>

                    {erroCadastroRedux && (
                        <Typography color="error" sx={{ fontSize: "14px", mt: 1, textAlign: "center" }}>
                            {erroCadastroRedux}
                        </Typography>
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
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!erros.email}
                        helperText={erros.email}
                    />

                    <TextField
                        label="Senha"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        variant="outlined"
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

                    <Button variant="contained" fullWidth onClick={handleCadastro} disabled={loading} sx={{ fontSize: "14px", mt: 1, py: 1.7 }}>
                        {loading ? <CircularProgress size={24} color="inherit" /> : "CRIAR CONTA"}
                    </Button>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography variant="body2" sx={{ position: "absolute", bottom: 26, textAlign: "center", color: theme.palette.primary.main, fontSize: { xs: "10px", md: "17px" } }}>
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