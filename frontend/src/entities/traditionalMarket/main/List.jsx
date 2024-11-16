import styled from "styled-components";

export default function List({item, onClick}){


    return(
    <Wrapper onClick={onClick}>
        <Img src={item.imgUrl}/>
        <Content>
            <Name>{item.shopName}</Name>
            <Intro>{item.description}</Intro>
            <Info>
                <div>{item.distance}</div>
                <div>|</div>
                <div>상품 {item.productCount}개</div>
            </Info>
        </Content>
    </Wrapper>
    );
}

const Wrapper = styled.div`
width: 100%;
display: flex;
gap: 1.5rem;
cursor: pointer;
padding-left: 0.8rem;
border-radius: 0.5rem;
padding-top: 0.8rem;
padding-bottom: 0.8rem;
    transition: background-color 0.3s;
    &:hover {
        background-color: #FFFFFF;
    }
`

const Img = styled.img`
width: 5.5rem;
height: 5.5rem;
fit-content
flex-shrink: 0;
border-radius: 6.1875rem;
border: 1px solid #EEE;
object-fit: cover;
`

const Content = styled.div`
padding-top: 0.5rem;
`

const Name = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom:0.5rem;
`

const Intro = styled(Name)`
font-weight: 400;
margin-bottom: 1.25rem;
`

const Info = styled.div`
color: #999;
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
display: flex;
gap: 0.5rem;
`