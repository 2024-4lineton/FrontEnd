import styled from "styled-components";
import Header from '../shared/components/Header';
import TotalHelfoome from "../entities/helfoome/TotalHelfoome";
import Calendar from "../entities/helfoome/Calendar";
import Stamp from "../entities/helfoome/Stamp";
import ServiceInfo from "../entities/helfoome/ServiceInfo";

export default function Helfoome(){
    return(
        <Wrapper>
            <Header/>
            <Title>이번 달 헬푸미 활동 내역</Title>
            <TotalHelfoome/>
            <Calendar/>
            <Line/>
            <Stamp/>
            <ServiceInfo/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background: linear-gradient(180deg, #E5FAFF 23.33%, #A7D77A 38.85%);
`

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 1rem;
margin-top: 1.5rem;
text-align: center;
`

const Line = styled.div`
height: 0.0625rem;
background: #FFF;
`