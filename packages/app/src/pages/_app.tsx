import { ChakraProvider } from "@chakra-ui/react";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "churp-api";
import type { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default withTRPC<AppRouter>({
  config() {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";
    return { url };
  },
  ssr: true,
})(App);
