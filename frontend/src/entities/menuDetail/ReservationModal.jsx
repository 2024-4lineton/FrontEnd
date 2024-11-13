import styled from "styled-components";
import success from '../../assets/MenuDetail/success.svg';

export default function ReservationModal({ onClose }) {
    return (
        <Wrapper>
            <ModalContainer>
                <Title>예약이 수락 되었어요.</Title>
                <Content>도착하면 사장님께 아래의 핀번호를 말해주세요.</Content>

                <Container>
                    <Pin>8</Pin>
                    <Pin>7</Pin>
                    <Pin>6</Pin>
                    <Pin>5</Pin>
                </Container>

                <Content>마감 전에 상품을 찾으러 가주세요!</Content>

                {/* <ButtonContainer>
                    <CloseButton onClick={onClose}>닫기</CloseButton>
                    <ConfirmButton>예약 완료</ConfirmButton>
                </ButtonContainer> */}

            </ModalContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(51, 51, 51, 0.70);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    width: 80%;
    max-width: 400px;
    height: 15rem;
    border-radius: 1.25rem;
    background: #F8F8F8;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
`;

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const Content = styled(Title)`
    font-size: 1rem;
    text-align: center;
    margin-top: 0.5rem;
`;

const Container = styled.div`
    display: flex;
    gap: 0.75rem;
    margin-top: 1.25rem;
    margin-bottom: 1.2rem;
`

const Pin = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 3.8125rem;
height: 4.625rem;
border-radius: 0.25rem;
border: 1px solid #EEE;
background: #FFF;
color: #577D58;
font-family: Pretendard;
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
