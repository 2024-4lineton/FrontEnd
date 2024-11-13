import styled from "styled-components";

export const AddInfoWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`

export const AddInfoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`

export const AddInfoTitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const AddInfoTitleText = styled.p`
  margin: 0;
  color: #333;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const AddInfoExplainText = styled.p`
  margin: 0;
  color: #999;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const AddInfoPageNumber = styled.p`
  margin: 0;
  color: #999;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const AddInfoCategoryText = styled.p`
  margin: 0;
  color: #333;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const AddInfoFooter = styled.div`
  // position: absolute;
  // bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const UserInputField = styled.input`
  width: 100%;
  padding-left: 0.8rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-radius: 0.5rem;
  background: #FFF;
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
`