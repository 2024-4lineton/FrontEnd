import styled from "styled-components";
import potato from '../../assets/Main/potato1.svg';
import { useState } from "react";
import {hoverGrow} from '../../shared/animation/hoverGrow';
import { Navigate, useNavigate, usesNavigate } from "react-router-dom";

export default function Dashboard(){

    const [cnt, setCnt] = useState(0);
    const navigate = useNavigate("/");
    
    return(
        <Wrapper>
            <Content>

                <Img src={potato}/>
                <Comment>
                    <Title>이번 달 감자를 {cnt}개 수확했어요! </Title>
                    <Subtitle>감자는 구매 활동을 통해 획득 가능해요.</Subtitle>
                    <Button onClick={()=>navigate('/helfoome')}>나의 활동 보러가기</Button>
                </Comment>

            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem 0 1rem;
`

const Content = styled.div`
    height: 8.72rem;
    width: 100%;
    border-radius: 1rem;
    background: linear-gradient(0deg, rgba(235, 246, 230, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%);
    box-shadow: 18.267px -18.267px 18.267px 0px rgba(186, 190, 184, 0.11) inset, -18.267px 18.267px 18.267px 0px rgba(255, 255, 255, 0.11) inset;
    backdrop-filter: blur(19.72800064086914px);
    padding: 0 1.44rem 0 1.44rem;
    display: flex;
    gap: 1.19rem;
`

const Img = styled.img`
margin-top: 2.69rem;
width: 4.6875rem;
height: 3.4375rem;
`

const Comment = styled.div`
padding-top: 1.56rem;
width: 100%;
`

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom:0.25rem;
`

const Subtitle = styled.div`
color: #999;
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Button = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
border-radius: 0.5rem;
background: #577D58;
color: #FFF;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 1.25rem;
padding: 0.5rem 0;
cursor: pointer;
${hoverGrow}
`