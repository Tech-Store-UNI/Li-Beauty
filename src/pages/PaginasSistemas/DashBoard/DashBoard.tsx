import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";

import Faturamento from "../../../img/Icon-Faturamento.png";
import TotalAgendamento from "../../../img/Icon-TotalAgendamento.png";
import ClientesAtivos from "../../../img/Icon-ClientesAtivos.png";

import { HeaderDashboard } from "./HeaderDashboard/HeaderDashboard";
import { AnalyticsDashboard } from "./AnalyticsDashboard/AnalyticsDashboard";
import { DayAppointments } from "./AgendamentosDia/AgendamentosDia";

const BG_GRAY = "#F8F7F7";

interface DashboardStats {
  title: string;
  value: string;
  icon: string;
  trend: string;
  chartData: number[];
}

export const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats[]>([]);
  const [totalSales, setTotalSales] = useState("R$ 0");

  useEffect(() => {
    setStats([
      {
        title: "Faturamento Bruto",
        value: "R$ 20.245,00",
        icon: Faturamento,
        trend: "0.5%",
        chartData: [40, 70, 50, 85, 60],
      },
      {
        title: "Total de agendamentos",
        value: "256",
        icon: TotalAgendamento,
        trend: "12%",
        chartData: [30, 45, 90, 65, 80],
      },
      {
        title: "Clientes ativos",
        value: "1.256",
        icon: ClientesAtivos,
        trend: "3.2%",
        chartData: [50, 60, 40, 70, 90],
      },
    ]);

    setTotalSales("R$ 56.345,98");
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        background: BG_GRAY,
        p: 3
      }}
    >
      <Box>
        <HeaderDashboard stats={stats} />

        <AnalyticsDashboard totalSales={totalSales} />

        <DayAppointments />
      </Box>
    </Container>
  );
};