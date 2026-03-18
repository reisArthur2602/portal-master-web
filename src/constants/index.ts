export const ACCESS_TOKEN_VALUE = "accessToken";

export const USER_ROLE_OPTIONS: { value: UserRole; label: string }[] = [
  { value: "Admin", label: "Administrador" },
  { value: "Medical", label: "Médico" },
  { value: "Staff", label: "Staff" },
] as const;
