import Header2 from "../shared/components/Header2";
import styled from "styled-components";
import profile from '../assets/MarketRegistration/profileImg.svg';
import Footer from "../entities/main/Footer";
import check from "../assets/Resgistration/checkcircle.svg";
import info from "../assets/Resgistration/infocircle.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function MarketRegistration() {
    const navigate = useNavigate('');
    const day = ["일", "월", "화", "수", "목", "금", "토"];
    const [storeName, setStoreName] = useState("");
    const [category, setCategory] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [selectedOpenTime, setSelectedOpenTime] = useState("");
    const [selectedClosedTime, setSelectedClosedTime] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [traditionalMarketName, setTraditionalMarketName] = useState("");
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categoryOptions = ["전통시장", "골목시장", "브랜드"];

    const handleDayClick = (day) => {
        setSelectedDays((prevSelectedDays) =>
            prevSelectedDays.includes(day)
                ? prevSelectedDays.filter((d) => d !== day)
                : [...prevSelectedDays, day]
        );
    };

    const handleTimeChange = (event) => {
        let value = event.target.value;
        if (value.length > 2) {
            value = value.slice(0, 2);
        }
        event.target.value = value.replace(/\D/g, "");
    };

    const handleContent = () => {
        setStoreName("");
        setCategory("");
        setPhoneNumber("");
        setAddress("");
        setSelectedOpenTime("");
        setSelectedClosedTime("");
        setSelectedDays([]);
        setIsFormComplete(false);
        document.querySelectorAll("input[placeholder='00']").forEach((input) => {
            input.value = "00";
        });
    };

    useEffect(() => {
        const isComplete =
            storeName &&
            category &&
            phoneNumber &&
            address &&
            selectedDays.length > 0 &&
            selectedOpenTime &&
            selectedClosedTime;
        setIsFormComplete(isComplete);
    }, [storeName, category, phoneNumber, address, selectedDays, selectedOpenTime, selectedClosedTime]);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

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
                <DropdownContainer>
                    <DropdownHeader onClick={toggleDropdown}>
                        {category || "가게 분류를 위해 업태 종류를 선택해주세요."}
                    </DropdownHeader>
                    {isDropdownOpen && (
                        <DropdownList>
                            {categoryOptions.map((option, index) => (
                                <DropdownItem
                                    key={index}
                                    onClick={() => {
                                        setCategory(option);
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    {option}
                                </DropdownItem>
                            ))}
                        </DropdownList>
                    )}
                </DropdownContainer>

                {category === "전통시장" && (
                    <div style={{ display: "flex", gap: "0.5rem", width: "100%" }}>
                        <Input
                            placeholder="입점하고 계신 전통시장의 이름을 입력해주세요."
                            value={traditionalMarketName}
                            onChange={(e) => setTraditionalMarketName(e.target.value)}
                            style={{ width: "78%" }}
                        />
                        <SubmitButton>등록</SubmitButton>
                    </div>
                )}

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
                    onClick={()=>navigate('/')}
                >
                    등록하기
                </RegisterButton>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Xbutton onClick={() => handleContent()}>X 취소하기</Xbutton>
                </div>

                <InfoContainer>
                    <Font>서비스 설정</Font>
                    <InfoOption>로그아웃</InfoOption>
                    <InfoOption>자주 묻는 질문</InfoOption>
                    <InfoOption>고객센터</InfoOption>
                    <InfoOption>제작자</InfoOption>
                </InfoContainer>
            </Wrapper>
            <Footer />
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
margin-top: 0.5rem;
font-size: 0.75rem;
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

const DropdownContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 0.5rem;
    font-size: 0.8rem;
`;

const DropdownHeader = styled.div`
    padding: 0.75rem;
    border: 1px solid #EEE;
    border-radius: 0.5rem;
    background-color: #FFF;
    cursor: pointer;
    color: #999;
    &:hover {
        border: 1px solid #F07D45;
    }
`;

const DropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #EEE;
    border-radius: 0.5rem;
    background-color: #FFF;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const DropdownItem = styled.li`
    padding: 0.75rem;
    cursor: pointer;
    font-size: 0.85rem;
    &:hover {
        background-color: #F07D45;
        color: #FFF;
        border-radius: 0.5rem;
    }
`;

const SubmitButton = styled.div`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: inline-flex;
  height: 2.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ disabled }) => (disabled ? "#EEE" : "#F07D45")};
  margin-top: 0.5rem;
  padding: 0 1.56rem;
  color: ${({ disabled }) => (disabled ? "#999" : "#FFF")};
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;