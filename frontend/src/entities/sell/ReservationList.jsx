import styled from "styled-components";
import { hoverGrow } from "../../shared/animation/hoverGrow";
import { useState } from "react";

export default function ReservationList() {

    // const [userInfo, setUserInfo] = useState([]);
    const [userName, setUserName] = useState("세은");
    const [pin, setPin] = useState("8354");
    const [time, setTime] = useState("24.11.11 21:03:34")


    return (
        <Wrapper>
            <Content>
                <ItemContainer>
                    <Title>닉네임</Title>
                    <Info>{userName}</Info>
                </ItemContainer>
                <ItemContainer>
                    <Title>핀번호</Title>
                    <Info>{pin}</Info>
                </ItemContainer>
                <ItemContainer style={{gap: "1rem"}}>
                    <Title>예약시간</Title>
                    <Info>{time}</Info>
                </ItemContainer>
            </Content>

            <ButtonContainer>
                <PurchaseButton>구매확정</PurchaseButton>
                <CancelButton>취소하기</CancelButton>
            </ButtonContainer>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 0.5rem 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom : 0.0625rem solid #EEE;
    margin-bottom: 0.75rem;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
`

const ItemContainer = styled.div`
    display: flex;
    gap: 2rem;
`

const Title = styled.div`
    color: #333;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const Info = styled(Title)`
    font-weight: 400;
    color: #555;
    text-align: left;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.75rem;
`

const PurchaseButton = styled.div`
    border-radius: 0.5rem;
    background: #F07D45;
    padding: 0.5rem 2.25rem;
    color: #FFF;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    ${hoverGrow}
`

const CancelButton = styled(PurchaseButton)`
    color: #F07D45;
    background: #FFF;
    border: 1px solid #EEE;
`
