import { type PropsWithChildren } from "react";
import { TankstackQueryProvider } from "./tanstack-query";

export const Providers = ({ children }: PropsWithChildren) => {
  return <TankstackQueryProvider>{children}</TankstackQueryProvider>;
};
