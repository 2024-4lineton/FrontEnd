import Header from "../shared/components/Header";
import MainComponent from "../entities/main/MainComponent";
import { useEffect } from "react";
import { getUser } from "../apis/api/user";
import { useNavigate } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { dummyToken, userToken } from "../shared/state/token";
import { getCookie } from "../apis/utils/Cookie";

export default function Main() {
  const [token, setToken] = useRecoilState(userToken);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      setToken(getCookie("Authorization"));
    } catch(e) {
      console.error(e);
    }
    const fetchUser = async () => {
      try {
        const response = await getUser({token});
        console.log(response.data);
        if(response.data === true) {
          navigate("/AddInfo1");
        }
      } catch(e) {
        console.log(e);
      }
    }

    if(token) {
      console.log(token);
      fetchUser();
    } else {
      navigate("/Login")
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
