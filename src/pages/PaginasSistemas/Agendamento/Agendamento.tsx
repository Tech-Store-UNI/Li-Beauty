import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import { ModalAgendamento, type FormDataProps } from './ModalAgendamento/ModalAgendamento';
import { COLUNAS_AGENDAMENTO } from './util/util';
import { containerTablecomunStyles, scrollResponse } from '../../../styles/StylesComun.style';
import { MuiTableContainer } from '../../../components/Table/MuiTable';
import theme from '../../../theme';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

interface AgendamentoRow extends FormDataProps {
    id: number;
    foto: string;
}

export const Agendamento: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [agendamentos, setAgendamentos] = useState<AgendamentoRow[]>([]);

    const handleAddAgendamento = (novoAgendamento: FormDataProps) => {
        const novoItem: AgendamentoRow = {
            ...novoAgendamento,
            id: Date.now(),
            foto: `https://i.pravatar.cc/150?u=${Date.now()}`
        };
        setAgendamentos((prev) => [...prev, novoItem]);
    };

    const handleVerDetalhes = (row: any) => {
        console.log("Detalhes do agendamento:", row);
    };

    const actions = [
        {
            icon: <VisibilityIcon sx={{ color: "#fff" }} />,
            onClick: (row: any) => handleVerDetalhes(row),
        },
    ];

    return (
        <Box sx={{ ...containerTablecomunStyles }}>
            {agendamentos.length === 0 ? (
                <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, px: 3, height: "70vh", justifyContent: "center" }}>
                    <CalendarMonthIcon sx={{ fontSize: 100, color: '#eb9494' }} />

                    <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#000', mt: 1 }}>
                        Agenda Li Beauty
                    </Typography>

                    <Box>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.4 }}>
                            O seu melhor horário está a um clique de distância.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.4 }}>
                            Vamos agendar?
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => setIsModalOpen(true)}
                        sx={{ mt: 1, color: '#fff', textTransform: 'none', fontSize: '1.1rem', px: 4, py: 1.5, borderRadius: 2, fontWeight: 'bold', '&:hover': { backgroundColor: '#d88383' }, }}>
                        Agendar horario
                    </Button>
                </Box>
            ) : (
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                            <PeopleAltIcon sx={{ fontSize: { xs: 34, sm: 60 }, color: "secondary.main" }} />
                            <Box >
                                <Typography sx={{ fontSize: { xs: 18, sm: 21 }, fontWeight: 800 }}>Gerenciamento de todos os Usuarios</Typography>
                                <Typography sx={{ fontSize: 11, color: "#6C6C6C" }}>Controle de acessos, perfis de usuários e histórico de agendamentos.</Typography>
                            </Box>

                        </Box>
                        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setIsModalOpen(true)} sx={{ color: '#fff', textTransform: 'none', borderRadius: 2, height: 48 }}>
                            Novo Agendamento
                        </Button>
                    </Box>

                    <MuiTableContainer
                        columns={COLUNAS_AGENDAMENTO}
                        rows={agendamentos}
                        onRowClick={handleVerDetalhes}
                        lastColumn="Detalhes"
                        actions={actions}
                        LastColumnSx={{ textAlign: "end" }}
                        tableHeadSx={{ minWidth: 0, width: 100 }}
                        tableIConSx={{ justifyContent: "center" }}
                        containerSx={{ ...scrollResponse(theme) }}
                    />
                </Box>
            )}

            <ModalAgendamento
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleAddAgendamento}
            />
        </Box>
    );
};