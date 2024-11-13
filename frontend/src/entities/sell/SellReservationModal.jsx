import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

export default function SellReservationModal({ onClose }) {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setPhoneNumber(value);
    };

    const handleConfirmClick = () => {
        setIsConfirmed(true);
        setTimeout(() => {
            setIsConfirmed(false);
            onClose();
        }, 3000);
    };

    const isButtonActive = phoneNumber.length > 0;

    return (
        <Wrapper>
            {isConfirmed ? (
                <ConfirmationModal onClose={onClose}>신청이 완료되었습니다.</ConfirmationModal>
            ) : (
                <ModalContainer>
                    <Title>신청을 하면 세부 연락을 위해<br/>전화번호가 작성자에게 공개 되어요.</Title>
                    <Content>신청을 위해 전화번호를 남겨주세요.</Content>
                    <Number
                        placeholder="-없이 숫자만 입력해주세요."
                        value={phoneNumber}
                        onChange={handleInputChange}
                    />
                    <ButtonContainer>
                        <CloseButton onClick={() => { onClose(); navigate('/'); }}>다음에 할게요.</CloseButton>
                        <ConfirmButton
                            onClick={handleConfirmClick}
                            isActive={isButtonActive}
                            disabled={!isButtonActive}
                        >
                            네, 신청할게요.
                        </ConfirmButton>
                    </ButtonContainer>
                </ModalContainer>
            )}
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
text-align: center;
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
display: flex;
width: 10.1875rem;
padding: 0.5rem 1.5rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.5rem;
border: 1px solid #577D58;
background: #FFF;
color: #577D58;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

const ConfirmButton = styled(CloseButton)`
border: none;
background: ${({ isActive }) => (isActive ? "#577D58" : "#EEE")};
color: ${({ isActive }) => (isActive ? "white" : "#999999")};
border: none;
cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
`;

const Number = styled.input`
border-radius: 0.75rem;
border: 1px solid #EEE;
background: #FFF;
height: 2.75rem;
color: #999;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
padding: 0.8rem 1.4rem;
width: 85%;
margin-top: 0.9rem;
margin-bottom: 1.3rem;
`