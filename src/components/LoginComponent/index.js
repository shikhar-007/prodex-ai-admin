import { useLoginMutation } from "@/services/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { setAuthToken, setCanEnterOtp, setToken } from "@/services/GlobalSlice";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import { ROUTES } from "@/utils/routes";
import { Loader } from "lucide-react";
import LogoWithText from "../LogoWithText";

// Validation Schema using Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

const LoginComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Use Yup resolver for validation
  });

  const onSubmit = async (data) => {
    try {
      const loginData = await login({
        email: data.email,
        password: data.password,
      }).unwrap();
      setCookie("token", loginData?.data?.token);
      setCookie("userDetails", JSON.stringify(loginData?.data));
      dispatch(setToken(loginData?.data?.token));
      if (!loginData?.data?.totpFlag) {
        router.push(ROUTES.ENABLE_2FA);
      } else {
        dispatch(setCanEnterOtp(true));
      }
    } catch (e) {
      toast.error(e?.data?.message);
      console.log("Error on login", e);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label className="text-fade">Email ID</label>
        <Input
          type="email"
          placeholder="Enter Email Id"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      {/* Password Field */}
      <div className="flex flex-col gap-2">
        <label className="text-fade">Password</label>
        <Input
          type="password"
          placeholder="Enter Password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        <div className="text-blue text-sm cursor-pointer">Forgot Password?</div>
      </div>

      {/* Submit Button */}
      <Button
        className="flex justify-center gap-2"
        type="submit"
        variant="default"
        size="lg"
        disabled={isLoading}
      >
        Log in {isLoading && <Loader className="animate-spin" />}
      </Button>
    </form>
  );
};

export default LoginComponent;
