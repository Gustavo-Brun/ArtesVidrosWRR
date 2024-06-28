"use server";

import { FormProps } from "@/components/LoginForm";

import { signIn } from "@/services/auth";

export async function onSubmitFx(data: FormProps) {
  await signIn("credentials", data);
}
