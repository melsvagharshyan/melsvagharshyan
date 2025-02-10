import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "validations.name"),
  email: z
    .string()
    .min(1, "validations.email")
    .email("validations.invalidEmail"),
  phoneNumber: z.string().min(1, "validations.phoneNumber"),
});

export type TFormValues = z.infer<typeof formSchema>;
