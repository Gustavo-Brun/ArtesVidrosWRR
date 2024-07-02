"use server";

import { FormProps } from "@/components/AuthPages/LoginForm";

import { signIn } from "@/services/auth";

export async function onSubmitFx(data: FormProps) {
  await signIn("credentials", data);
}
