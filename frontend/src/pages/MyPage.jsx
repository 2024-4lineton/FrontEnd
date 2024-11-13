
import Company from "../entities/mypage/Company";
import Normal from "../entities/mypage/Normal";
import { useState } from "react";

export default function MyPage(){

    const [flag, setFlag] = useState(0); //사업자랑 일반회원 받아서 통신 시키기. 일반회원은 Normal, 사업자는 Company 띄워주면 됨.

    return(
    <>
        {/* <Normal></Normal> */}
        <Company/>
    </>);
}