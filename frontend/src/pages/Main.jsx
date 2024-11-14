import Header from "../shared/components/Header";
import MainComponent from "../entities/main/MainComponent";
import { useEffect } from "react";
import { getUser } from "../apis/api/user";
import { useNavigate } from "react-router-dom";
import { atom } from "recoil";

const dummyToken = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJrYWthbyBiZWF1dGlmdWxib3lfMzNAbmF2ZXIuY29tIiwiaWF0IjoxNzMxNDMxNDYzLCJleHAiOjE3MzIwMzYyNjN9.fjFDee_YWIE8nHiLTainJKW-6tuifXfaPK2ciYPdQpI";

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser({token: dummyToken});
        console.log(response.data);
        if(response.data === true) {
          navigate("/AddInfo1");
        }
      } catch(e) {
        console.log(e);
      }
    }

    // fetchUser(); 다시 주석 풀어야 함.
    
    const urlParmas = new URLSearchParams(window.location.search);
    const authorizationCode = urlParmas.get("code");

    if (authorizationCode) {
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  return (
    <>
      <Header />
      <MainComponent />
    </>
  );
}
