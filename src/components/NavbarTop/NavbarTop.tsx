import { Box, Typography, TextField, Avatar, InputAdornment, IconButton, Button, Paper, List, ListItemButton, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ModalMensagem } from "../ModalMensagem/ModalMensagem";

export const NavbarTop = () => {
    const navigate = useNavigate();
    const loginState = useSelector((state: RootState) => state.login);
    const usuarioLogado = loginState.usuario;
    const nome = usuarioLogado?.Nome ?? "Usuário";
    const foto = "teste";
    const primeiroNome = nome.split(" ")[0];
    const handleAbrirPerfil = () => { navigate("/dashboard/perfil"); };
    const [anchorMensagem, setAnchorMensagem] = useState<HTMLElement | null>(null);
    const [termoBusca, setTermoBusca] = useState("");
    const [searchAnchor, setSearchAnchor] = useState<HTMLElement | null>(null);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setSearchAnchor(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const telasDoSistema = [
        { titulo: "Dashboard", tipo: "Tela", rota: "/dashboard", descricao: "Visão geral do sistema", icone: <DashboardIcon sx={{ fontSize: 18, color: "primary.main" }} /> },
        { titulo: "Agendamentos", tipo: "Tela", rota: "/dashboard/agendamento", descricao: "Gerenciar horários e clientes", icone: <CalendarMonthIcon sx={{ fontSize: 18, color: "primary.main" }} /> },
        { titulo: "Clientes", tipo: "Tela", rota: "/dashboard/clientes", descricao: "Lista de clientes cadastrados", icone: <PeopleIcon sx={{ fontSize: 18, color: "primary.main" }} /> },
        { titulo: "Meu Perfil", tipo: "Tela", rota: "/dashboard/perfil", descricao: "Gerencie suas informações pessoais e senha", icone: <PersonIcon sx={{ fontSize: 18, color: "primary.main" }} /> },
        { titulo: "Sair para o site", tipo: "Tela", rota: "/", descricao: "Retornar à página principal do site", icone: <LogoutIcon sx={{ fontSize: 18, color: "primary.main" }} /> },
    ];

    const todoOConteudo = [...telasDoSistema];

    const resultadosFiltrados = termoBusca.trim() === "" ? [] : todoOConteudo.filter((item) =>
        item.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
        item.descricao.toLowerCase().includes(termoBusca.toLowerCase())
    );

    const handleSelecionarItem = (item: any, event: React.MouseEvent<HTMLElement>) => {
        setSearchAnchor(null);
        setTermoBusca("");
        if (item.rota) {
            navigate(item.rota);
        } else if (item.acao) {
            item.acao(event.currentTarget);
        }
    };

    return (
        <Box sx={{ height: 80, backgroundColor: "#ffffff", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between", px: 3, py: 2.5 }}>

            <Box>
                <Typography sx={{ fontWeight: 900, fontSize: 17 }}>Olá, {primeiroNome}</Typography>
                <Typography sx={{ fontSize: 12, color: "#747474" }}>Seja bem-vindo(a) ao sistema Beauty</Typography>
            </Box>

            <Box ref={searchContainerRef} sx={{ position: "relative" }}>
                <TextField
                    placeholder="Pesquisar telas, mensagens..."
                    variant="outlined"
                    size="small"
                    value={termoBusca}
                    onChange={(e) => { setTermoBusca(e.target.value); setSearchAnchor(e.currentTarget); }}
                    onClick={(e) => setSearchAnchor(e.currentTarget)}
                    sx={{ width: 320, "& .MuiOutlinedInput-root": { borderRadius: "10px", backgroundColor: "#f7f7f7", height: 40, paddingRight: "18px", "& fieldset": { border: "none", }, }, "& input": { fontSize: 13, color: "#797979", }, }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ fontSize: 18, color: "#888" }} />
                                </InputAdornment>
                            ),

                            endAdornment: (
                                <InputAdornment position="end">
                                    <Box sx={{ display: "flex", alignItems: "center", gap: "4px", color: "#777", }}>
                                        <Typography sx={{ fontSize: 12, fontWeight: 900 }}>⌘</Typography>
                                        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>K</Typography>
                                    </Box>
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                {searchAnchor && termoBusca.trim() !== "" && (
                    <Paper sx={{ position: "absolute", top: 48, left: 0, width: "100%", maxHeight: 350, overflowY: "auto", zIndex: 1300, borderRadius: 2, boxShadow: 4, p: 1, bgcolor: "background.paper" }}>
                        <List sx={{ p: 0 }}>
                            {resultadosFiltrados.length === 0 ? (
                                <Box sx={{ textAlign: "center", py: 2 }}>
                                    <Typography sx={{ fontSize: 12, color: "text.secondary" }}>Nenhum resultado encontrado</Typography>
                                </Box>
                            ) : (
                                resultadosFiltrados.map((item, index) => (
                                    <ListItemButton key={index} onClick={(e) => handleSelecionarItem(item, e)} sx={{ borderRadius: 1.5, mb: 0.5, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 0, flex: 1 }}>
                                            {item.icone}
                                            <ListItemText
                                                primary={<Typography sx={{ fontSize: 12, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.titulo}</Typography>}
                                                secondary={<Typography sx={{ fontSize: 10, color: "text.secondary", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.descricao}</Typography>}
                                            />
                                        </Box>
                                        <Box sx={{ fontSize: 9, px: 1, py: 0.3, borderRadius: 1, bgcolor: "action.selected", color: "text.secondary", fontWeight: 600, whiteSpace: "nowrap" }}>
                                            {item.tipo}
                                        </Box>
                                    </ListItemButton>
                                ))
                            )}
                        </List>
                    </Paper>
                )}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box>
                    <IconButton onClick={(event) => setAnchorMensagem(event.currentTarget)} sx={{ color: "text.primary", bgcolor: Boolean(anchorMensagem) ? "action.selected" : "transparent", "&:hover": { bgcolor: "action.hover", }, }}>
                        <ForwardToInboxIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneIcon sx={{ fontSize: 20, color: "#000" }} />
                    </IconButton>
                </Box>

                <Button onClick={handleAbrirPerfil} color="inherit" sx={{ display: "flex", alignItems: "center", gap: 1, textTransform: "none", borderRadius: 2, px: 1, py: 0.7 }}>
                    <Avatar src={foto} alt={nome} sx={{ width: 36, height: 36 }}>
                        {nome.charAt(0).toUpperCase()}
                    </Avatar>

                    <Box sx={{ textAlign: "left" }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 700 }}>{nome}</Typography>
                        <Typography sx={{ fontSize: 11, color: "#8c8c8c" }}>Meu perfil</Typography>
                    </Box>

                    <KeyboardArrowDownIcon sx={{ fontSize: 18, color: "#777" }} />
                </Button>
            </Box>

            <ModalMensagem
                anchorEl={anchorMensagem}
                onClose={() => setAnchorMensagem(null)}
            />

        </Box>
    );
};