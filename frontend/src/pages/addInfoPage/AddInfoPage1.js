import styled from "styled-components";
import AddInfoFrame from "../../entities/addInfo/AddInfoFrame";
import {
  AddInfoCategoryText,
  UserInputField,
  ButtonContainer,
  OptionButton,
} from "../../entities/addInfo/AddInfoStyle";
import ProfileImg from "../../entities/addInfo/ProfileImg";
import { useState } from "react";
import axios from "axios";
import { defaultApi } from "../../apis/utils/Instance";
import AvailableImg from "../../assets/AddInfo/availableImg.svg";
import UnavailableImg from "../../assets/AddInfo/unavailableImg.svg";
import { hoverGrow } from "../../shared/animation/hoverGrow";

export default function AddInfoPage1() {
  const [duplicationNickname, setDuplicationNickname] = useState(false);
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);

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
      if (response.status === 200) {
        setDuplicationNickname(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const userNicknameHandler = (e) => {
    setNickname(e.target.value);
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const userBirthHandler = (e) => {
    setBirth(e.target.value);
  };

  return (
    <>
      <AddInfoFrame>
        <ProfileImg />
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
            {nickname && duplicationNickname ? (
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
            )}

            <AddInfoCategoryText>전화번호</AddInfoCategoryText>
            <NickNameInputContainer>
              <NickNameInputField
                placeholder="- 없이 숫자만 입력해주세요."
                value={phoneNumber}
                style={{ width: "100%" }}
                onChange={(e) => phoneNumberHandler(e)}
              />
            </NickNameInputContainer>

            <AddInfoCategoryText>생년월일</AddInfoCategoryText>
            <NickNameInputContainer>
              <NickNameInputField
                placeholder="YYYY/MM/DD"
                value={birth}
                onChange={(e) => userBirthHandler(e)}
                style={{ width: "100%" }}
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
