import logo from '../../assets/Header/logo.svg'
import back from '../../assets/TraditionalMarket/arrow.svg'
import pin from '../../assets/Main/location.svg'
import profile from '../../assets/Header/profileIcon.svg';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function Header2(){
    const navigate=useNavigate("");

    return(
    <Wrapper>
            <Button src={back} onClick={()=>navigate(-1)}/>
            <LogoContainer>
                <Logo src={logo} onClick={() => navigate('/')} />
            </LogoContainer>
            <div style={{display:"flex", gap:"1.25rem"}}>
                <Button src={pin}/>
                <Button src={profile}/>
            </div>

    </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.06rem 1rem 1.11rem 1rem;
    justify-content: space-between;
    border-bottom: 0.0625rem solid #EEE;
    position: relative;
`

const LogoContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;


const Logo = styled.img`
    width: 5.1875rem;
    height: 1.69775rem;
    cursor: pointer;
`

const Button = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
`