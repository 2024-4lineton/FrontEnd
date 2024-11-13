import styled from "styled-components"

export default function AccountModify() {
  return (
    <AccountModifyContainer>
      <ConnectNaverText>네이버 계정 연동</ConnectNaverText>
      <ChangeAccountContainer>
        <ChangeAccountText>계정 변경하기</ChangeAccountText>
      </ChangeAccountContainer>
    </AccountModifyContainer>
  )
}

const AccountModifyContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ConnectNaverText = styled.p`
  margin: 0;
  color: #333;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const ChangeAccountContainer = styled.div`
  border-bottom: 1px solid #333;
`

const ChangeAccountText = styled.p`
  margin: 0;
  color: #333;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`