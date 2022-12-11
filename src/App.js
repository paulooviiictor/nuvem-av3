import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import './index.css';
import Home from './pages/home'
import Apresentacao from './pages/apresentacao'
import NossosProjetos from './pages/nossosprojetos';
import Depoimentos from './pages/depoimentos';
import SobreNos from './pages/sobrenos';
import Orcamento from './pages/orcamento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apresentacao" element={<Apresentacao />} />
        <Route path="/nossosprojetos" element={<NossosProjetos />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/sobrenos" element={<SobreNos />} />
      </Routes>
    </Router>

  );
}

export default App;
