import styled from "styled-components"

export default function AddInfoNextButton({allSelected}) {
  return (
    <NextButtonContainer>
      <NextButton allSelected={allSelected}>
      <NextButtonText allSelected={allSelected}>다음</NextButtonText>
      </NextButton>
    </NextButtonContainer>
  )
}

const NextButtonContainer = styled.div`
  width: 100%;
`

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: ${({allSelected}) => allSelected ? "#577D58" : "#EEE"};
  // width: 100%;
`

const NextButtonText = styled.p`
  margin: 0;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({allSelected}) => allSelected ? "#FFF" : "#999"};
`