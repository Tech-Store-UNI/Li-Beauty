import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    TextField,
    Box,
    Typography,
    InputAdornment,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";
import { MensagemService } from "../../features/mensagem/mensagem.service";
import type { Mensagem } from "../../features/mensagem/mensagem.type";

interface GlobalSearchProps {
    open: boolean;
    onClose: () => void;
    onOpenMensagens: (event: HTMLElement) => void;
}

export const GlobalSearchModal = ({ open, onClose, onOpenMensagens }: GlobalSearchProps) => {
    const [termoBusca, setTermoBusca] = useState("");
    const [mensagens, setMensagens] = useState<Mensagem[]>([]);
    const navigate = useNavigate();

    // Buscar mensagens em tempo real para aparecerem na pesquisa
    useEffect(() => {
        if (!open) return;
        const carregarMensagens = async () => {
            try {
                const dados = await MensagemService.mensagemDados();
                setMensagens(dados);
            } catch {
                setMensagens([]);
            }
        };
        carregarMensagens();
    }, [open]);

    const telasDoSistema = [
        { titulo: "Dashboard", tipo: "Tela", rota: "/dashboard", descricao: "Visão geral do sistema", icone: <DashboardIcon sx={{ fontSize: 18, color: "primary.main" }} /> },
        { titulo: "Agendamentos", tipo: "Tela", rota: "/dashboard/agendamento", descricao: "Gerenciar horários e clientes", icone: <CalendarMonthIcon sx={{ fontSize: 18, color: "primary.main" }} /> },
        { titulo: "Clientes", tipo: "Tela", rota: "/dashboard/clientes", descricao: "Lista de clientes cadastrados", icone: <PeopleIcon sx={{ fontSize: 18, color: "primary.main" }} /> },
        { titulo: "Meu Perfil", tipo: "Tela", rota: "/dashboard/perfil", descricao: "Gerencie suas informações pessoais e senha", icone: <PersonIcon sx={{ fontSize: 18, color: "primary.main" }} /> },
    ];

    const itensMensagens = mensagens.map((msg) => ({
        titulo: `Mensagem de: ${msg.Nome}`,
        tipo: "Mensagem",
        descricao: `${msg.Email} - ${msg.Mensagem}`,
        icone: <EmailOutlinedIcon sx={{ fontSize: 18, color: "secondary.main" }} />,
        acao: (e: HTMLElement) => {
            onClose();
            onOpenMensagens(e);
        }
    }));

    const todoOConteudo = [...telasDoSistema, ...itensMensagens];

    // Filtra conforme o usuário vai digitando
    const resultadosFiltrados = todoOConteudo.filter((item) =>
        item.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
        item.descricao.toLowerCase().includes(termoBusca.toLowerCase())
    );

    const handleSelecionarItem = (item: any, event: React.MouseEvent<HTMLElement>) => {
        onClose();
        setTermoBusca("");
        if (item.rota) {
            navigate(item.rota);
        } else if (item.acao) {
            item.acao(event.currentTarget);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" slotProps={{ paper: { sx: { borderRadius: 3, p: 1 } } }}>
            <DialogContent sx={{ p: 1 }}>
                <TextField
                    autoFocus
                    fullWidth
                    placeholder="Digite para buscar telas, páginas ou mensagens..."
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                    sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: 2, bgcolor: "action.hover" } }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "text.secondary" }} />
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                <List sx={{ maxHeight: 380, overflowY: "auto", p: 0 }}>
                    {resultadosFiltrados.length === 0 ? (
                        <Box sx={{ textAlign: "center", py: 4 }}>
                            <Typography sx={{ fontSize: 13, color: "text.secondary" }}>Nenhum resultado encontrado para "{termoBusca}"</Typography>
                        </Box>
                    ) : (
                        resultadosFiltrados.map((item, index) => (
                            <ListItemButton
                                key={index}
                                onClick={(e) => handleSelecionarItem(item, e)}
                                sx={{ borderRadius: 2, mb: 0.5, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1.5 }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0, flex: 1 }}>
                                    {item.icone}
                                    <ListItemText
                                        primary={<Typography sx={{ fontSize: 13, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.titulo}</Typography>}
                                        secondary={<Typography sx={{ fontSize: 11, color: "text.secondary", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.descricao}</Typography>}
                                    />
                                </Box>
                                <Box sx={{ fontSize: 10, px: 1, py: 0.5, borderRadius: 1, bgcolor: "action.selected", color: "text.secondary", fontWeight: 600, whiteSpace: "nowrap" }}>
                                    {item.tipo}
                                </Box>
                            </ListItemButton>
                        ))
                    )}
                </List>
            </DialogContent>
        </Dialog>
    );
};