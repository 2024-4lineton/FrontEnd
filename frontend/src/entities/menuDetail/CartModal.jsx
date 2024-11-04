import styled from "styled-components";
import success from '../../assets/MenuDetail/success.svg';
import { useNavigate } from "react-router-dom";

export default function CartModal({ onClose }) {

    const navigate = useNavigate('');

    return (
        <Wrapper>
            <ModalContainer>
                <Title>장바구니에 담겼어요.</Title>
                <Content>상품의 수량이 적으니, <br/>
                            품절 되기 전에 예약을 완료해주세요!</Content>
                <Img src={success}/>
                <ButtonContainer>
                    <CloseButton onClick={onClose}>장바구니 보러가기</CloseButton>
                    <ConfirmButton onClick={()=>navigate(-1)}>다른 상품 보러가기</ConfirmButton>
                </ButtonContainer>
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

const Img=styled.img`
margin-top: 0.5rem;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    justify-content: space-between;
    margin-top: 0.5rem;
`;

const CloseButton = styled.div`
display: inline-flex;
padding: 0.5rem 1.5rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.5rem;
border: 1px solid #577D58;
background: #FFF;
color: #577D58;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
width: 100%;
`;

const ConfirmButton = styled(CloseButton)`
background: #577D58;
color: #FFF;
`;
