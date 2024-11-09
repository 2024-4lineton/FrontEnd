import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { useState } from "react";

export default function TotalHelfoome(){

    const [total, setTotal] = useState("0.4");
    const [cnt, setCnt] = useState("4");
    const [last, setLast] = useState("1.5");
    const progressPercentage = Math.min((total / 1) * 100, 100); // 우선 1Kg 목표를 기준으로 계산

    return(
    <Wrapper>
        <ContentContainer>
            <Font>{total}Kg의 이산화탄소 줄이기를 성공했어요!</Font>
            <SubTitle>1회 구매에 약 0.1Kg의 이산화탄소를 줄일 수 있어요.</SubTitle>

            <ChartContainer>
                <div style={{display:"flex", gap: "0.25rem", alignItems:"center"}}>
                <div style={{backgroundColor: '#1CFFAD', width: '0.5rem', height:'0.5rem', borderRadius:"50rem"}}/>
                <Cnt>{cnt}회 구매</Cnt>
                </div>
                <div className="progress" role="progressbar" aria-valuenow={progressPercentage} aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${progressPercentage}%`, backgroundColor: '#1CFFAD' }}></div>
                    </div>
                <LastCnt>지난 달 {last}Kg 성공</LastCnt>
            </ChartContainer>
        </ContentContainer>
    </Wrapper>);
}

const Wrapper = styled.div`
width : 100%;
padding: 0 1rem;
margin-top: 1rem;
`

const ContentContainer = styled.div`
width: 100%;
border-radius: 1rem;
background: #FFF;
height: 8.75rem;
display: flex;
flex-direction: column;
align-items: center;
padding: 0.88rem 2.88rem;
`

const Font = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const SubTitle = styled(Font)`
color: #999;
font-size: 0.75rem;
margin-top: 0.5rem;
`

const ChartContainer = styled.div`
width: 100%;
margin-top: 1rem;
position: relative;
`

const Cnt = styled.div`
color: #333;
font-size: 0.75rem;
`

const LastCnt = styled(Font)`
    color: #C2C2C2;
    font-size: 0.624rem;
    font-weight: 400;
    margin-top: 0.25rem;
    position: absolute;
    right: 0;
`