import "./swiper.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/lexend/500.css";
import "@fontsource/roboto-slab/500.css";

import { useApollo } from "src/hooks/apollo";
import theme from "theme";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
