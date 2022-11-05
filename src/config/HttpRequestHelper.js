import axios from "axios";

const BASE_URL = 'http://localhost:4000/';
const HttpRequestHelper = {
  getRequest: (url, headers) =>
    axios({
      method: "get",
      url: `${BASE_URL}${url}`,
      headers: {
        ...headers,
        userToken: localStorage.getItem("userToken"),
      },
    }),

  postRequest: (url, data, headers) =>
    axios({
      method: "post",
      url: `${BASE_URL}${url}`,
      headers: {
        ...headers,
        userToken: localStorage.getItem("userToken"),
      },
      data,
    }),

  patchRequest: (url, data, headers) =>
    axios({
      method: "patch",
      url: `${BASE_URL}${url}`,
      headers: {
        ...headers,
        userToken: localStorage.getItem("userToken"),
      },
      data,
    }),

  deleteRequest: (url, data, headers) =>
    axios({
      method: "post",
      url: `${BASE_URL}${url}`,
      headers: {
        ...headers,
        userToken: localStorage.getItem("userToken"),
      },
      data,
    }),
};

export default HttpRequestHelper;
