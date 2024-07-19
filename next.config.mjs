/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(wav)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: `/_next/static/sounds/`,
          outputPath: `${options.isServer ? "../" : ""}static/sounds/`,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
