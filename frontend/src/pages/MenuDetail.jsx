import styled from "styled-components";
import Header from "../shared/components/Header";
import menu from "../assets/TraditionalMarket/menu.svg";
import back from "../assets/TraditionalMarket/arrow.svg";
import { useNavigate } from "react-router-dom";
import CartModal from "../entities/menuDetail/CartModal";
import ReservationModal from "../entities/menuDetail/ReservationModal";
import { useState, useEffect } from "react";

export default function MenuDetail(){

    const navigate = useNavigate('');
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

    const openCartModal = () => {
        setIsCartModalOpen(true);
    };

    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };

    const openReservationModal = () => {
        setIsReservationModalOpen(true);
    };

    const closeReservationModal = () => {
        setIsReservationModalOpen(false);
    };

    useEffect(() => {
        if (isReservationModalOpen) {
          const timer = setTimeout(() => {
            closeReservationModal();
            navigate('/');
          }, 3000);
    
          return () => clearTimeout(timer);
        }
      }, [isReservationModalOpen, navigate]);

    return(
    <Wrapper>

        <Header/>

        <TitleContainer onClick={()=>navigate(-1)}>
            <Icon src={back}/>
            <Name>돈암김밥</Name>
        </TitleContainer>


        <MenuImg src={menu}/>

        <MenuContainer>
            <MenuName>원조김밥</MenuName>
            <Container>
               <PriceContainer>
                    <Sale>60%</Sale>
                    <Price>2,000원</Price>
                </PriceContainer> 
                <LeftCnt>* 잔여수량 2개</LeftCnt>
            </Container>

            <Info>가게 주소</Info>
            <Address>서울특별시 성북구 삼선교로 01길 001 상가 2층</Address>
        </MenuContainer>

        <ButtonContainer>
            <CartButton onClick={openCartModal}>장바구니</CartButton>
            <ReservationButton onClick={openReservationModal}>예약하기</ReservationButton>
        </ButtonContainer>


        {isCartModalOpen && <CartModal onClose={closeCartModal} />}
        {isReservationModalOpen && <ReservationModal onClose={closeReservationModal} />}
    </Wrapper>);
}

const Wrapper = styled.div`
`

const MenuImg = styled.img`
height: 27.5rem;
width: 100%;
object-fit: cover;
`

const TitleContainer = styled.div`
    display: flex;
    margin: 1.5rem 0 1rem 1rem;
    align-items: center;
    cursor: pointer;
`

const Icon = styled.img`
width: 1.5rem;
height: 1.25rem;
`

const Name = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Font = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const MenuContainer = styled.div`
padding: 1.5rem 1rem;
`
const MenuName = styled(Font)`
margin-bottom: 0.75rem;
`

const Container = styled.div`
display: flex;
justify-content: space-between;
`

const PriceContainer = styled.div`
display: flex;
gap: 0.75rem;
`

const Sale = styled(Font)`
color: #D24C49;
font-size: 1.25rem;
font-weight: 600;
`
const Price = styled(Font)`
font-size: 1.25rem;
font-weight: 600;
`
const LeftCnt = styled.div`
color: #999;
font-family: Pretendard;
font-size: 0.875rem;
`

const Info = styled(Font)`
margin: 2.06rem 0 0.5rem 0;
font-weight: 600;
`

const Address=styled(Font)``

const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 0 1rem 1.5rem 1rem;
margin-top: 9rem;
`

const ReservationButton = styled.div`
display: flex;
width: 49%;
height: 3.375rem;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 0.75rem;
background: #577D58;
color: #FFF;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
`

const CartButton = styled(ReservationButton)`
border: 1px solid #EEE;
background: #FFF;
color: #577D58;

`