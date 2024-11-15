import { defaultApi } from "../utils/Instance"

export const getProductList = async ({token, shopType, sort}) => {
  try {
    const result = await defaultApi.get(`/api/product/productList`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        shopType: shopType,
        sort: sort
      }
    })

    return result;
  } catch(error) {
    console.error(error);
  }
}