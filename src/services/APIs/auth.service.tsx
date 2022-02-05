import API from "../Api";

// var encodedString = base64_encode(`admin/secret`);

export const apiLogin = (payload: object) =>
  API.post("/new/iam/manage/auth/login", payload, {
    headers: {
      Authorization: `Basic YWRtaW46c2VjcmV0`,
      "Content-Type": "application/json",
    },
  });

export const apiGetUser = () => API.get("/users/2");



