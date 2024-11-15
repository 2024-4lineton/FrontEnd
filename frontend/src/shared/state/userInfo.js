import { atom } from "recoil";

export const userInfo = atom ({
  key: "userInfo",
  default: {
    profileImg: "",
    phone: "",
    birth: "",
    gender: "",
    activityLocation: "",
    foodCategory: "",
    privacyPolicy: true,   
    marketingPolicy: false,
    ToS: true,
    LBS: true,
  },
})