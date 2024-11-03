import styled from "styled-components";
import globe from '../../assets/Nav/grayglobe.svg';
import pin from '../../assets/Nav/graypin.svg';
import user from '../../assets/Nav/grayuser.svg';
import blackpin from '../../assets/Nav/blackpin.svg';
import blackuser from '../../assets/Nav/blackuser.svg';
import blackglobe from '../../assets/Nav/blackglobe.svg';
import {useNavigate, useLocation} from 'react-router-dom';

export default function Nav(){

    const navigate= useNavigate('');
    const location = useLocation();

    const isCommunitySelected = location.pathname === '/community';
    const isLocalSelected = location.pathname === '/traditional-market' || location.pathname === '/traditional-detail'
            || location.pathname === '/street-market';
    const isMyPageSelected = location.pathname === '/mypage';


    return(
    <Wrapper>
        <Content onClick={() => navigate('/')}>
            <Icon src={isCommunitySelected ? blackglobe : globe}/>
            <Option isSelected={isCommunitySelected}>커뮤니티</Option>
        </Content>
        <Content onClick={()=>navigate('/')}>
            <Icon src={isLocalSelected ? blackpin : pin}/>
            <Option isSelected={isLocalSelected}>내동네</Option>
        </Content>
        <Content onClick={()=>navigate('/')}>
            <Icon src={isMyPageSelected ? blackuser : user}/>
            <Option isSelected={isMyPageSelected}>마이페이지</Option>
        </Content>
    </Wrapper>
    )
}

const Wrapper=styled.div`
background: #FFF;
height: 4.375rem;
padding: 0 1.5rem;
display: flex;
justify-content: space-between;
align-items: center;
`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
cursor: pointer;
gap: 0.5rem;
`

const Icon = styled.img`
width: 1.5rem;
height: 1.5rem;
`

const Option = styled.div`
color: ${({ isSelected }) => (isSelected ? 'black' : '#C2C2C2')};
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`