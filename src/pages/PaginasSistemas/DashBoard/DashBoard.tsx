import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  IconButton,
  TextField,
  InputAdornment,
  Divider,
  Button,
  Container,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";

// Interfaces para tipagem dos dados vindo do "banco"
interface DashboardStats {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  chartData: number[];
}

interface Appointment {
  id: number;
  nome: string;
  telefone: string;
  categoria: string;
  servico: string;
  valor: string;
  data: string;
  hora: string;
  foto?: string;
}

// Constantes de estilo para manter o padrão visual
const PRIMARY_PINK = "#E89B9B";
const DARK_RED = "#7B3F46";
const LIGHT_PINK = "#FCEEEE";
const BG_GRAY = "#F8F7F7";

export const DashBoard = () => {
  const [stats, setStats] = useState<DashboardStats[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [salesData, setSalesData] = useState<number[]>([]);
  const [totalSales, setTotalSales] = useState("R$ 0");
  const [loading, setLoading] = useState(false);

  // Simulação de busca de dados do banco
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lógica de busca de dados zerada para integração futura
        setStats([]);
        setAppointments([]);
        setSalesData([]);
        setTotalSales("R$ 0");
        setLoading(true);
        // Simulando um pequeno delay de carregamento do banco
        await new Promise(resolve => setTimeout(resolve, 500));

        setStats([
          { 
            title: "Faturamento Bruto", 
            value: "R$ 20.245,00", 
            icon: <AttachMoneyIcon />, 
            trend: "0.5%", 
            chartData: [40, 70, 50, 85, 60] 
          },
          { 
            title: "Total de agendamentos", 
            value: "256", 
            icon: <CalendarMonthIcon />, 
            trend: "12%", 
            chartData: [30, 45, 90, 65, 80] 
          },
          { 
            title: "Clientes ativos", 
            value: "1.256", 
            icon: <PersonIcon />, 
            trend: "3.2%", 
            chartData: [50, 60, 40, 70, 90] 
          },
        ]);

        setAppointments([
          { id: 1, nome: "Cristiane Lima", telefone: "(11) 94498-2012", categoria: "Cílios", servico: "Clássico", valor: "R$ 150,00", data: "27/04/2026", hora: "16:00" },
          { id: 2, nome: "Mariana Silva", telefone: "(11) 97777-6666", categoria: "Cílios", servico: "Volume Russo", valor: "R$ 220,00", data: "27/04/2026", hora: "17:30" },
          { id: 3, nome: "Juliana Costa", telefone: "(11) 98888-5555", categoria: "Sobrancelha", servico: "Design", valor: "R$ 50,00", data: "27/04/2026", hora: "18:45" },
          { id: 4, nome: "Fernanda Lima", telefone: "(11) 91111-2222", categoria: "Cílios", servico: "Remoção", valor: "R$ 80,00", data: "27/04/2026", hora: "19:15" },
        ]);

        setSalesData([120, 125, 100, 160, 140, 130, 120, 145, 135, 125, 90, 130]);
        setTotalSales("R$ 56.345,98");
      } catch (error) {
        console.error("Erro ao carregar dados do dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        maxWidth: "none", // Garante que não haja restrição de largura
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        background: BG_GRAY,
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
      }}
    >

      {/* CONTEÚDO */}
      <Box
        sx={{
          width: "100%",
          px: 3,
          pb: 4,
          pt: 2,
        }}
      >
        
        {/* CARDS SUPERIORES */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
            mb: 3,
          }}
        >
          {stats.map((card, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                borderRadius: "18px",
                border: "1px solid #F0F0F0",
                boxShadow: "0px 5px 20px rgba(0,0,0,0.04)",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: LIGHT_PINK,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#C76C6C",
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>{card.title}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: 32, fontWeight: 700 }}>{card.value}</Typography>
                  <Typography sx={{ fontSize: 12, color: PRIMARY_PINK, mt: 1 }}>
                    ↗ {card.trend} Do mês passado
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end", gap: 0.5 }}>
                  {card.chartData.map((h, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 10,
                        height: h,
                        background: i === 2 ? PRIMARY_PINK : DARK_RED,
                        borderRadius: "4px",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* GRÁFICOS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: 3,
            mb: 3,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "18px",
              border: "1px solid #F0F0F0",
              boxShadow: "0px 5px 20px rgba(0,0,0,0.04)",
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Vendas gerais</Typography>
            <Typography sx={{ fontSize: 36, fontWeight: 700 }}>{totalSales}</Typography>
            <Box sx={{ mt: 4, display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: 180 }}>
              {salesData.length > 0 ? (
                salesData.map((h, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: "6%",
                      height: h,
                      background: i === 3 ? "#F6CACA" : DARK_RED,
                      borderRadius: "6px",
                    }}
                  />
                ))
              ) : (
                <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ color: '#999', fontSize: 14 }}>Aguardando dados de faturamento...</Typography>
                </Box>
              )}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"].map((m) => (
                <Typography key={m} sx={{ fontSize: 12, color: "#777" }}>{m}</Typography>
              ))}
            </Box>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "18px",
              border: "1px solid #F0F0F0",
              boxShadow: "0px 5px 20px rgba(0,0,0,0.04)",
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Distribuição de Serviços</Typography>
            <Box sx={{ height: 250, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography sx={{ color: "text.secondary" }}>Gráfico em breve...</Typography>
            </Box>
          </Paper>
        </Box>

        {/* AGENDA DO DIA */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: "18px",
            border: "1px solid #F0F0F0",
            boxShadow: "0px 5px 20px rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}
        >
          <Box sx={{ p: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Agenda do dia</Typography>
            <TextField
              size="small"
              placeholder="Pesquisar por nome..."
              sx={{
                width: 260,
                "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              }}
            />
          </Box>
          
          <Divider />
          
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "0.6fr 1.4fr 1.2fr 1fr 1fr 1fr 1fr 0.8fr 1fr",
              px: 3,
              py: 2,
              background: "#fafafa",
            }}
          >
            {["Foto", "Nome", "Telefone", "Categoria", "Serviço", "Valor", "Data", "Hora", "Ações"].map((h) => (
              <Typography key={h} sx={{ fontWeight: 700, fontSize: 13, color: "#8D5A5A" }}>{h}</Typography>
            ))}
          </Box>
          
          <Divider />

          {appointments.map((item) => (
            <Box key={item.id}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "0.6fr 1.4fr 1.2fr 1fr 1fr 1fr 1fr 0.8fr 1fr",
                  px: 3,
                  py: 2,
                  alignItems: "center",
                }}
              >
                <Avatar src={item.foto || "https://i.pravatar.cc/300"} sx={{ width: 35, height: 35 }} />
                <Typography sx={{ fontSize: 14 }}>{item.nome}</Typography>
                <Typography sx={{ fontSize: 14 }}>{item.telefone}</Typography>
                <Typography sx={{ fontSize: 14 }}>{item.categoria}</Typography>
                <Typography sx={{ fontSize: 14 }}>{item.servico}</Typography>
                <Typography sx={{ fontSize: 14 }}>{item.valor}</Typography>
                <Typography sx={{ fontSize: 14 }}>{item.data}</Typography>
                <Typography sx={{ fontSize: 14 }}>{item.hora}</Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    background: PRIMARY_PINK,
                    color: "#fff",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { background: "#d88383" },
                  }}
                >
                  Atender
                </Button>
              </Box>
              <Divider />
            </Box>
          ))}
          
          <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
            <Button sx={{ color: PRIMARY_PINK, textTransform: "none", fontWeight: 700 }}>
              Ver agenda completa
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
