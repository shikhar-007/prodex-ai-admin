// api.js
import { createApi } from "@reduxjs/toolkit/query/react";
import { rtkBaseQuery } from "../baseQuery";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: rtkBaseQuery,
  endpoints: (builder) => ({
    KeywordInfo: builder.query({
      query: () => ({
        method: "GET",
        url: `objects`,
      }),
    }),
    signUp: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `auth/signup`,
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `otp/verify-email-otp`,
        body: data,
      }),
    }),
    validateOtp: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/2fa/validate2fa`,
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/admin/login`,
        body: data,
      }),
    }),
  }),
});

export const {
  useKeywordInfoQuery,
  useSignUpMutation,
  useVerifyOtpMutation,
  useLoginMutation,
  useValidateOtpMutation,
} = authApi;

export default authApi;
