// src/components/Usuarios/DrawerUsuarios.tsx (ou ajuste o caminho conforme sua estrutura)
import React, { useState } from "react";
import { Box, Button, Drawer, IconButton, TextField, Typography, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

export type FormularioUsuario = {
    nome: string;
    email: string;
    foto?: string | null;
};

interface DrawerUsuariosProps {
    open: boolean;
    modoEdicao: boolean;
    formulario: FormularioUsuario;
    onClose: () => void;
    onChange: (campo: keyof FormularioUsuario, valor: any) => void;
    onSalvar: () => void;
}

export const DrawerUsuarios: React.FC<DrawerUsuariosProps> = ({ open, modoEdicao, formulario, onClose, onChange, onSalvar, }) => {
    const [previewFoto, setPreviewFoto] = useState<string | null>(formulario.foto || null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewFoto(imageUrl);
            onChange("foto", imageUrl);
        }
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            slotProps={{
                paper: {
                    sx: {
                        width: { xs: "100%", sm: 420 },
                        maxWidth: "100%",
                        p: 3,
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                    },
                },
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                <Typography sx={{ fontWeight: 800, fontSize: "1.2rem" }}>
                    {modoEdicao ? "Editar usuário" : "Novo usuário"}
                </Typography>
                <IconButton onClick={onClose} aria-label="Fechar">
                    <CloseIcon />
                </IconButton>
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {modoEdicao ? "Altere as informações do usuário selecionado." : "Preencha as informações para cadastrar um novo usuário."}
            </Typography>

            <Box component="form" onSubmit={(event) => { event.preventDefault(); onSalvar(); }} sx={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1.5, my: 1 }}>
                        <Avatar src={previewFoto || undefined} sx={{width: 60, height: 60, bgcolor: "grey.200", border: "1.5px solid #E88D8C"}}>
                            {!previewFoto && <PhotoCameraIcon sx={{ fontSize: 40, color: "grey.260" }} />}
                        </Avatar>

                        <Button fullWidth variant="outlined" component="label" size="large" startIcon={<PhotoCameraIcon />} sx={{ textTransform: "none", borderRadius: 2,py: 1.5,  fontSize: "1rem", }}>
                            Adicionar foto
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </Button>
                    </Box>

                    <TextField
                        label="Nome completo"
                        value={formulario.nome}
                        onChange={(event) => onChange("nome", event.target.value)}
                        fullWidth
                        required
                    />

                    <TextField
                        label="E-mail"
                        type="email"
                        value={formulario.email}
                        onChange={(event) => onChange("email", event.target.value)}
                        fullWidth
                        required
                    />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1.5, mt: 4, pt: 2, borderTop: "1px solid", borderColor: "divider" }}>
                    <Button variant="outlined" onClick={onClose} sx={{ textTransform: "none" }}>
                        Cancelar
                    </Button>

                    <Button type="submit" variant="contained" sx={{ textTransform: "none" }}>
                        {modoEdicao ? "Salvar alterações" : "Cadastrar usuário"}
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};