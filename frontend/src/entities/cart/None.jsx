import img from '../../assets/Cart/magnifier.svg';
import styled from 'styled-components';
import {hoverGrow} from '../../shared/animation/hoverGrow';

export default function None(){
    return(
    <Wrapper>
        <Img src={img}/>
        <Content>장바구니가 비어있어요.<br/>마음에 드는 상품을 담아보세요!</Content>
        <Button>판매 상품 보러가기</Button>
    </Wrapper>);
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Img = styled.img`
width: 6.9375rem;
height: 6.9375rem;
margin-bottom: 0.73rem;
margin-top: 20%;
`

const Content = styled.div`
text-align:center;
color: #999;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Button = styled.div`
display: inline-flex;
padding: 0.5rem 1rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.5rem;
background: #577D58;
color: #FFF;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
margin-top: 0.75rem;
${hoverGrow}
`