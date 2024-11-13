import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import TraditionalMarket from "./pages/TraditionalMarket";
import TraditionalMarketDetail from "./pages/TraditionalMarketDetail";
import StreetMarket from "./pages/StreetMarket";
import MenuDetail from "./pages/MenuDetail";
import Cart from "./pages/CartPage";
import MarketRegistration from "./pages/MarketRegistration";
import CompanyCertification from "./pages/CompanyCertification";
import Sell from "./pages/Sell";
import styled from "styled-components";
import Login from "./pages/Login";
import Helfoome from "./pages/Helfoome";
import Community from "./pages/Community";
import CommunityPopularMore from "./pages/CommunityPopularMore";
import CommunityNewMore from "./pages/CommunityNewMore";
import BusinessSellMore from "./pages/BusinessSellMore";
import BusinessPurchaseMore from "./pages/BusinessPurchaseMore";
import CommunityWriting from "./pages/CommunityWriting";
import Brand from "./pages/Brand";
import AddInfoPage1 from "./pages/addInfoPage/AddInfoPage1";
import SellDetail from "./pages/SellDetail";
import MyPage from "./pages/MyPage";

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
      <Route path="/sell" element={<Sell/>}/>
      <Route path="/helfoome" element={<Helfoome/>}/>
      <Route path="/community" element={<Community/>}/>
      <Route path="/Login" element={<Login />} />
      <Route path="AddInfo1" element={<AddInfoPage1 />} />
      <Route path="/community-popular-more" element={<CommunityPopularMore />} />
      <Route path="/community-new-more" element={<CommunityNewMore />} />
      <Route path="/business-sell-more" element={<BusinessSellMore />} />
      <Route path="/business-purchase-more" element={<BusinessPurchaseMore />} />
      <Route path="/community-writing" element={<CommunityWriting />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/sell-detail" element={<SellDetail />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}
export default App;

const Wrapper = styled.div`
  position: relative;
  width: 440px;
  margin: 0 auto;
  min-height: 100vh;
`;
