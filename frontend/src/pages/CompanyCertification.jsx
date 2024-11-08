import Header from '../shared/components/Header2'
import styled from 'styled-components';

export default function CompanyCertification(){
    return(<>
            <Header/>
                <Wrapper>
                    <Title>사업자 인증을 시작할게요.</Title>
                    <Title>인증을 위해 사업자 번호를 등록해주세요.</Title>
                    <Title style={{fontSize:"1rem", fontWeight:"400", color:"#999"}}>인증을 완료한 후 가게를 등록할 수 있어요.</Title>

                    <Title style={{marginTop:"4.5rem"}}>사업자등록번호</Title>
                    <Container>
                    <Input placeholder='000' maxLength="3"/>-
                    <Input placeholder='00' maxLength="2"/>-
                    <Input placeholder='00000' maxLength="5"/>

                        <CertificationButton>인증</CertificationButton>
                    </Container>

                </Wrapper>
        </>
    );

}

const Wrapper = styled.div`
padding: 2.5rem 1rem;

`

const Font = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Title = styled(Font)`
margin-bottom: 0.25rem;
`

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
gap: 0.5rem;
`

const Input = styled.input`
    display: flex;
    padding: 0.8125rem 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: #FFF;
    color: #999;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    outline: none;
    border: none;

    &:nth-child(1) {
        width: 4rem;
    }
    &:nth-child(2) {
        width: 2.5rem;
    }
    &:nth-child(3) {
        width: 5rem;
    }
    
    &[data-index="1"] { max-length: 3; }
    &[data-index="2"] { max-length: 2; }
    &[data-index="3"] { max-length: 5; }

    &:invalid {
        box-shadow: none;
    }
`;

const CertificationButton = styled(Font)`
color: #999;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
border-radius: 0.5rem;
background: #EEE;
display: flex;
padding: 0.8125rem 1.5625rem 0.75rem 1.5625rem;
justify-content: center;
align-items: center;
cursor: pointer;
`