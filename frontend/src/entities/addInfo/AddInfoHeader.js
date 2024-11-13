import styled from "styled-components";
import HelFooMeSmallLogo from "../../assets/AddInfo/HelFooMeSmallLogo.svg";

export default function AddInfoHeader() {
  return (
    <AddInfoHeaderComponent>
      <img src={HelFooMeSmallLogo} alt="logoImg"/>
    </AddInfoHeaderComponent>
  )
}

const AddInfoHeaderComponent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #EEE;
`