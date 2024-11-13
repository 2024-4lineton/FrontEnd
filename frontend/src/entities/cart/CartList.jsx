import styled from "styled-components";
import icon from '../../assets/Cart/graycheckbox.svg';
import close from '../../assets/Cart/close.svg';
import trash from '../../assets/Cart/trash.svg';
import { hoverGrow } from "../../shared/animation/hoverGrow";
import blackicon from '../../assets/Cart/blackcheckbox.svg';

export default function CartList({index, item}){
    return(
    <Wrapper>
        <IconContainer>
            <Icon src={icon}/>
            <Icon src={close}/>
        </IconContainer>

        <MenuContainer>
            <div style={{paddingTop:"0.37rem", gap:"0.5rem", display:"flex", flexDirection:"column"}}>
            <Name>{item.name}</Name>
            <Menu>{item.menu}</Menu>
            <Price>가격 : {item.price}원</Price>
            </div>

            <Img src={item.img}/>
        </MenuContainer>

        <div style={{display: "flex", justifyContent:"space-between", alignItems:"center", marginTop:"1rem"}}>
            <Trash src={trash}/>
            <Price style={{color:"#D24C49", fontSize:"1.25rem", fontWeight:"600"}}>{item.price}원</Price>
        </div>
        
    </Wrapper>
    );
}

const Wrapper = styled.div`
height: 11.8125rem;
border-bottom: solid 0.0625rem #EEE; 
padding: 1rem 0.75rem;
`

const Icon = styled.img`
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
`

const IconContainer = styled.div`
display: flex;
justify-content: space-between;
`

const MenuContainer = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
justify-content: space-between;
padding-top: 0.75rem;
`

const Font = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Name = styled(Font)`

`

const Menu = styled(Font)`
font-weight: 400;`

const Price = styled(Font)`
font-weight: 400;`

const Img = styled.img`
width: 5.5rem;
height: 5.3125rem;
border-radius: 0.25rem;
object-fit: cover;
`

const Trash = styled.img`
width: 116px;
height: 32px;
cursor: pointer;
${hoverGrow}
`