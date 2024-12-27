import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
    {
      hostname:"fonts",
      pathname:'fonts.gstatic.com'

    }
    ]
  }
  /* config options here */
};

export default nextConfig;
