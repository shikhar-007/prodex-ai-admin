import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getCookie } from "cookies-next";

console.log(process?.env?.NEXT_PUBLIC_BASE_URL, "baseurl");

export const rtkBaseQuery = fetchBaseQuery({
  baseUrl: process?.env?.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    if (getState().global.authToken || getState().global.token) {
      headers.set(
        "Authorization",
        `Bearer ${getState().global.authToken || getState().global.token}`
      );
    }
    return headers;
  },
});
