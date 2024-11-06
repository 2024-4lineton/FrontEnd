import Header2 from "../shared/components/Header2";
import styled from "styled-components";
import profile from '../assets/MarketRegistration/profileImg.svg';
import Footer from "../entities/main/Footer";
import { useState, useEffect } from "react";

export default function MarketRegistration(){

    const day = ['일', '월', '화', '수', '목', '금', '토'];
    const [storeName, setStoreName] = useState("");
    const [category, setCategory] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [selectedOpenTime, setSelectedOpenTime] = useState("");
    const [selectedClosedTime, setSelectedClosedTime] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [isFormComplete, setIsFormComplete] = useState(false);

    const handleDayClick = (day) => {
        setSelectedDays((prevSelectedDays) =>
            prevSelectedDays.includes(day)
                ? prevSelectedDays.filter((d) => d !== day)
                : [...prevSelectedDays, day]
        );
    };

    // 시간 제어 함수
    const handleTimeChange = (event) => {
        let value = event.target.value;
        if (value.length > 2) {
            value = value.slice(0, 2);
        }
        event.target.value = value.replace(/\D/g, '');
    };

    const handleContent =(event) => {
        setStoreName(""); setCategory(""); setPhoneNumber(""); setAddress(""); setSelectedOpenTime("");
        setSelectedClosedTime(""); setSelectedDays("");setIsFormComplete("");
    }

    // 모든 필수 입력 항목이 입력되었는지 확인
    useEffect(() => {
        const isComplete = storeName && category && phoneNumber && address && selectedDays.length > 0 
            && selectedOpenTime && selectedClosedTime;
        setIsFormComplete(isComplete);
    }, [storeName, category, phoneNumber, address, selectedDays, selectedOpenTime, selectedClosedTime]);

    return (
        <>
            <Header2 />
            <Wrapper>
                <Title>가게 등록을 시작할게요.</Title>
                <Subtitle>아래부터 차근차근 입력해주세요.</Subtitle>

                <ProfileContainer>
                    <ProfileImg src={profile} />
                    <Content>가게 프로필 등록하기</Content>
                </ProfileContainer>

                <Title style={{ marginTop: "2.25rem" }}>상호명</Title>
                <Input
                    placeholder="상호명을 입력해주세요."
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                />

                <Title style={{ marginTop: "1.25rem" }}>카테고리</Title>
                <Input
                    placeholder="가게 분류를 위해 업태 종류를 선택해주세요."
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <Title style={{ marginTop: "1.25rem" }}>가게 전화번호</Title>
                <Input
                    placeholder="-없이 숫자만 입력해주세요."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <Title style={{ marginTop: "1.25rem" }}>휴무일</Title>
                <ButtonContainer>
                    {day.map((d, index) => (
                        <Button
                            key={index}
                            selected={selectedDays.includes(d)}
                            onClick={() => handleDayClick(d)}
                        >
                            {d}
                        </Button>
                    ))}
                </ButtonContainer>
                <Info>휴무일을 모두 선택해주세요.</Info>

                <Title style={{ marginTop: "1.25rem" }}>영업 시간 설정</Title>

                <Div style={{ marginTop: "0.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ marginRight: "1rem" }}>오픈</div>
                            <OptionContainer>
                                <Option
                                    selected={selectedOpenTime === "오전"}
                                    onClick={() => setSelectedOpenTime("오전")}
                                >
                                    오전
                                </Option>
                                <Option
                                    selected={selectedOpenTime === "오후"}
                                    onClick={() => setSelectedOpenTime("오후")}
                                >
                                    오후
                                </Option>
                            </OptionContainer>
                        </div>

                        <TimeContainer>
                            <Time placeholder="00" onChange={handleTimeChange} />:
                            <Time placeholder="00" onChange={handleTimeChange} />
                        </TimeContainer>
                    </div>
                </Div>

                <Div style={{ marginTop: "0.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ marginRight: "1rem" }}>마감</div>
                            <OptionContainer>
                                <Option
                                    selected={selectedClosedTime === "오전"}
                                    onClick={() => setSelectedClosedTime("오전")}
                                >
                                    오전
                                </Option>
                                <Option
                                    selected={selectedClosedTime === "오후"}
                                    onClick={() => setSelectedClosedTime("오후")}
                                >
                                    오후
                                </Option>
                            </OptionContainer>
                        </div>

                        <TimeContainer>
                            <Time placeholder="00" onChange={handleTimeChange} />:
                            <Time placeholder="00" onChange={handleTimeChange} />
                        </TimeContainer>
                    </div>
                </Div>

                <Title style={{ marginTop: "2.25rem" }}>주소 입력</Title>
                <Input
                    placeholder="가게의 주소를 입력해주세요."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <RegisterButton
                    disabled={!isFormComplete}
                    style={{
                        background: isFormComplete ? "#F07D45" : "#EEE",
                        color: isFormComplete ? "#FFF" : "#999",
                        cursor: isFormComplete ? "pointer" : "not-allowed",
                    }}
                >
                    등록하기
                </RegisterButton>
                <div style={{width: "100%", display:"flex", justifyContent:"center"}}>
                    <Xbutton onClick={()=>{handleContent()}}>X 취소하기</Xbutton>
                </div>

    <InfoContainer>
        <Font>서비스 설정</Font>
        <InfoOption>로그아웃</InfoOption>
        <InfoOption>자주 묻는 질문</InfoOption>
        <InfoOption>고객센터</InfoOption>
        <InfoOption>제작자</InfoOption>
    </InfoContainer>
    
    </Wrapper>
    <Footer/>

    

    </>
    );
}

const Font = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Title = styled(Font)``
const Subtitle = styled(Font)`
color: #999;
font-size: 1rem;
font-weight: 400;
margin-top: 0.25rem;
`

const Wrapper = styled.div`
padding: 2.5rem 1rem 0 1rem;
`

const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
margin-top:2.5rem;
cursor: pointer;
`

const ProfileImg = styled.img`
width: 7.5rem;
height: 7.5rem;
border-radius: 6.1875rem;
`

const Content = styled(Font)`
font-size: 1rem;
`

const Input = styled.input`
padding: 0.75rem 0.81rem;
width: 100%;
align-items: center;
border-radius: 0.5rem;
background: #FFF;
border: none;
margin-top: 0.5rem;
color: #999;
font-family: Pretendard;
font-style: normal;
font-weight: 400;
line-height: normal;
outline: none;
    &:focus {
        border: 1px solid #F07D45;
    }
`

const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 0.12rem;
margin-top: 0.5rem;
`

const Button = styled(Font)`
font-weight: 400;
font-size: 1rem;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
border-radius: 0.25rem;
padding: 0.5rem 0;
background: #FFF;
cursor: pointer;
border: ${({ selected }) => (selected ? "1px solid #F07D45;" : "1px solid #EEE")};
color: ${({ selected }) => (selected ? "#F07D45" : "#999")};
`

const Info = styled(Font)`
color: #999;
font-weight: 400;
font-size: 1rem;
margin-top: 0.5rem;
`

const Div = styled(Font)`
color: #999;
font-size: 1rem;
font-weight: 400;
display: flex;
height: 2.75rem;
align-items: center;
`

const OptionContainer = styled.div`
background: #FFFFFF;
border-radius: 0.5rem;
height: 2.75rem;
display: flex;

`

const Option = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 1.5rem;
cursor: pointer;
border-radius: 0.5rem;
border: ${({ selected }) => (selected ? "1px solid #F07D45;" : "1px solid #EEE")};
color: ${({ selected }) => (selected ? "#F07D45" : "#999")};
`

const TimeContainer = styled(Font)`
color: #999;
font-size: 1rem;
font-weight: 400;
display: flex;
align-items: center;
`

const Time = styled.input`
    display: flex;
    width: 6rem;
    padding: 0.8125rem 0rem 0.75rem 0rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: #FFF;
    border: none;
    text-align: center;
    outline: none;
    &:focus {
        border: 1px solid #F07D45;
    }
  `;

const RegisterButton = styled.div`
cursor: pointer;
display: flex;
width: 100%;
height: 2.75rem;
justify-content: center;
align-items: center;
flex-shrink: 0;
color: #999;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 2.5rem;
background: #EEE;
border-radius: 0.5rem;
`

const InfoOption = styled(Font)`
font-size: 1rem;
font-weight: 400;
cursor: pointer;
`

const InfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1.25rem;
padding: 4.69rem 0 4.25rem 0;
`

const Xbutton = styled.div`
color: #999;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
border-bottom: solid 0.0625rem #999;
width: fit-content;
text-align:center;
margin-top: 1rem;
cursor: pointer;
`