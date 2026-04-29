
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
            <Route path="servicos/cilios" element={<Cilios />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
