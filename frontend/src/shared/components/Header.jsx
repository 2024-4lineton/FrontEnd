import styled from 'styled-components'
import logo from '../../assets/Header/logo.svg'
import search from '../../assets/Header/search.svg'
import bell from '../../assets/Header/bell.svg'
import cart from '../../assets/Header/cart.svg'
import noti from '../../assets/Header/noti.svg';
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { defaultApi } from '../../apis/utils/Instance'

export default function Header(){

    const navigate = useNavigate();
    const [notiFlag,setNotiFlag] = useState(0);

    useEffect(() => {
        const flag = sessionStorage.getItem('notiflag');
        setNotiFlag(flag);
    }, []);

    const logout = async () => {
      try {
        const response = await defaultApi.post(`api/users/log-out`);
        console.log(response);
        navigate("/");
      } catch(e) {
        console.error(e);
      }
    }

    return(
    <Wrapper>

        <Logo src={logo} onClick={()=>navigate('/')}/>

        <ButtonContainer>
                <p style={{fontSize: "0.1rem"}} onClick={logout}>로그아웃</p>
                <Button src={search} />
                <Button
                    src={notiFlag === "1" ? noti : bell}
                    style={{
                        width: notiFlag === "1" ? '1.6875rem' : '1.5rem',
                        height: notiFlag === "1"  ? '1.6875rem' : '1.5rem',
                    }}
                    onClick={()=>{sessionStorage.setItem('notiflag','0'); navigate('/notification');}}
                />
                <Button
                    src={cart}
                    onClick={() => navigate('/cart')}
                />
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