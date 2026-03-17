import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// routes
import Routes from "./routes";

// sonner
import { Toaster } from "./components/ui/sonner";

// css
import "./index.css";
import { Providers } from "./providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <Toaster expand richColors />
      <Routes />
    </Providers>
  </StrictMode>,
);
