import styled from 'styled-components';
import nullContainer from '../assets/Sell/nullContainer.svg';
import logo from '../assets/Header/logo.svg';
import close from '../assets/Cart/close.svg';
import Modal from '../entities/sell/Modal';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sell(){

    const [menuName, setMenuName] = useState("");
    const [price, setPrice] = useState("");
    const [sale, setSale] = useState("");
    const [cnt, setCnt] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [menuImg, setMenuImg] = useState(null);
    const navigate = useNavigate("");

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        const isValid = menuName && price && sale && cnt;
    setIsValid(isValid);
    }, [menuName, price, sale, cnt]);

    const handleImgFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            setMenuImg(URL.createObjectURL(file));
        }
    };

    return(<>
    <Header>
            <Logo src={logo} onClick={()=>navigate('/')}/>
            <Button src={close} onClick={openModal}/>
    </Header>
    
    {showModal && (
                <Modal onClose={closeModal} />
    )}

    <Wrapper>
        <Title>판매글 작성하기</Title>
        <ImgContainer onClick={() => document.getElementById('fileInput').click()}>
            <Img src={menuImg || nullContainer}/>
            <FileInput 
                id="fileInput" 
                type="file" 
                accept="image/*" 
                onChange={handleImgFile} 
            />
        </ImgContainer>

        <InputContainer>

            <Intput 
            placeholder='판매할상품(상품명)'
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}/>

            <Intput 
            placeholder='정가(원)'
            value={price}
            onChange={(e) => setPrice(e.target.value)}/>

            <Intput 
            placeholder='할인률(%)'
            value={sale}
            onChange={(e) => setSale(e.target.value)}/>

            <Intput 
            placeholder='잔여수량(개)'
            value={cnt}
            onChange={(e) => setCnt(e.target.value)}/>

        </InputContainer>

        <ButtonContainer>
            <Cancel isValid={isValid} onClick={isValid ? openModal : null}>취소하기</Cancel>
            <Register isValid={isValid}>등록하기</Register>
        </ButtonContainer>
    </Wrapper>
    </>);
}

const Header = styled.div`
display: flex;
    flex-direction: row;
    padding: 1.06rem 1rem 1.11rem 1rem;
    justify-content: space-between;
    border-bottom: 0.0625rem solid #EEE;
`

const Logo = styled.img`
    width: 5.1875rem;
    height: 1.69775rem;
    cursor: pointer;
    margin: 0 auto; /* 로고 가운데 정렬 */
`

const Button = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
`

const Wrapper = styled.div`
height: calc(100vh - 5.88rem);
position: relative;
`

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 1.5rem 0 1rem 1rem;
`

const ImgContainer = styled.div`
width: 100%;
cursor: pointer;
height: 27.5rem;

`

const Img = styled.img`
object-fit: cover;
height: 27.5rem;
width: 100%;

`

const InputContainer = styled.div`
width: 100%;
padding: 1rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
`

const Intput = styled.input`
width: 100%;
background: #F8F8F8;
border-radius: 0.5rem;
border: 1px solid #EEE;
height: 2.7475rem;
outline: none;
padding: 0.75rem 0 0.8125rem 0.8125rem;

    &:focus {
        border: 1px solid #F07D45;
    }
`

const ButtonContainer = styled.div`
display: flex;
gap: 0.5rem;
padding: 0 1rem;
position: absolute;
bottom: 1.5rem;
width: 100%;
`
const Cancel = styled.div`
display: flex;
height: 3.375rem;
padding: 1.0625rem 0;
width: 100%;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.75rem;
border: 1px solid #EEE;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: ${({ isValid }) => (isValid ? "pointer" : "not-allowed")};
color: ${({ isValid }) => (isValid ? "#F07D45" : "#999")};
background: #FFF;
`

const Register = styled(Cancel)`
background: #EEE;
color: ${({ isValid }) => (isValid ? "#FFF" : "#999")};
background: ${({ isValid }) => (isValid ? "#F07D45" : "#EEE")};
`
const FileInput = styled.input`
    display: none;
`;