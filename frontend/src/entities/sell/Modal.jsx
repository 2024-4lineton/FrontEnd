import styled from "styled-components";
import deleteIcon from '../../assets/Sell/delete.svg';
import { useNavigate } from "react-router-dom";

export default function CartModal({onClose}) {

    const navigate = useNavigate('');

    return (
        <Wrapper>
            <ModalContainer>
                <Title>지금 작성 중인 글을 취소하시면<br/>
                변경사항은 저장되지 않아요.</Title>
                <Content>정말로 취소하시겠어요?</Content>
                <Img src={deleteIcon}/>
                <ButtonContainer>
                    <CloseButton onClick={()=>navigate(-1)}>네, 취소해주세요.</CloseButton>
                    <ConfirmButton onClick={onClose}>아니요, 계속 쓸게요.</ConfirmButton>
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
padding: 0.5rem 0;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.5rem;
border: 1px solid #EEE;
background: #FFF;
color:#2D2F2D;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
width: 100%;
`;

const ConfirmButton = styled(CloseButton)`
background: #2D2F2D;
color: #FFF;
`;
