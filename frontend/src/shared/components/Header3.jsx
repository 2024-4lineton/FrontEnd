import logo from '../../assets/Header/logo.svg'
import search from '../../assets/Header/search.svg'
import bell from '../../assets/Header/bell.svg'
import close from '../../assets/Cart/close.svg';
import back from '../../assets/TraditionalMarket/arrow.svg'
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function Header3(){
    const navigate=useNavigate("");

    return(
    <Wrapper>
            <Button src={back} onClick={()=>navigate(-1)}/>
            <Logo src={logo} onClick={()=>navigate('/')}/>
            <Button src={close} onClick={()=>navigate('/')}/>

    </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.06rem 1rem 1.11rem 1rem;
    justify-content: space-between;
    border-bottom: 0.0625rem solid #EEE;
`

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