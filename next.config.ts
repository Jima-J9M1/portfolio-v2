import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
          ignoreDuringBuilds: true,
    },
    typescript: {
          ignoreBuildErrors: true,
    },
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
