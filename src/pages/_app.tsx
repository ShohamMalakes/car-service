import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { type AppType } from "next/app";
import { mode } from "@chakra-ui/theme-tools";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { api } from "../utils/api";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("teal.600", "teal.800")(props),
    },
  }),
};
const theme = extendTheme({ styles });
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider loginUrl="/api/auth/login" profileUrl="/api/auth/me">
      <ChakraProvider cssVarsRoot="body" theme={theme}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </UserProvider>
  );
};

export default api.withTRPC(MyApp);
