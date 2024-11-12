import styled from "styled-components";
import call from '../../assets/Community/call.svg';

export default function ConfirmationModal() {


    return (
        <Wrapper>
            <ModalContainer>
                    <Title style={{fontWeight:"600"}}>신청이 완료되었어요!</Title>
                    <Content>연락처가 작성자에게 공개되어,<br/>곧 연락이 갈 예정이니 잠시만 기다려주세요.</Content>
                    <Img src={call}/>
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
margin-top: 1.5rem;
`