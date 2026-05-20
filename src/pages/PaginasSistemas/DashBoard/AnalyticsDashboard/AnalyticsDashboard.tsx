import {
    Box,
    Paper,
    Typography,
    Select,
    MenuItem,
    FormControl,
} from "@mui/material";

import { ChartsContainer, BarPlot, LinePlot, MarkPlot, ChartsXAxis, ChartsYAxis, } from "@mui/x-charts";

import { useState } from "react";
import theme from "../../../../theme";
import {
    appointmentsData,
    months,
    revenueData,
} from "./util/util";
import { formatCurrencyBRL } from "../../../../util/masc";

interface Props {
    totalSales: string;
}

export const AnalyticsDashboard = ({
    totalSales,
}: Props) => {
    const [year, setYear] = useState("2025");

    const currentMonth = new Date().getMonth();

    const [hoveredMonth, setHoveredMonth] =
        useState<number | null>(null);

    const activeMonth =
        hoveredMonth !== null
            ? hoveredMonth
            : currentMonth;

    return (
        <Box sx={{ mb: 3 }}>
            <Paper
                sx={{
                    p: 3,
                    borderRadius: "18px",
                    boxShadow:
                        "0px 5px 20px rgba(0,0,0,0.04)",
                }}
            >
                {/* HEADER */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    <Box>
                        <Typography sx={{ fontSize: 14 }}>
                            Vendas gerais
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 24,
                                fontWeight: 700,
                            }}
                        >
                            {totalSales}
                        </Typography>
                    </Box>

                    {/* LEGENDA */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            flexWrap: "wrap",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                gap: 1,
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: "#F4BDBD",
                                }}
                            />
                            <Typography sx={{ fontSize: 12 }}>
                                Faturamento (Valor)
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                gap: 1,
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background:
                                        theme.palette.primary.main,
                                }}
                            />
                            <Typography sx={{ fontSize: 12 }}>
                                Agendamentos
                            </Typography>
                        </Box>
                    </Box>

                    {/* SELECT ANO */}
                    <FormControl size="small">
                        <Select
                            value={year}
                            onChange={(e) =>
                                setYear(e.target.value)
                            }
                            sx={{
                                borderRadius: "10px",
                                minWidth: 140,
                            }}
                        >
                            <MenuItem value="2025">
                                Ano de 2025
                            </MenuItem>
                            <MenuItem value="2024">
                                Ano de 2024
                            </MenuItem>
                            <MenuItem value="2023">
                                Ano de 2023
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box
                    sx={{
                        height: 320,
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 70,
                            left: `${(activeMonth + 1) * 7.8}%`,
                            background: "#fff",
                            padding: "8px 12px",
                            borderRadius: "10px",
                            boxShadow:
                                "0px 4px 20px rgba(0,0,0,0.08)",
                            zIndex: 10,
                            transition: "all .2s ease",
                        }}
                    >
                        <Typography sx={{ fontSize: 12, fontWeight: 700, color: theme.palette.primary.main, }}>
                            {formatCurrencyBRL(revenueData[activeMonth])}
                        </Typography>

                        <Typography sx={{ fontSize: 10, color: "#7c7c7c", }}>
                            Vendas líquidas
                        </Typography>

                    </Box>

                    <ChartsContainer
                        series={[
                            {
                                type: "bar",
                                data: revenueData,
                                color: theme.palette.secondary.main,
                            },
                            {
                                type: "line",
                                data: appointmentsData,
                                color: theme.palette.primary.main,
                                curve: "natural",
                            },
                        ]}
                        xAxis={[
                            {
                                scaleType: "band",
                                data: months,
                            },
                        ]}
                        sx={{
                            "& .MuiMarkElement-root": {
                                fill: "#fff",
                                stroke: theme.palette.primary.main,
                                strokeWidth: 3,
                                cursor: "pointer",
                            },

                            "& .MuiMarkElement-root circle": {
                                r: 6,
                            },

                            "& .MuiLineElement-root": {
                                strokeWidth: 3,
                            },
                        }}
                    >
                        <BarPlot
                            borderRadius={6}
                            slots={{
                                bar: (props: any) => {
                                    const isCurrentMonth =
                                        props.dataIndex ===
                                        currentMonth;

                                    return (
                                        <rect
                                            {...props}
                                            onMouseEnter={() =>
                                                setHoveredMonth(
                                                    props.dataIndex
                                                )
                                            }
                                            onMouseLeave={() =>
                                                setHoveredMonth(null)
                                            }
                                            fill={
                                                isCurrentMonth
                                                    ? "#F4BDBD"
                                                    : theme.palette
                                                        .secondary.main
                                            }
                                            rx="6"
                                            style={{
                                                cursor: "pointer",
                                            }}
                                        />
                                    );
                                },
                            }}
                        />

                        <LinePlot />
                        <MarkPlot />

                        <ChartsXAxis />
                        <ChartsYAxis />
                    </ChartsContainer>
                </Box>
            </Paper>
        </Box>
    );
};