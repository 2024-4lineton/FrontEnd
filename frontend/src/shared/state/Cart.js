import {atom} from 'recoil';
import menu from '../../assets/TraditionalMarket/menu.svg';

export const cartState = atom({
    key:'cartState',
    default:[
        { name: "음치킨1", menu:"김밥", price:"2,000", img: menu },
        { name: "음치킨2", menu:"김밥", price:"2,000", img: menu },
        { name: "음치킨3", menu:"김밥", price:"2,000", img: menu },
        { name: "음치킨4", menu:"김밥", price:"2,000", img: menu },
        { name: "음치킨5", menu:"김밥", price:"2,000", img: menu },
        { name: "음치킨6", menu:"김밥", price:"2,000", img: menu },
        { name: "음치킨7", menu:"김밥", price:"2,000", img: menu },
        { name: "음치킨8", menu:"김밥", price:"2,000", img: menu },
    ]
})

export const cartSelectedState = atom({
    key:'cartSelectedState',
    default:[]
})
