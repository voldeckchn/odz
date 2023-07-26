import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} clientId="1fcc01a11ad913c9eb655bf60733f445">
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
