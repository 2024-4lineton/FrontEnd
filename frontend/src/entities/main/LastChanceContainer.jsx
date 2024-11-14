import styled from "styled-components";
import menu1 from "../../assets/Main/menu1.svg";
import cart from "../../assets/Main/cartIcon.svg";
import { hoverGrow } from "../../shared/animation/hoverGrow";
import { useState, useEffect } from "react";

export default function LastChanceContainer({item}){

    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const endTime = new Date("2024-11-02T23:00:00"); //마감 시간 설정 백엔드에서 받기
        const updateTimer = () => {
            const now = new Date();
            const diff = endTime - now;

            if (diff <= 0) {
                setTimeLeft("시간이 종료되었습니다.");
                clearInterval(timerInterval);
            } else {
                const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
                const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
                const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
                setTimeLeft(`${hours} : ${minutes} : ${seconds}`);
            }
        };

        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer();
        return () => clearInterval(timerInterval);
    }, []);

    return(
        <Wrapper>
            <MenuContainer>
                <MenuImg src={item.imgUrl}/>
                <Time>{timeLeft}</Time>
            </MenuContainer>

            <ContentContainer>
                <MarketName>{item.shopName}</MarketName>
                <MenuName>{item.productName}</MenuName>
                <PriceContainer>
                    <Sale>{item.discountPercent}%</Sale>
                    <Price>{item.discountPrice}</Price>
                </PriceContainer>
                <Button>
                    <Cart src={cart}/>
                    <Comment>담기</Comment>
                </Button>
            </ContentContainer>

        </Wrapper>
    );
}

const Wrapper = styled.div`
width: 10.9375rem;
height: auto;
border-radius: 0.5rem;
background: #FFF;
margin-left: 0.75rem;

`

const MenuImg = styled.img`
width: 100%;
height: 100%;
border-radius: 0.5rem 0.5rem 0 0;
`

const MenuContainer = styled.div`
width : 10.9375rem;
height: 10.9375rem;
position: relative;
border-radius: 0.5rem 0.5rem 0 0;
overflow: hidden;
`

const Time = styled.div`
position: absolute;
background: rgba(45, 47, 45, 0.80);
color: #FFF;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
width: 100%;
bottom: 0.1rem;
text-align: center;
padding: 0.25rem 0;
`

const ContentContainer = styled.div`
    padding: 0.75rem 0.5rem 0.5rem 0.5rem;
`

const MarketName = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const MenuName = styled(MarketName)`
font-size: 0.75rem;
font-weight: 400;
margin-top: 0.5rem;
`;

const PriceContainer = styled.div`
display: flex;
gap: 0.75rem;
margin-top: 0.5rem;
`

const Sale = styled(MarketName)`
    color: #D24C49;
`

const Price = styled(MarketName)``

const Button = styled.div`
border-radius: 0.25rem;
border: 0.8px solid #EEE;
background: #FFF;
width: 100%;
margin-top: 0.75rem;
height: 2rem;
cursor:pointer;
${hoverGrow}
display: flex;
justify-content: center;
align-items: center;
gap: 0.3rem;
`

const Cart = styled.img`
width: 1.24338rem;
height: 1.1875rem;
`

const Comment = styled(MarketName)`
color:#577D58;
`
