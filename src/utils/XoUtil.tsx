import axios, { AxiosResponse } from "axios";

export const XoUtil = {
  //Ajax request handler
  ajax: async function (
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH",
    data: Record<string, any>,
    loadingCallBack?: (loadingCallBack: boolean) => void
  ): Promise<any> {
    if (loadingCallBack) loadingCallBack(true);

    try {
      const response: AxiosResponse<any> = await axios({
        url,
        method,
        data,
      });

      if (loadingCallBack) loadingCallBack(false);
      return response;
    } catch (e) {
      if (loadingCallBack) loadingCallBack(false);
      console.error(e);
      throw e;
    }
  },
};

export default XoUtil;
