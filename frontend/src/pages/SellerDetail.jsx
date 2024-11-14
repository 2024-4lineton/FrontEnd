import styled from 'styled-components';
import nullContainer from '../assets/Sell/nullContainer.svg';
import Modal from '../entities/sell/Modal';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../shared/components/Header3';
import menu from '../assets/TraditionalMarket/menu.svg';
import { hoverGrow } from '../shared/animation/hoverGrow';
import List from '../entities/sell/ReservationList';

export default function SellerDetail(){

    const [name, setName] = useState("돈암김밥");
    const [menuName, setMenuName] = useState("원조김밥");
    const [origin, setOrigin] = useState("5,000");
    const [price, setPrice] = useState("2,500");
    const [sale, setSale] = useState("50");
    const [cnt, setCnt] = useState("2");
    const [menuImg, setMenuImg] = useState(menu);
    const navigate = useNavigate("");
    const [reservation, setReservation] = useState(["1","2","3"]);

    return(<>
    <Header/>
    <Wrapper>
        <Title>{name}</Title>
        <ImgContainer>
            <Img src={menuImg}/>
        </ImgContainer>

        <MenuContainer>
            <MenuName>{menuName}</MenuName>
            <Container>
               <PriceContainer>
                    <Sale>{sale}%</Sale>
                    <Origin>{origin}</Origin>
                    <Price>{price}원</Price>
                </PriceContainer> 
            </Container>

            <LineContainer>
            <LeftCnt>잔여수량 {cnt}개</LeftCnt>
            <Button>편집하기</Button>
            </LineContainer>
        </MenuContainer>

        <Line/>
        <ReservationTitle>예약자 리스트</ReservationTitle>
        <ReservationContainer>
        {reservation.map((item, index) => (
                        <List key={index} />
                    ))}
        </ReservationContainer>

    </Wrapper>
    </>);
}

const Font = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`


const Wrapper = styled.div`
position: relative;

`

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 1.5rem 0 1rem 0;
text-align:center;
`

const ImgContainer = styled.div`
width: 100%;
height: 27.5rem;

`

const Img = styled.img`
object-fit: cover;
height: 27.5rem;
width: 100%;

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
font-family: Pretendard;
font-size: 1rem;
`

const Origin = styled(Font)`
align-self: flex-end; 
text-decoration: line-through;
`

const Button= styled.div`
border-radius: 0.5rem;
background: #2D2F2D;
display: inline-flex;
padding: 0.5rem 2.25rem;
justify-content: center;
align-items: center;
color: #FFF;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
${hoverGrow}
`

const LineContainer = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
width: 100%;
`

const Line = styled.div`
height: 0.0625rem;
background: #EEE;
width: 100%;
`

const ReservationContainer = styled.div`
    width: 100%;
    padding: 0.75rem 1rem;
`

const ReservationTitle = styled(Font)`
font-size: 1.25rem;
font-weight: 600;
margin: 1.75rem 0 0 1rem;
`