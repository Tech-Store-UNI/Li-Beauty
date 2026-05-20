
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Contato } from './pages/Contato/Contato';
import { Sobre } from './pages/Sobre/Sobre';
import { Servicos } from './pages/Servicos/Servicos';
import { Cilios } from './components/Pages/Servicos/Cilios/Cilios';
import { Login } from './pages/Login/Login';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { LayoutSistema } from './components/LayoutSistema/LayoutSistema';
import { Dashboard } from './pages/PaginasSistemas/DashBoard/DashBoard';
import { Clientes } from './pages/PaginasSistemas/Clientes/Clientes';
import { Agendamento } from './pages/PaginasSistemas/Agendamento/Agendamento';
import { Portifolio } from './components/Pages/Portfolio/Portfolio';
import { Maquiagem } from './components/Pages/Servicos/Maquiagem/Maquiagem';
import { Sobrancelhas } from './components/Pages/Servicos/Sobrancelhas/Sobrancelhas';





export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="contato" element={<Contato />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="portfolio" element={<Portifolio />} />
            <Route path="servicos/cilios" element={<Cilios />} />
            <Route path="servicos/maquiagem" element={<Maquiagem />} />
            <Route path="/servicos/sobrancelhas" element={<Sobrancelhas />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="/dashboard" element={<LayoutSistema />}>
            <Route index element={<Dashboard />} />
            <Route path="agendamento" element={<Agendamento />} />
            <Route path="clientes" element={<Clientes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
