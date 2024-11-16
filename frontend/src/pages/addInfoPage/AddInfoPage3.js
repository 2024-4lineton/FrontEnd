import styled from "styled-components";
import AddInfoFrame from "../../entities/addInfo/AddInfoFrame";
import NonCheckImg from "../../assets/AddInfo/nonCheckIcon.svg";
import CheckedImg from "../../assets/AddInfo/checkedIcon.svg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfo } from "../../shared/state/userInfo";
import { defaultApi } from "../../apis/utils/Instance";
import { userToken } from "../../shared/state/token";
import defaultProfileImg from "../../assets/AddInfo/defaultProfileImg.svg";

export default function AddInfoPage3() {
  const [allAgree, setAllAgree] = useState(false);
  // const [ToS,SetToS] = useState(true);
  // const [privacyPolicy, setPrivacyPolicy] = useState(true);
  // const [LBS,SetLBS] = useState(true);
  const [marketingPolicy, setMarketingPolicy] = useState(false);
  const [user, setUser] = useRecoilState(userInfo);
  const token = useRecoilValue(userToken);
  const navigate = useNavigate();

  const selectAllAgree = () => {
    setAllAgree(prev => !prev);
  }

  useEffect(() => {
    if(allAgree) {
      setMarketingPolicy(true);
      setUser((prev) => ({
        ...prev,
        marketingPolicy: true
      }))
    } else {
      setMarketingPolicy(false);
      setUser((prev) => ({
        ...prev,
        marketingPolicy: false
      }))
    }
  }, [allAgree]);

  const postUserInfoHandler = async () => {
    const formData = new FormData();

    // Recoil 상태(userInfo)에서 데이터 추가
    formData.append("nickname", user.nickname);
    formData.append("phone", user.phone);
    formData.append("birth", user.birth);
    formData.append("gender", user.gender);
    formData.append("activityLocation", user.activityLocation || "");
    formData.append("foodCategory", user.foodCategory || "");
    formData.append("privacyPolicy", user.privacyPolicy);
    formData.append("marketingPolicy", user.marketingPolicy);
    formData.append("ToS", user.ToS);
    formData.append("LBS", user.LBS);

    if (user.profileImg && user.profileImg !== defaultProfileImg) {
      const imgFile = await fetch(user.profileImg).then((res) => res.blob());
      formData.append("profileImg", imgFile, "profile.png");
    }

    const result = await defaultApi.post(`/api/userInfo/register`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

    return result;
  }

  const nextButtonHandler = async () => {
    try {
      const response = await postUserInfoHandler();
      console.log(response);

      if(response.status === 200) {
        navigate("/");
      }
    } catch(error) {
      console.error(error);
    }
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