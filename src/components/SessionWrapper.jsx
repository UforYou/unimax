"use client";

import { SessionProvider } from "next-auth/react";

const SessioWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessioWrapper;
