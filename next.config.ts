import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    EMAIL_USER: process.env.EMAIL_USER || "",
    EMAIL_PASS: process.env.EMAIL_PASS || "",
    CONTACT_PHONE_1: process.env.CONTACT_PHONE_1 || "",
    CONTACT_PHONE_2: process.env.CONTACT_PHONE_2 || "",
  },
};

export default nextConfig;
