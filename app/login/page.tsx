"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    signIn("google", {
      callbackUrl: "/dashboard",
      prompt: "select_account",
    });
  }, []);

  return <p>Redirecting to Google login…</p>;
}