import styled from "styled-components";
import menu1 from "../../assets/Main/menu2.svg";
import cart from "../../assets/Main/cartIcon.svg";
import { hoverGrow } from "../../shared/animation/hoverGrow";

export default function RecommendContainer(){

    return(
        <Wrapper>
            <MenuContainer>
                <MenuImg src={menu1}/>
            </MenuContainer>

            <ContentContainer>
                <MarketName>장터국밥</MarketName>
                <MenuName>순댓국 1인분(밥 포함)</MenuName>
                <PriceContainer>
                    <Sale>40%</Sale>
                    <Price>7,200원</Price>
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
