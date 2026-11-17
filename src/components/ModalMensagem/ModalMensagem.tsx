import { useEffect, useState } from "react";
import { Avatar, Box, Button, CircularProgress, IconButton, InputAdornment, Popover, TextField, Typography, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MensagemService } from "../../features/mensagem/mensagem.service";
import type { Mensagem } from "../../features/mensagem/mensagem.type";

interface ModalMensagemProps {
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

export const ModalMensagem = ({ anchorEl, onClose }: ModalMensagemProps) => {
    const open = Boolean(anchorEl);
    const [filtroData, setFiltroData] = useState("");
    const [mensagens, setMensagens] = useState<Mensagem[]>([]);
    const [pesquisa, setPesquisa] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");
    const [limiteExibicao, setLimiteExibicao] = useState(3);

    useEffect(() => {
        if (!open) {
            setLimiteExibicao(3);
            return;
        }
        const buscarMensagens = async () => {
            try {
                setCarregando(true);
                setErro("");
                const dados = await MensagemService.mensagemDados();
                setMensagens(dados);
            } catch {
                setErro("Não foi possível carregar as mensagens.");
            } finally {
                setCarregando(false);
            }
        };
        buscarMensagens();
    }, [open]);

    useEffect(() => {
        setLimiteExibicao(3);
    }, [pesquisa, filtroData]);

    const formatarData = (data: string) => {
        if (!data) return "Data não informada";
        const [dataParte, horaParte] = data.split(" ");
        if (!dataParte) return "Data não informada";
        const [ano, mes, dia] = dataParte.split("-");
        return `${dia}/${mes}/${ano} às ${horaParte?.slice(0, 5) || "00:00"}`;
    };

    const handleResponder = (email: string) => {
        if (!email?.trim()) return;
        window.location.href = `mailto:${email}`;
    };

    const handleWhatsApp = (telefone: string) => {
        const numero = telefone.replace(/\D/g, "");
        if (!numero) return;
        const numeroCompleto = numero.startsWith("55") ? numero : `55${numero}`;
        window.open(`https://wa.me/${numeroCompleto}`, "_blank", "noopener,noreferrer");
    };

    const mensagensFiltradas = mensagens.filter((mensagem) => {
        const termo = pesquisa.toLowerCase();
        const matchTexto =
            mensagem.Nome.toLowerCase().includes(termo) ||
            mensagem.Email.toLowerCase().includes(termo) ||
            mensagem.Mensagem.toLowerCase().includes(termo) ||
            (mensagem.Telefone || "").toLowerCase().includes(termo);
        const matchData = filtroData ? mensagem.DtEnv?.startsWith(filtroData) : true;
        return matchTexto && matchData;
    });

    const mensagensPaginadas = mensagensFiltradas.slice(0, limiteExibicao);
    const temMaisMensagens = limiteExibicao < mensagensFiltradas.length;
    const handleVerMais = () => {
        setLimiteExibicao((prev) => prev + 3);
    };

    return (
        <Popover open={open} anchorEl={anchorEl} onClose={onClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }} slotProps={{ paper: { sx: { width: 440, maxWidth: "calc(100vw - 24px)", maxHeight: 520, mt: 3, ml: 23, borderRadius: 2.5, bgcolor: "background.paper", color: "text.primary", border: 1, borderColor: "divider", boxShadow: 6, overflow: "hidden" } } }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, py: 1.8, borderBottom: 1, borderColor: "divider" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                    <EmailOutlinedIcon sx={{ color: "primary.main", fontSize: 22 }} />
                    <Box>
                        <Typography sx={{ fontSize: 14, fontWeight: 700 }}>Mensagens</Typography>
                        <Typography sx={{ fontSize: 11, color: "text.secondary" }}>{mensagens.length} mensagens recebidas</Typography>
                    </Box>
                </Box>
                <IconButton size="small" onClick={onClose} sx={{ color: "text.secondary" }}>
                    <CloseIcon sx={{ fontSize: 19 }} />
                </IconButton>
            </Box>

            <Box sx={{ px: 2, py: 1.5, display: "flex", flexDirection: "row", gap: 1 }}>
                <TextField 
                    size="small"
                    placeholder="Pesquisar mensagem..."
                    value={pesquisa}
                    onChange={(event) => setPesquisa(event.target.value)}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2, bgcolor: "action.hover", fontSize: 12 } }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <TextField 
                        type="date"
                        size="small"
                        value={filtroData}
                        onChange={(event) => setFiltroData(event.target.value)}
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{ width: 140,"& .MuiOutlinedInput-root": { borderRadius: 2, bgcolor: "action.hover", fontSize: 12 } }}
                    />
                    {filtroData && (
                        <Button size="small" onClick={() => setFiltroData("")} sx={{ minWidth: "auto", fontSize: 10, textTransform: "none", whiteSpace: "nowrap" }}>
                            Limpar
                        </Button>
                    )}
                </Box>
            </Box>

            <Box sx={{ maxHeight: 365, overflowY: "auto", px: 1.5, pb: 1.5 }}>
                {carregando ? (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
                        <CircularProgress size={25} />
                    </Box>
                ) : erro ? (
                    <Typography sx={{ textAlign: "center", color: "error.main", fontSize: 12, py: 4 }}>
                        {erro}
                    </Typography>
                ) : mensagensFiltradas.length === 0 ? (
                    <Box sx={{ textAlign: "center", py: 4 }}>
                        <EmailOutlinedIcon sx={{ fontSize: 30, color: "text.disabled", mb: 1 }} />
                        <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
                            Nenhuma mensagem encontrada.
                        </Typography>
                    </Box>
                ) : (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        {mensagensPaginadas.map((mensagem) => (
                            <Box key={mensagem.id} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2, p: 1.3, borderRadius: 2, border: 1, borderColor: "divider", transition: "0.2s", "&:hover": { bgcolor: "action.hover" } }}>
                                <Avatar sx={{ width: 36, height: 36, bgcolor: "primary.main", color: "primary.contrastText", fontSize: 14, fontWeight: 700 }}>
                                    {mensagem.Nome.charAt(0).toUpperCase()}
                                </Avatar>

                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
                                        <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                                            {mensagem.Nome}
                                        </Typography>
                                        <Typography sx={{ fontSize: 10, color: "text.disabled", display: "flex", alignItems: "center", gap: 0.5, whiteSpace: "nowrap" }}>
                                            <ScheduleIcon sx={{ fontSize: 12 }} />
                                            {formatarData(mensagem.DtEnv)}
                                        </Typography>
                                    </Box>

                                    <Typography sx={{ fontSize: 10, color: "text.secondary", mb: 0.5, overflowWrap: "anywhere" }}>
                                        {mensagem.Email || "Sem e-mail"}
                                    </Typography>

                                    {mensagem.Telefone?.trim() && (
                                        <Typography sx={{ fontSize: 10, color: "text.secondary", mb: 0.5 }}>
                                            Telefone: {mensagem.Telefone}
                                        </Typography>
                                    )}

                                    <Typography sx={{ fontSize: 11, color: "text.secondary", overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflowWrap: "anywhere", mt: 0.5 }}>
                                        {mensagem.Mensagem}
                                    </Typography>

                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mt: 1 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                            {mensagem.Respondida === true ? (
                                                <>
                                                    <DoneAllIcon sx={{ fontSize: 15, color: "success.main" }} />
                                                    <Typography sx={{ fontSize: 10, color: "success.main", fontWeight: 600 }}>
                                                        Respondida
                                                    </Typography>
                                                </>
                                            ) : mensagem.Respondida === false ? (
                                                <>
                                                    <ScheduleIcon sx={{ fontSize: 14, color: "warning.main" }} />
                                                    <Typography sx={{ fontSize: 10, color: "warning.main", fontWeight: 600 }}>
                                                        Pendente
                                                    </Typography>
                                                </>
                                            ) : (
                                                <Typography sx={{ fontSize: 10, color: "text.disabled" }}>
                                                    Sem status
                                                </Typography>
                                            )}
                                        </Box>

                                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                            {mensagem.Telefone?.trim() && (
                                                <Button size="small" onClick={() => handleWhatsApp(mensagem.Telefone!)} startIcon={<WhatsAppIcon sx={{ fontSize: 16 }} />} sx={{ minWidth: "auto", fontSize: 10, fontWeight: 600, textTransform: "none", color: "#25D366", p: 0.5, "&:hover": { bgcolor: "rgba(37, 211, 102, 0.08)" } }}>
                                                    WhatsApp
                                                </Button>
                                            )}

                                            {mensagem.Email?.trim() && (
                                                <Button size="small" onClick={() => handleResponder(mensagem.Email)} startIcon={<ReplyIcon sx={{ fontSize: 14 }} />} sx={{ minWidth: "auto", fontSize: 10, fontWeight: 600, textTransform: "none", color: "primary.main", p: 0.5 }} >
                                                    Responder
                                                </Button>
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}

                        {temMaisMensagens && (
                            <Button fullWidth onClick={handleVerMais} endIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ mt: 1, py: 1, fontSize: 11, fontWeight: 600, textTransform: "none", bgcolor: "action.hover", borderRadius: 2, color: "primary.main", "&:hover": { bgcolor: "action.selected" } }}>
                                Ver mais mensagens
                            </Button>
                        )}
                    </Box>
                )}
            </Box>

            <Box sx={{ px: 2, py: 1.2, borderTop: 1, borderColor: "divider", bgcolor: "action.hover" }}>
                <Typography sx={{ fontSize: 10, color: "text.secondary", textAlign: "center" }}>
                    Exibindo {mensagensPaginadas.length} de {mensagensFiltradas.length} mensagens
                </Typography>
            </Box>
        </Popover>
    );
};