import { Box, TextField, Button, Typography, CircularProgress, InputAdornment, IconButton, } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import fundoLogin from "../../img/FundoLogin.png";
import logo from "../../img/Logo-mais-clara.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Login = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erroUsuario, setErroUsuario] = useState("");
    const [erroSenha, setErroSenha] = useState("");
    const [erroLogin, setErroLogin] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [localLoading, setLocalLoading] = useState(false);

    const handleLogin = async () => {
        setErroUsuario("");
        setErroSenha("");
        setErroLogin("");

        if (!usuario.trim()) return setErroUsuario("Informe o usuário.");
        if (!senha.trim()) return setErroSenha("Informe a senha.");

        setLocalLoading(true);

        setTimeout(() => {
            if (usuario === "admin" && senha === "1234") {
                sessionStorage.setItem("isLogged", "true");
                navigate("/dashboard");
            } else {
                setErroLogin("Usuário ou senha inválidos.");
            }

            setLocalLoading(false);
        }, 800);
    };

    return (
        <Box component="main" onKeyDown={(e) => { if (e.key === "Enter") handleLogin(); }} sx={{ display: { xs: "block", md: "flex" }, height: "100vh", alignItems: "center", overflow: "hidden", }}>
            <Box sx={{ backgroundImage: `url(${fundoLogin})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: { xs: "0vh", md: "100vh" }, width: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "center", alignItems: "center", px: 3, }}>
                <Box
                    component="img"
                    src={logo}
                    alt="Logo"
                    sx={{
                        width: "86%",
                        position: { xs: "absolute", md: "static" },
                        top: { xs: "110px", sm: "180px", md: "0px" },
                    }}
                />
            </Box>

            <Box sx={{ width: { xs: "100%", md: "50%" }, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: theme.palette.background.paper, px: 4, pt: { xs: 18, md: 0 }, }}>

                <Box sx={{ minWidth: { xs: "100%", sm: "80%", md: "75%" }, display: "flex", flexDirection: "column", gap: 2, }}>

                    <Typography variant="h4" sx={{ textAlign: "center", color: "primary.main", fontWeight: "bold", mb: 3, letterSpacing: 2, display: { xs: "none", md: "block" } }}>
                        LOGIN
                    </Typography>
                    <TextField
                        label="Nome ou E-mail"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        error={!!erroUsuario}
                        helperText={erroUsuario}
                        autoFocus
                    />

                    <TextField
                        label="Senha"
                        type={showPassword ? "text" : "password"}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        error={!!erroSenha}
                        helperText={erroSenha}
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

                    <Button variant="contained" fullWidth sx={{ py: 1.3, fontWeight: 600, height: 50 }} onClick={handleLogin} disabled={localLoading}>
                        {localLoading ? (
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <span>Entrando...</span>
                                <CircularProgress size={18} color="inherit" />
                            </Box>
                        ) : (
                            "ENTRAR"
                        )}
                    </Button>

                    {erroLogin && !localLoading && (
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography color="error" sx={{ fontSize: "14px", mt: 1 }}>
                                {erroLogin}
                            </Typography>
                        </Box>
                    )}
                </Box>

                <Typography variant="body2" sx={{ position: "absolute", bottom: 26, textAlign: "center", color: theme.palette.primary.main, fontSize: { xs: "10px", md: "17px" }, }}>
                    Ainda não possui cadastro ?
                    <span onClick={() => navigate("/cadastro")} style={{ fontWeight: "bold", cursor: "pointer", textDecoration: "underline", marginLeft: "5px" }}>
                        Criar conta
                    </span>
                </Typography>
            </Box>
        </Box>
    );
};