// api.js
import { createApi } from "@reduxjs/toolkit/query/react";
import { rtkBaseQuery } from "../baseQuery";

const adminApi = createApi({
  reducerPath: "adminApi",
  tagTypes: ["UPDATE", "DELETE"],
  baseQuery: rtkBaseQuery,
  endpoints: (builder) => ({
    setup2fa: builder.query({
      query: () => ({
        method: "GET",
        url: `/2fa/setup2fa`,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        method: "PUT",
        url: `/2fa/verify2fa`,
        body: data,
      }),
    }),
    getAllUser: builder.query({
      query: (params) => ({
        method: "GET",
        url: `/admin/getAllUsers`,
        params,
      }),
      providesTags: ["UPDATE", "DELETE"],
    }),

    updateUserStatus: builder.mutation({
      query: (data) => ({
        method: "PUT",
        url: `/admin/updateUserStatus`,
        body: data,
      }),
      invalidatesTags: ["UPDATE"],
    }),
    deleteUser: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        url: `/admin/deleteUser`,
        body: data,
      }),
      invalidatesTags: ["DELETE"],
    }),
  }),
});

export const {
  useLazySetup2faQuery,
  useVerifyOtpMutation,
  useGetAllUserQuery,
  useUpdateUserStatusMutation,
  useDeleteUserMutation,
} = adminApi;

export default adminApi;
