import styled from "styled-components";
import { useState } from "react";

export default function List(){

    const [notiTitle, setNotiTitle] = useState("예약이 수락되었어요 🍀");
    const [content, setContent] = useState("늦기 전에 가게를 방문해 상품 구매를 완료해주세요.");
    const [pin, setPin] = useState("8765");
    const [date, setDate] = useState("24.11.11");
    const [time, setTime] = useState("21:52:14");

    return(
    <Wrapper>   
        <Title>{notiTitle}</Title>
        <Content>{content}</Content>
        <Pin>핀번호 : <strong>{pin}</strong></Pin>
        <Info>{date} | {time}</Info>
    </Wrapper>
    );
}

const Wrapper = styled.div`
border-bottom: 0.0625rem solid #EEE;
margin-bottom: 0.75rem;
`

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 0.75rem;
`

const Content = styled.div`
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;

`

const Pin = styled.div`
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Info = styled.div`
color: #999;
/* sm */
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 0.75rem;
margin: 0.75rem 0;
`