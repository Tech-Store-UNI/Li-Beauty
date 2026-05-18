
import { Box, Paper, Typography } from "@mui/material";
import theme from "../../../../theme";

interface DashboardStats {
  title: string;
  value: string;
  icon: string;
  trend: string;
  chartData: number[];
}

interface Props {
  stats: DashboardStats[];
}


export const HeaderDashboard = ({ stats }: Props) => {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3, mb: 3, }}>
      {stats.map((card, index) => (
        <Paper key={index} elevation={0} sx={{ p: 2.4, borderRadius: "18px", border: "1px solid #F0F0F0", boxShadow: "0px 5px 20px rgba(0,0,0,0.04)", }} >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                <Box sx={{ width: 30, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", }} >
                  <img
                    src={card.icon}
                    alt={card.title}
                    style={{ width: "40px", height: "40px", objectFit: "contain", }}
                  />
                </Box>
                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                  {card.title}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
                {card.value}
              </Typography>
              <Typography sx={{ fontSize: 12, color: theme.palette.primary.main, mt: 1 }}>
                ↗ {card.trend} Do mês passado
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: 0.5 }}>
              {card.chartData.map((h, i) => (
                <Box
                  key={i}
                  sx={{ width: 10, height: h, background: i === 2 ? theme.palette.primary.main : theme.palette.secondary.main, borderRadius: "4px", }}
                />
              ))}
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};