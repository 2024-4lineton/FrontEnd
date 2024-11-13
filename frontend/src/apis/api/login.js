// kakako

export const kakaoLogin = () => {
  const kakaoKey = process.env.REACT_APP_KAKAO_KEY;
  const redirectUri = `https://metalog.store/login/oauth2/code/kakao`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKey}&redirect_uri=${redirectUri}&response_type=code`;

  window.location.href = kakaoURL;
}