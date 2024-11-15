import styled from "styled-components";
import AddInfoFrame from "../../entities/addInfo/AddInfoFrame";
import {
  AddInfoCategoryText,
  UserInputField,
  ButtonContainer,
  OptionButton,
} from "../../entities/addInfo/AddInfoStyle";
import ProfileImg from "../../entities/addInfo/ProfileImg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { defaultApi } from "../../apis/utils/Instance";
import AvailableImg from "../../assets/AddInfo/availableImg.svg";
import UnavailableImg from "../../assets/AddInfo/unavailableImg.svg";
import { hoverGrow } from "../../shared/animation/hoverGrow";
import defaultProfileImg from "../../assets/AddInfo/defaultProfileImg.svg";
import { useRecoilState } from "recoil";
import { userInfo } from "../../shared/state/userInfo";

export default function AddInfoPage1() {
  const [duplicationNickname, setDuplicationNickname] = useState(null);
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [allSelected, setAllSelected] = useState(false);
  const [profileImg, setProfileImg] = useState(defaultProfileImg);
  const [user, setUser] = useRecoilState(userInfo);
  const navigate = useNavigate();

  const imgUploadHandler = (e) => {
    const imgFile = e.target.files[0];
    if(imgFile) {
      const reader = new FileReader();

      reader.onloadend = () => { // 콜백함수이기 떄문에 먼저 등록
        setProfileImg(reader.result)
      }

      reader.readAsDataURL(imgFile);
    }
  }

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const confirmDuplicationNickname = async () => {
    try {
      const response = await defaultApi.post(
        `/api/users/nickname`,
        {},
        {
          params: {
            nickname: nickname,
          },
        }
      );
      console.log(response);
      if (response.data === true) {
        setDuplicationNickname(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const userNicknameHandler = (e) => {
    setNickname(e.target.value);
    setDuplicationNickname(null);
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const userBirthHandler = (e) => {
    setBirth(e.target.value);
  };

  const nextButtonHandler = () => {
    if(allSelected) {
      setUser((prevUser) => ({
        ...prevUser,
        profileImg: profileImg,
        nickname: nickname,
        phone: phoneNumber,
        birth: birth,
        gender: selectedGender,
      }));

      navigate("/AddInfo2");
    }
  }

  useEffect(() => {
    if(nickname.length>0 && duplicationNickname && (phoneNumber.length>=7 && phoneNumber.length<=11) && birth.length>0 && selectedGender.length>0) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  }, [nickname, duplicationNickname, phoneNumber, birth, selectedGender]);

  return (
    <>
      <AddInfoFrame allSelected={allSelected} nextButtonHandler={nextButtonHandler}>
        <ProfileImg profileImg={profileImg} imgUploadHandler={imgUploadHandler} />
        <UserInfoInputContainer>
          <UserInfoCategoryContainer>
            <AddInfoCategoryText>닉네임</AddInfoCategoryText>
            <NickNameInputContainer>
              <NickNameInputField
                placeholder="닉네임을 입력해주세요."
                maxLength={10}
                value={nickname}
                onChange={(e) => userNicknameHandler(e)}
              />
              <DuplicationButton onClick={confirmDuplicationNickname}>
                <DuplicationText>중복 확인</DuplicationText>
              </DuplicationButton>
            </NickNameInputContainer>
            {(nickname.length>0 && duplicationNickname !== null) && (nickname && duplicationNickname ? (
              <InformAvailabeContainer>
                <img src={AvailableImg} alt="availableImg" />
                <InformAvailabeText style={{ color: "#2D2F2D" }}>
                  사용 가능한 닉네임이에요.
                </InformAvailabeText>
              </InformAvailabeContainer>
            ) : (
              <InformAvailabeContainer>
                <img src={UnavailableImg} alt="availableImg" />
                <InformAvailabeText style={{ color: "#D24C49" }}>
                  중복된 닉네임이에요. 다른 닉네임을 사용해주세요.
                </InformAvailabeText>
              </InformAvailabeContainer>
            ))}

            <AddInfoCategoryText>전화번호</AddInfoCategoryText>
            <NickNameInputContainer>
              <UserInputField
                placeholder="- 없이 숫자만 입력해주세요."
                value={phoneNumber}
                onChange={(e) => phoneNumberHandler(e)}
              />
            </NickNameInputContainer>

            <AddInfoCategoryText>생년월일</AddInfoCategoryText>
            <NickNameInputContainer>
              <UserInputField
                placeholder="YYYY/MM/DD"
                value={birth}
                onChange={(e) => userBirthHandler(e)}
              />
            </NickNameInputContainer>

            <AddInfoCategoryText>성별</AddInfoCategoryText>
            <ButtonContainer>
              <OptionButton
                isSelected={selectedGender === "남성"}
                onClick={() => handleGenderSelect("남성")}
              >
                남성
              </OptionButton>
              <OptionButton
                isSelected={selectedGender === "여성"}
                onClick={() => handleGenderSelect("여성")}
              >
                여성
              </OptionButton>
            </ButtonContainer>
          </UserInfoCategoryContainer>
        </UserInfoInputContainer>
      </AddInfoFrame>
    </>
  );
}

const UserInfoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
`;

const UserInfoCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const NickNameInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NickNameInputField = styled.input`
  width: 78%;
  padding-left: 0.8rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  border-radius: 0.5rem;
  background: #fff;
  border: none;
  &::placeholder {
    color: #999;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &:focus {
    outline: none;
  }
`;

const DuplicationButton = styled.div`
  border-radius: 0.5rem;
  background: #2d2f2d;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  cursor: pointer;
  ${hoverGrow}
`;

const DuplicationText = styled.p`
  margin: 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const InformAvailabeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InformAvailabeText = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
