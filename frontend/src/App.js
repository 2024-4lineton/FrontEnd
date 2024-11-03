import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import TraditionalMarket from "./pages/TraditionalMarket";
import TraditionalMarketDetail from "./pages/TraditionalMarketDetail";
import StreetMarket from './pages/StreetMarket';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/traditional-market" element={<TraditionalMarket/>}/>
      <Route path="/traditional-detail" element={<TraditionalMarketDetail/>}/>
      <Route path="/street-market" element={<StreetMarket/>}/>
    </Routes>
  );
}

export default App;
