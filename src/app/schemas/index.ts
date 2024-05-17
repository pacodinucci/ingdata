"use client";

import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 characters.",
  }),
  lastname: z.string().min(1, {
    message: "Last Name must be at least 1 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(1, {
    message: "Please, write a message.",
  }),
});
