// kakako

export const kakaoLogin = () => {
  const kakaoKey = process.env.REACT_APP_KAKAO_KEY;
  const redirectUri = `https://metalog.store/login/oauth2/code/kakao`;
  // const redirectUri = `http://localhost:3000/`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKey}&redirect_uri=${redirectUri}&response_type=code`;

  // 카카오 초기화
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(kakaoKey);
    console.log("Kakao SDK Initialized");
  }

  // 현재 로그인 상태 확인
  if (window.Kakao.Auth.getAccessToken()) {
    // 이미 로그인한 상태, 사용자 정보를 가져옴
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function (response) {
        console.log("Already Logged In:", response);
        // 로그인 처리 후 다른 화면으로 리디렉션
        window.location.href = redirectUri;
      },
      fail: function (error) {
        console.error("Failed to fetch user info:", error);
      },
    });
  } else {
    // 로그인이 필요하면 카카오 로그인 URL로 이동
    window.location.href = kakaoURL;
  }
}