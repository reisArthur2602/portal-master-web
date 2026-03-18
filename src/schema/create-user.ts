import z from "zod";

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  role: z.enum(["Admin", "Staff", "Medical"] as UserRole[]),
});
