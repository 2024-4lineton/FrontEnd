import Header from '../shared/components/Header2'
import styled from 'styled-components';
import shop from '../assets/CompanyCertification/shopIcon.svg';
import infoCircle from '../assets/CompanyCertification/infocircle.svg';
import checkCircle from '../assets/CompanyCertification/checkcircle.svg';
import { useState } from 'react';

export default function CompanyCertification() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [businessNumber, setBusinessNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [certificationMessage, setCertificationMessage] = useState(""); 
    const [certificationSuccess, setCertificationSuccess] = useState(false); 

    const isFormValid = input1.length === 3 && input2.length === 2 && input3.length === 5;

    const handleCertification = async () => {
        if (isFormValid) { 
            const businessNumber = `${input1}${input2}${input3}`;
            setBusinessNumber(businessNumber);

            try {
                setIsLoading(true);
                setError(null);

                // 사업자 조회 API 호출
                const response = await fetch(
                    `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=pXvW8UEeqjR5ndDrl5ebPKro%2FD3b0s3Yyjqo18NIUHLeKlbNLqxUdZugFXIdGEMH2wX7jKN4kjTrnL16EMBnHA%3D%3D`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ b_no: [businessNumber] }),
                    }
                );

                if (!response.ok) {
                    throw new Error('사업자 정보 조회에 실패했습니다.');
                }

                const data = await response.json();
                if (data && data.data && data.data[0].b_stt_cd === "01") {
                    setCertificationMessage("인증이 완료되었어요.");
                    setCertificationSuccess(true); // 성공 시 상태 변경
                } else {
                    setCertificationMessage("유효하지 않은 번호예요. 다시 입력해주세요.");
                    setCertificationSuccess(false); // 실패 시 상태 변경
                }
            } catch (err) {
                setError(err.message); 
                setCertificationMessage(`에러 발생: ${err.message}`);
                setCertificationSuccess(false);
            } finally {
                setIsLoading(false);
            }
        }
    };


    const handleCancel = () => {
        setInput1("");
        setInput2("");
        setInput3("");
        setCertificationMessage("");
        setCertificationSuccess(false);
    };


    return (
        <>
            <Header />
            <Wrapper>
                <Title>사업자 인증을 시작할게요.</Title>
                <Title>인증을 위해 사업자 번호를 등록해주세요.</Title>
                <Title style={{ fontSize: "1rem", fontWeight: "400", color: "#999" }}>
                    인증을 완료한 후 가게를 등록할 수 있어요.
                </Title>

                <Title style={{ marginTop: "4.5rem", marginBottom: "0.75rem" }}>사업자등록번호</Title>
                <Container>
                    <Input
                        placeholder="000"
                        maxLength="3"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />-
                    <Input
                        placeholder="00"
                        maxLength="2"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />-
                    <Input
                        placeholder="00000"
                        maxLength="5"
                        value={input3}
                        onChange={(e) => setInput3(e.target.value)}
                    />

                    <CertificationButton onClick={handleCertification} isActive={isFormValid} disabled={!isFormValid}>
                        인증
                    </CertificationButton>

                    
                </Container>
                {certificationMessage && (
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "1rem", gap:"0.5rem" }}>
                        <Icon src={certificationSuccess ? checkCircle : infoCircle} />
                        <Message isSuccess={certificationSuccess}>{certificationMessage}</Message>
                    </div>
                )}

                <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "15%" }}>
                    <Img src={shop} />
                </div>

                <div style={{ display: "flex", position: "absolute", bottom: "0", width: `calc(100% - 2rem)`, justifyContent: "center" }}>
                    <RegisterButton isActive={isFormValid}>다음</RegisterButton>
                    <CancelButton onClick={handleCancel}> X 취소하기</CancelButton>
                </div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
padding: 2.5rem 1rem 0 1rem;
position: relative;
height: calc(100vh - 3.875rem);
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
justify-content: space-between;
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
        width: 20%;
    }
    &:nth-child(2) {
        width: 15%;
    }
    &:nth-child(3) {
        width: 30%;
    }
    
    &[data-index="1"] { max-length: 3; }
    &[data-index="2"] { max-length: 2; }
    &[data-index="3"] { max-length: 5; }

    &:invalid {
        box-shadow: none;
    }
`;

const CertificationButton = styled(Font)`
    width: 5rem;
    color: #999;
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 0.5rem;
    background: ${({ isActive }) => (isActive ? "#2D2F2D" : "#EEE")}; 
    display: flex;
    padding: 0.8125rem 1.5625rem 0.75rem 1.5625rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${({ isActive }) => (isActive ? "#ffffff" : "#999999")};
`;


const RegisterButton = styled.div`
cursor: pointer;
position: absolute;
bottom: 4.94rem;
width: 100%;
display: flex;
height: 2.75rem;
justify-content: center;
align-items: center;
flex-shrink: 0;
color: #999999;
border-radius: 0.5rem;
background: #EEE;
color: "#999999"
background: "#EEE"
`

const CancelButton = styled.div`
position: absolute;
bottom: 1.75rem;
color: #999;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor:pointer;
`

const Img = styled.img`
width: 12.4375rem;
height: 12.4375rem;
`

const Message = styled.div`
    text-align: center;
    color: ${({ isSuccess }) => (isSuccess ? "#2D2F2D" : "#D24C49")};
    font-size: 1rem;
    font-weight: 500;
`;

const Icon = styled.img`

`
