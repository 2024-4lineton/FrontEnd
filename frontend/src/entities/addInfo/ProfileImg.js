import styled from "styled-components"
import defaultProfileImg from "../../assets/AddInfo/defaultProfileImg.svg";

export default function ProfileImg() {
  return (
    <ProfileImgContainer>
      <img src={defaultProfileImg} alt="profileImg" />
      <ChangeProfileImgText>프로필 사진 변경하기</ChangeProfileImgText>
    </ProfileImgContainer>
  )
}

const ProfileImgContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const ChangeProfileImgText = styled.p`
  margin: 0;
  color: #333;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`