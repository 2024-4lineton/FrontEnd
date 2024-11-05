import styled from 'styled-components';
import Header from '../shared/components/CartHeader'
import Footer from '../entities/main/Footer'
import Checkbox from '../entities/cart/Checkbox';
import icon from '../assets/Cart/graycheckbox.svg';
import {useRecoilValue} from 'recoil';
import { cartState } from '../shared/state/Cart';

export default function CartPage(){


    const cart = useRecoilValue(cartState);

    return(
    <Wrapper>
    <Header/>

    <Title>장바구니</Title>

    <HeaderContainer>
        <CheckContainer>

            <Choice>
                <Icon img src={icon}/>
                <Content>전체선택</Content>
                <Cnt>(2/{cart.length})</Cnt>
            </Choice>

            <Content>선택 상품 삭제</Content>

        </CheckContainer>
    </HeaderContainer>

    <CheckboxContainer>
        <Checkbox/>
    </CheckboxContainer>

    <FooterWrapper>
    <Footer/>
    </FooterWrapper>
    
    </Wrapper>
    );
}

const Wrapper = styled.div`
height: 100vh;
position: relative;
`
const FooterWrapper = styled.div`
position: absolute;
bottom:0;
width: 100%;
`

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 1.5rem 0 0 1rem;
`

const CheckboxContainer = styled.div`
padding: 0rem 1rem 1rem 1rem;
height: calc(100% - 21.375rem - 24px - 0.5rem);
overflow-y: auto;
`

const HeaderContainer = styled.div`
border-bottom: solid 0.0625rem #EEE;
margin: 0 1rem;
`

const CheckContainer = styled.div`
margin-top: 0.5rem;
padding: 0 0.75rem 0.5rem 0.75rem;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
`

const Icon = styled.img`
width: 1.5rem;
height: 1.5rem;
`

const Content = styled.div`
color: #999;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Choice = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`

const Cnt = styled.div`
color: #999;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`