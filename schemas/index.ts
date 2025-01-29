import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  name: z.string().min(1, {
    message: "Name is Required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  passwordComfirmation: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});
