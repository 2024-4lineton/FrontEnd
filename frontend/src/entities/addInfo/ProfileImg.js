import styled from "styled-components"
import defaultProfileImg from "../../assets/AddInfo/defaultProfileImg.svg";
import { useState } from "react";

export default function ProfileImg({profileImg, imgUploadHandler}) {
  // const [profileImg, setProfileImg] = useState(defaultProfileImg);

  // const imgUploadHandler = (e) => {
  //   const imgFile = e.target.files[0];
  //   if(imgFile) {
  //     const reader = new FileReader();

  //     reader.onloadend = () => { // 콜백함수이기 떄문에 먼저 등록
  //       setProfileImg(reader.result)
  //     }

  //     reader.readAsDataURL(imgFile);
  //   }
  // }

  return (
    <ProfileImgContainer>
      <img src={profileImg} alt="profileImg" style={{width: "7.5rem", height: "7.5rem", borderRadius: "50%" }}/>
      <ChangeProfileImgText htmlFor="profileImg">프로필 사진 변경하기</ChangeProfileImgText>
      <input type="file" accept="image/*" id="profileImg" style={{display: "none"}} onChange={imgUploadHandler}/>
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

const ChangeProfileImgText = styled.label`
  margin: 0;
  color: #333;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`