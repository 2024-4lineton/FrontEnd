import AddInfoFrame from "../../entities/addInfo/AddInfoFrame";
import styled from "styled-components";
import { AddInfoCategoryText } from "../../entities/addInfo/AddInfoStyle";
import { useEffect, useState } from "react";
import areaIcon from "../../assets/AddInfo/areaIcon.svg";
import { useNavigate } from "react-router-dom";

const foodCategory = ["한식", "양식", "일식", "중식", "분식", "건강식", "간편식", "디저트"];

export default function AddInfoPage2() {
  const [area, setArea] = useState("");
  const [selectedFood, setSelectedFood] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const navigate = useNavigate();

  const getAddressFromCoords = async (lat, long) => {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "OK") {
        const address = data.results[0].formatted_address; // 변환된 주소
        setArea(address); // 상태 업데이트
        console.log(address);
      } else {
        console.error("주소 변환 실패:", data.error_message);
      }
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
    }
  }

  const getAreaHandler = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getAddressFromCoords(latitude, longitude);
    },
    (error) => {
      console.error("위치 정보를 가져오는 중 오류 발생:", error);
    },)
  }

  const selectFoodHandler = (food) => {
    setSelectedFood((prevFood) => {
      return (
        prevFood.includes(food) ? prevFood.filter((item) => item !== food) : [...prevFood, food]
      )
    });
  }

  useEffect(() => {
    if(selectedFood.length>0 && area) {
      setAllSelected(true);
    }else {
      setAllSelected(false);
    }
  }, [selectedFood, area]);

  const nextButtonHandler = () => {
    navigate("/AddInfo3");
  }

  return (
    <AddInfoFrame allSelected={allSelected} nextButtonHandler={nextButtonHandler}>
      <SelectAreaContainer>
        <AddInfoCategoryText>주 활동 지역</AddInfoCategoryText>
        <SelectAreaField>
          {area ? <AreaText selected>{area}</AreaText> : <AreaText>현재 위치로 입력되어 있어요</AreaText>}
          <img src={areaIcon} alt="areaImg" onClick={getAreaHandler} />
        </SelectAreaField>
      </SelectAreaContainer>
      <FoodPreferContainer>
        <AddInfoCategoryText>선호 음식</AddInfoCategoryText>
        <FoodCategoryContainer>
          {foodCategory.map((item, index) => {
            return (
              <FoodBox key={index} onClick={() => selectFoodHandler(item)} selected={selectedFood.includes(item)}>
                <FoodText selected={selectedFood.includes(item)}>{item}</FoodText>
              </FoodBox>
            )
          })}
        </FoodCategoryContainer>
        <OptionText>* 복수 선택이 가능해요.</OptionText>
      </FoodPreferContainer>
    </AddInfoFrame>
  )
}

const SelectAreaContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SelectAreaField = styled.div`
  background-color: #FFF;
  border-radius: 0.5rem;
  padding: 0.6rem 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AreaText = styled.p`
  color: ${({selected}) => selected ? "#333" : "#999"};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`

const FoodPreferContainer = styled(SelectAreaContainer)`
  margin-top: 1rem;
  margin-bottom: 60%;
`

const FoodCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`

const FoodBox = styled.div`
  border-radius: 0.5rem;
  background: ${({selected}) => selected ? "#2D2F2D" : "#FFF"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`

const FoodText = styled.p`
  color: ${({selected}) => selected ? "#FFF" : "#999"};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`

const OptionText = styled.p`
  color: #999;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`