import styled from "styled-components";
import { useState } from "react";

export default function PrevList({ notiTitle, content, content2, date }){
    
    return(
    <Wrapper>   
        <Title>{notiTitle}</Title>
        <Content>{content}</Content>
        <Pin>{content2}</Pin>
        <Info>{date}</Info>
    </Wrapper>
    );
}

const Wrapper = styled.div`
border-bottom: 0.0625rem solid #EEE;
margin-bottom: 0.75rem;
`

const Title = styled.div`
color: #999;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 0.75rem;
`

const Content = styled.div`
color: #999;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;

`

const Pin = styled.div`
color: #999;
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