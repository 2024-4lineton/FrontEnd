// 사용자 여부 확인

import { defaultApi } from "../utils/Instance"

export const getUser = async ({token}) => {
  try {
    const result = await defaultApi.post(`/api/userInfo/check-first-login`, {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return result;
  } catch(e) {
    // return { message: e.response.data.message, status: e.response.status };
    console.log(e);
  }
}