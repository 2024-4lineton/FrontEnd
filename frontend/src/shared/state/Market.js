import {atom} from 'recoil';
import market1 from "../../assets/TraditionalMarket/market.svg"
import market2 from "../../assets/TraditionalMarket/market2.svg"
import market3 from "../../assets/TraditionalMarket/market3.svg"
import market4 from "../../assets/TraditionalMarket/market4.svg"

export const tradMarketState = atom({
    key:'tradMarketState',
    default:[
        { name: "돈암시장", img: market1 },
        { name: "정릉시장", img: market2 },
        { name: "길음시장", img: market3 },
        { name: "수유시장", img: market4 },
        { name: "돈암시장", img: market1 },
        { name: "정릉시장", img: market2 },
        { name: "길음시장", img: market3 },
        { name: "수유시장", img: market4 },
    ]
})

export const selectedTradMarketState = atom ({
    key:'selectedTradMarketState',
    default:[]
})
