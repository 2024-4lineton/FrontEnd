import styled from "styled-components"

export default function TermsAgreeText() {
  return (
    <AgreeTextContainer>
      <AgreeText>계속 진행함에 따라 헬푸미의 이용약관과 개인정보 보호정책에</AgreeText>
      <AgreeText>동의합니다.</AgreeText>
    </AgreeTextContainer>
  )
}

const AgreeTextContainer = styled.div`
  // margin-top: 7rem;
  width: 100%;
  border-top: 1px solid #EEE;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 1.85rem 4.75rem
`

const AgreeText = styled.p`
  color: #999;
  // text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`