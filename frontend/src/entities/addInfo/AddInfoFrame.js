import { useState } from "react";
import AddInfoHeader from "./AddInfoHeader";
import AddInfoNextButton from "./AddInfoNextButton";
import {
  AddInfoExplainText,
  AddInfoFooter,
  AddInfoPageNumber,
  AddInfoTitleContainer,
  AddInfoTitleText,
  AddInfoTitleTextContainer,
  AddInfoWrapper,
} from "./AddInfoStyle";
import { useLocation } from "react-router-dom";
import AccountModify from "./AccountModify";
import LogOut from "./LogOut";

export default function AddInfoFrame(props) {
  const location = useLocation();
  let pageNumber = 1;

  if (location.pathname === "/AddInfo1") {
    pageNumber = 1;
  } else if (location.pathname === "/AddInfo2") {
    pageNumber = 2;
  } else if (location.pathname === "/AddInfo3") {
    pageNumber = 3;
  }

  return (
    <>
      <AddInfoHeader />
      <AddInfoWrapper>
        <AddInfoTitleContainer>
          <AddInfoTitleTextContainer>
            {pageNumber === 1 || pageNumber === 2 ? (
              <>
                <AddInfoTitleText>더 나은 서비스 이용을 위해</AddInfoTitleText>
                <AddInfoTitleText>추가 정보를 입력해주세요.</AddInfoTitleText>
                <AddInfoExplainText>
                  추가정보는 마이페이지에서 수정 가능해요.
                </AddInfoExplainText>
              </>
            ) : (
              <>
                <AddInfoTitleText>마지막이에요!</AddInfoTitleText>
                <AddInfoTitleText>서비스 이용을 위한 약관에 동의해주세요.</AddInfoTitleText>
              </>
            )}
          </AddInfoTitleTextContainer>
          <AddInfoPageNumber>{pageNumber}/3</AddInfoPageNumber>
        </AddInfoTitleContainer>
        {props.children}
        <AddInfoFooter>
          <AddInfoNextButton
            allSelected={props.allSelected}
            pageNumber={pageNumber}
            click={props.nextButtonHandler}
          />
          <AccountModify />
          <LogOut />
        </AddInfoFooter>
      </AddInfoWrapper>
    </>
  );
}
