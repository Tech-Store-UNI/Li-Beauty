
import { Box, Button, InputAdornment, Paper, TextField, Typography, } from "@mui/material";
import { MuiTableContainer } from "../../../../components/Table/MuiTable";
import { DADOS_EXIBICAO_AGENDAMENTOS, rowsAppointments } from "./util/util";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export const DayAppointments = () => {
    const handleAtender = (row: any) => {
        console.log("Atender cliente:", row.nome);
    };

    const actions = [
        {
            icon: (
                <Button
                    sx={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#fff",

                    }}>
                    Atender
                </Button>
            ),
            onClick: (row: any) => handleAtender(row),
        },
    ];

    return (
        <Paper sx={{p: 2,borderRadius: "18px",border: "1px solid #F0F0F0",boxShadow: "0px 5px 20px rgba(0,0,0,0.04)",}}>
            
            <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",mb: 3,}}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <CalendarMonthIcon sx={{ fontSize: 35, color: "primary.main", }} />

                    <Box>
                        <Typography sx={{ fontSize: 22, fontWeight: 700 }}>
                            Agenda do dia
                        </Typography>

                        <Typography sx={{ fontSize: 12, color: "#777" }}>
                            Visualize todos os atendimentos agendados do dia
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display: "flex",alignItems: "center",gap: 2,}}>
                    <Box
                        sx={{
                            width: 35,
                            height: 35,
                            borderRadius: "50%",
                            backgroundColor: "secondary.main",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                        }}
                    >
                        <PersonIcon sx={{ color: "#fff", fontSize: 24 }} />

                        <Box
                            sx={{
                                position: "absolute",
                                top: -5,
                                right: -5,
                                width: 18,
                                height: 18,
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                                border: "1px solid #ddd",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 11,
                                fontWeight: 700,
                                color: "primary.main",
                            }}
                        >
                            5
                        </Box>
                    </Box>

                    <TextField
                        size="small"
                        placeholder="Pesquisar por nome..."
                        sx={{
                            width: 280,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                backgroundColor: "#fcfcfc",
                            },
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon
                                            sx={{
                                                color: "#BDBDBD",
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Box>
            </Box>

            <MuiTableContainer
                columns={DADOS_EXIBICAO_AGENDAMENTOS}
                rows={rowsAppointments}
                actions={actions}
                lastColumn="Ações"
                LastColumnSx={{ textAlign: "center", }}
                tableIConSx={{ justifyContent: "end", }}
                tableHeadSx={{ minWidth: 0, width: 50 }}
            />
        </Paper>
    );
};