import styled from "styled-components"

export default function LogOut() {
  return (
    <LogOutText>로그아웃</LogOutText>
  )
}

const LogOutText = styled.p`
  margin: 0;
  margin-top: 2.5rem;
  color: #999;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`