import {Box,Typography,TextField,MenuItem,Button,IconButton,Paper,} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { FormDataProps } from "../ModalAgendamento";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import theme from "../../../../../theme";
import { CATEGORIAS, HORARIOS, SERVICOS } from "./util/util";

dayjs.locale("pt-br");

interface Props {
    formData: FormDataProps;
    setFormData: any;
    nextStep: () => void;
    onClose: () => void;
}

export const StepOneAgendamento = ({ formData, setFormData, nextStep, onClose, }: Props) => {

    const servicos = SERVICOS[formData.categoria as keyof typeof SERVICOS] || [];
    const isFormValid = formData.categoria && formData.servico && formData.data && formData.hora;

    return (
        <Box sx={{ width: "100%", maxWidth: 680, background: "#fff", borderRadius: "10px", p: 4, position: "relative", height: 570 }}>
            <IconButton onClick={onClose} sx={{ position: "absolute", right: 16, top: 16 }}>
                <CloseIcon />
            </IconButton>

            <Typography sx={{ textAlign: "center", fontSize: "1.5rem", mb: 2, }}>
                AGENDAMENTO
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

                <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                    <Box sx={{ flex: 3 }}>
                        <TextField
                            select
                            fullWidth
                            label="Selecionar Categoria"
                            value={formData.categoria}
                            onChange={(e) => setFormData({ ...formData, categoria: e.target.value, servico: "", valor: "" })}
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                        >
                            {CATEGORIAS.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                        </TextField>
                    </Box>

                    <Box sx={{ flex: 3 }}>
                        <TextField
                            select
                            fullWidth
                            label="Tipo de serviço"
                            value={formData.servico}
                            onChange={(e) => {
                                const selected = servicos.find(s => s.nome === e.target.value);
                                setFormData({ ...formData, servico: e.target.value, valor: selected?.valor || "" });
                            }}
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                        >
                            {servicos.map((item) => <MenuItem key={item.nome} value={item.nome}>{item.nome}</MenuItem>)}
                        </TextField>
                    </Box>

                    <Box sx={{ flex: 1.4 }}>
                        <Paper elevation={0} sx={{
                            height: "56px", display: "flex", alignItems: "center", justifyContent: "center",
                            background: "#fafafa", borderRadius: "10px", border: "1px solid #E0E0E0"
                        }}>
                            <Typography sx={{ color: "#363636" }}>
                                {formData.valor || "R$ 00, 00"}
                            </Typography>
                        </Paper>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Box sx={{ flex: 10, border: "1px solid #EA9999", borderRadius: "15px", p: 1, overflow: "hidden", minWidth: "490px" }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                                <DateCalendar
                                    value={formData.data}
                                    onChange={(newValue) =>
                                        setFormData({ ...formData, data: newValue })
                                    }
                                    sx={{
                                        width: "100%",
                                        height: "300px",

                                        "& .MuiDayCalendar-monthContainer": {
                                            width: "100%",
                                        },

                                        "& .MuiDayCalendar-weekContainer": {
                                            justifyContent: "space-evenly",
                                        },

                                        "& .MuiPickersCalendarHeader-root": {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            paddingLeft: "16px",
                                            paddingRight: "8px",
                                            marginBottom: "12px",
                                        },

                                        "& .MuiPickersCalendarHeader-labelContainer": {
                                            margin: 0,
                                            fontSize: "1.2rem",
                                            fontWeight: 700,
                                            textTransform: "capitalize",
                                            color: "#78373E",
                                        },

                                        "& .MuiPickersArrowSwitcher-root": {
                                            display: "flex",
                                            gap: "4px",
                                        },

                                        "& .MuiPickersArrowSwitcher-button": {
                                            color: "#fff",
                                            backgroundColor: "#EA9999",
                                            width: "38px",
                                            height: "38px",
                                            "&:hover": {
                                                backgroundColor: "#d88383",
                                            },
                                        },

                                        "& .MuiDayCalendar-header": {
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            width: "100%",
                                        },

                                        "& .MuiDayCalendar-weekDayLabel": {
                                            fontWeight: 600,
                                            color: "#78373E",
                                            width: "40px",
                                        },

                                        "& .MuiPickersDay-root": {
                                            width: "40px",
                                            height: "40px",
                                            fontSize: "0.95rem",
                                            margin: "0 6px",
                                            "--PickerDay-horizontalMargin": "6px",
                                            "--PickerDay-size": "40px",
                                        },

                                        "& .MuiPickersDay-root.Mui-selected": {
                                            backgroundColor: "#EA9999",
                                            "&:hover": {
                                                backgroundColor: "#d88383",
                                            },
                                        },

                                        "& .MuiPickersDay-today": {
                                            borderColor: "#EA9999",
                                        },
                                    }}
                                />
                            </LocalizationProvider>
                        </Box>

                        <Box sx={{
                            flex: 6,
                            border: "1px solid #EA9999",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1,
                            py: 4,
                            px: 2,
                            minWidth: "110px",
                            overflowY: "auto",
                            "&::-webkit-scrollbar": { width: "1px" },
                            "&::-webkit-scrollbar-thumb": { background: "#EA9999", borderRadius: "10px" }
                        }}>
                            {HORARIOS.map((hora) => {
                                const active = formData.hora === hora;
                                return (
                                    <Button
                                        key={hora}
                                        fullWidth
                                        onClick={() => setFormData({ ...formData, hora })}
                                        sx={{
                                            borderRadius: "20px",
                                            minHeight: "35px",
                                            py: 0.5,

                                            background: active ? theme.palette.primary.main : "transparent",
                                            color: active ? "#fff" : "#666",
                                            fontWeight: active ? 700 : 400,
                                            "&:hover": { background: active ? theme.palette.primary.main : "#fdeeee" }
                                        }}
                                    >
                                        {hora}
                                    </Button>
                                );
                            })}
                        </Box>

                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", border: "1px solid #EA9999", borderRadius: "20px", overflow: "hidden", height: 23 }}>
                        <Box sx={{ px: 3, background: theme.palette.primary.main, color: "#fff", fontWeight: 700, fontSize: 14 }}>1</Box>
                        <Box onClick={() => { if (isFormValid) { nextStep(); } }} sx={{ px: 3, color: theme.palette.primary.main, fontSize: 14, cursor: "pointer", fontWeight: 700, }}>2</Box>
                    </Box>

                    <Button
                        onClick={nextStep}
                        disabled={!isFormValid}
                        variant="contained"
                        sx={{
                            background: "primary.main",
                            color: "#fff",
                            px: 6,
                            py: 1,
                            borderRadius: "10px",
                            textTransform: "none",
                            fontWeight: 700,
                            fontSize: "1rem",
                            "&:hover": { background: "#d88383" }
                        }}
                    >
                        Proximo
                    </Button>
                </Box>
            </Box>
        </Box>
    );

};