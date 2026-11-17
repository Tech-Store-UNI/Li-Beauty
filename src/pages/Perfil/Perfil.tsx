import { useState } from "react";
import {
    Box,
    Typography,
    Avatar,
    Button,
    TextField,
    Divider,
    Stack,
    IconButton,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import LockResetIcon from "@mui/icons-material/LockReset";
import SaveIcon from "@mui/icons-material/Save";
import EmailIcon from "@mui/icons-material/Email";

import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

export const Perfil = () => {
    const loginState = useSelector((state: RootState) => state.login);
    const usuarioLogado = loginState.usuario;
    const [nome, setNome] = useState(usuarioLogado?.Nome ?? "");
    const [email, setEmail] = useState(usuarioLogado?.Email ?? "");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [foto, setFoto] = useState(usuarioLogado?.Foto ?? "");

    const handleAlterarFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const arquivo = event.target.files?.[0];
        if (arquivo) {
            setFoto(URL.createObjectURL(arquivo));
        }
    };

    const handleSalvar = () => {
        if (!nome.trim() || !email.trim()) return;

        if (novaSenha && novaSenha !== confirmarSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        console.log("Dados para salvar:", {
            nome,
            email,
            foto,
            novaSenha,
        });
    };

    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontSize: 25, fontWeight: 800 }}>Meu perfil</Typography>
                <Typography sx={{ fontSize: 13, color: "#777" }}>Gerencie suas informações pessoais e configurações da conta.</Typography>
            </Box>

            <Box sx={{ backgroundColor: "#fff", borderRadius: 3, border: "1px solid #eee", p: { xs: 2, md: 3 }, mb: 3 }}>
                <Typography sx={{ fontSize: 17, fontWeight: 700, mb: 3 }}>Informações pessoais</Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ alignItems: { xs: "center", sm: "center" } }}>
                    <Box sx={{ position: "relative" }}>
                        <Avatar src={foto} sx={{ width: 110, height: 110, fontSize: 40, bgcolor: "#ffcdcc" }}>
                            {nome.charAt(0).toUpperCase()}
                        </Avatar>

                        <IconButton component="label" sx={{ position: "absolute", bottom: 0, right: 0, backgroundColor: "primary.main", color: "#fff", width: 35, height: 35, "&:hover": { backgroundColor: "primary.dark" } }}>
                            <PhotoCameraIcon sx={{ fontSize: 18 }} />
                            <input type="file" hidden accept="image/*" onChange={handleAlterarFoto} />
                        </IconButton>
                    </Box>

                    <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                        <Typography sx={{ fontSize: 19, fontWeight: 800 }}>
                            {nome || "Usuário"}
                        </Typography>
                        <Typography sx={{ fontSize: 13, color: "#888" }}>
                            {email}
                        </Typography>
                        <Typography sx={{ fontSize: 11, color: "#999", mt: 1 }}>
                            Clique no ícone da câmera para alterar sua foto.
                        </Typography>
                    </Box>
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Stack spacing={2}>
                    <TextField
                        label="Nome completo"
                        value={nome}
                        disabled
                        onChange={(e) => setNome(e.target.value)}
                        fullWidth
                        slotProps={{
                            input: {
                                startAdornment: (<PersonIcon sx={{ mr: 1, color: "#999" }} />),
                            },
                        }}
                    />

                    <TextField
                        label="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        slotProps={{
                            input: { startAdornment: (<EmailIcon sx={{ mr: 1, color: "#999" }} />), }
                        }}
                    />
                </Stack>
            </Box>
            <Box sx={{ backgroundColor: "#fff", borderRadius: 3, border: "1px solid #eee", p: { xs: 2, md: 3 }, mb: 3 }}>
                <Stack sx={{ mb: 3, display: "flex", flexDirection: "row", gap: 1, alignItems: "center" }}>
                    <LockResetIcon color="primary" />
                    <Typography sx={{ fontSize: 17, fontWeight: 700 }}>Segurança da conta</Typography>
                </Stack>

                <Stack spacing={2}>
                    <TextField label="Nova senha" type="password" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} fullWidth />
                    <TextField label="Confirmar nova senha" type="password" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} fullWidth />
                </Stack>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSalvar} sx={{ px: 4, py: 1.3, borderRadius: 2, fontWeight: 700, textTransform: "none" }}>
                    Salvar alterações
                </Button>
            </Box>

        </Box>
    );
};