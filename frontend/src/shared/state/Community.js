import {atom} from 'recoil';
import article1 from '../../assets/Community/article1.svg';
import article2 from '../../assets/Community/article2.svg';
import article3 from '../../assets/Community/article3.svg';


export const articleState = atom({
    key:'articleState',
    default:[
        { name: "음식물 쓰레기로 인한 환경오염의 지표", img: article1, heart: 3, chat: 1, date:"24.11.16", auth:"멋쟁이사자처럼" },
        { name: "음식물 쓰레기 줄이기", img: article2, heart: 6, chat: 2, date:"24.11.17", auth:"멋쟁이사자처럼" },
        { name: "자투리 채소 사용법", img: article3, heart: 9, chat: 3, date:"24.11.18", auth:"멋쟁이사자처럼" },
    ]
})