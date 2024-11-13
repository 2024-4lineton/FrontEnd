import AddInfoFrame from "../../entities/addInfo/AddInfoFrame";
import { UserInputField } from "../../entities/addInfo/AddInfoStyle";
import ProfileImg from "../../entities/addInfo/ProfileImg";


export default function AddInfoPage1() {
  return (
    <>
      <AddInfoFrame>
        <ProfileImg />
        <UserInputField />
      </AddInfoFrame>
    </>
  )
}

