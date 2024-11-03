import styled from 'styled-components'
import logo from '../../assets/Header/logo.svg'
import search from '../../assets/Header/search.svg'
import bell from '../../assets/Header/bell.svg'
import cart from '../../assets/Header/cart.svg'
import {useNavigate} from 'react-router-dom';

export default function Header(){

    const navigate=useNavigate("");

    return(
    <Wrapper>

        <Logo src={logo} onClick={()=>navigate('/')}/>

        <ButtonContainer>
            <Button src={search}/>
            <Button src={bell}/>
            <Button src={cart}/>
        </ButtonContainer>

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

const ButtonContainer = styled.div`
    display:flex;
    gap:1.25rem;
`