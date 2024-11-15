import styled from "styled-components";
import AddInfoFrame from "../../entities/addInfo/AddInfoFrame";
import NonCheckImg from "../../assets/AddInfo/nonCheckIcon.svg";
import CheckedImg from "../../assets/AddInfo/checkedIcon.svg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddInfoPage3() {
  const [allAgree, setAllAgree] = useState(false);
  // const [ToS,SetToS] = useState(true);
  // const [privacyPolicy, setPrivacyPolicy] = useState(true);
  // const [LBS,SetLBS] = useState(true);
  const [marketingPolicy, setMarketingPolicy] = useState(false);
  const navigate = useNavigate();

  const selectAllAgree = () => {
    setAllAgree(prev => !prev);
  }

  useEffect(() => {
    if(allAgree) {
      setMarketingPolicy(true);
    } else {
      setMarketingPolicy(false);
    }
  }, [allAgree]);

  const nextButtonHandler = () => {
    navigate("/");
  }

  return (
    <AddInfoFrame allSelected nextButtonHandler={nextButtonHandler}>
      <TermsContainer>
        <TermsTextContainer>
          {allAgree ? <img src={CheckedImg} alt="checkImg" onClick={selectAllAgree} /> : <img src={NonCheckImg} alt="checkImg" onClick={selectAllAgree} />}
          <TermsText>모두 동의합니다.</TermsText>
        </TermsTextContainer>
        <div style={{height: "1px", backgroundColor: "#EEE"}} />
        <TermsTextContainer>
          {/* {ToS ? <img src={CheckedImg} alt="checkImg" /> : <img src={NonCheckImg} alt="checkImg" />} */}
          <img src={CheckedImg} alt="checkImg" /> 
          <TermsText>이용약관</TermsText>
          <OptionalText>(필수)</OptionalText>
        </TermsTextContainer>
        <TermsTextContainer>
          {/* {privacyPolicy ? <img src={CheckedImg} alt="checkImg" /> : <img src={NonCheckImg} alt="checkImg" />} */}
          <img src={CheckedImg} alt="checkImg" /> 
          <TermsText>개인정보 취급방침</TermsText>
          <OptionalText>(필수)</OptionalText>
        </TermsTextContainer>
        <TermsTextContainer>
          {/* {LBS ? <img src={CheckedImg} alt="checkImg" /> : <img src={NonCheckImg} alt="checkImg" />} */}
          <img src={CheckedImg} alt="checkImg" /> 
          <TermsText>위치기반 서비스 이용약관</TermsText>
          <OptionalText>(필수)</OptionalText>
        </TermsTextContainer>
        <TermsTextContainer>
          {marketingPolicy ? <img src={CheckedImg} alt="checkImg" /> : <img src={NonCheckImg} alt="checkImg" />}
          <TermsText>마케팅 활용 및 서비스 관련 정보 수신 동의</TermsText>
          <OptionalText>(선택)</OptionalText>
        </TermsTextContainer>
      </TermsContainer>
    </AddInfoFrame>
  )
}

const TermsContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 60%;
`

const TermsTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const TermsText = styled.p`
  margin: 0;
  color: #333;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const OptionalText = styled.p`
  color: #577D58;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`