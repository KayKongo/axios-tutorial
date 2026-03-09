import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
});

// request interceptors
authFetch.interceptors.request.use(
  (request) => {
    request.headers["Accept"] = "application/json";
    console.log("request sent");

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response interceptors
authFetch.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something (in our case it will be a console.log)
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  },
);

export default authFetch;
