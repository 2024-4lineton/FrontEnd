import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import TraditionalMarket from "./pages/TraditionalMarket";
import TraditionalMarketDetail from "./pages/TraditionalMarketDetail";
import StreetMarket from './pages/StreetMarket';
import MenuDetail from "./pages/MenuDetail";
import Cart from "./pages/CartPage";
import MarketRegistration from "./pages/MarketRegistration";
import CompanyCertification from "./pages/CompanyCertification";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/traditional-market" element={<TraditionalMarket/>}/>
      <Route path="/traditional-detail" element={<TraditionalMarketDetail/>}/>
      <Route path="/street-market" element={<StreetMarket/>}/>
      <Route path="/menu-detail" element={<MenuDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/market-registration" element={<MarketRegistration/>}/>
      <Route path="/company-certification" element={<CompanyCertification/>}/>
    </Routes>
  );
}

export default App;
