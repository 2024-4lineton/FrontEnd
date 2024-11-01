import Dashboard from "./Dashboard";
import MarketNav from "./MarketNav";
import LastChance from "./LastChance";
import Recommend from "./Recommend";
import Onedayclass from "./Onedayclass";
import Article from "./Article";
import Footer from "./Footer";

export default function MainComponent(){
    return(
    <>
        <Dashboard/>
        <MarketNav/>
        <LastChance/>
        <Recommend/>
        <Onedayclass/>
        <Article/>
        <Footer/>
    </>
    );
    
}