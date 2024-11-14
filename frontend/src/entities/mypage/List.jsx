import styled from "styled-components";
import menu from '../../assets/TraditionalMarket/menu.svg';

export default function List(){
    return(
        <Wrapper>

        <Img src={menu}/>

        <Content>
            <Name>돈암김밥</Name>
            <MenuName>원조김밥</MenuName>
            <Info>
                <Count>잔여수량 2개&nbsp;&nbsp;•</Count>
                <Reservation>&nbsp;&nbsp;현재 예약자 2명</Reservation>
            </Info>
        </Content>

    </Wrapper>
    );
}


const Wrapper = styled.div`
display: flex;
gap: 1.5rem;
width: 100%;
cursor: pointer;
padding: 0.3rem;
transition: background-color 0.3s;
    &:hover {
        background-color: #FFFFFF;
    }
border-radius: 0.5rem;
`

const Img = styled.img`
width: 6.9375rem;
height: 6.75rem;
border-radius: 0.5rem;
object-fit: cover;
`

const Content = styled.div`
width: 100%;
display: flex;
    flex-direction: column;
    justify-content: center;
`

const Name = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 0.25rem;
`

const MenuName = styled.div`
font-weight: 400;
margin-top: 0.25rem;
`

const Info = styled.div`
    display: flex;
    margin-top: 0.75rem;
    align-items: center;
`

const Count = styled.div`
color: #333;
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Reservation = styled(Count)``