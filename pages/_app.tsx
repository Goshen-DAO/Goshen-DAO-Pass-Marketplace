import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet,
  rainbowWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";

const factoryAddress = process.env.CREST_SMARTWALLET_FACTORY_ADDRESS as string;

const clientAPI= process.env.THIRDWEB_API_KEY as string;
const smartWalletOptions = {
  factoryAddress: factoryAddress,
  gasless: true,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={clientAPI}
      activeChain={NETWORK}
      supportedWallets={[
        smartWallet(metamaskWallet(), smartWalletOptions),
        smartWallet(coinbaseWallet(), smartWalletOptions),
        smartWallet(walletConnect(), smartWalletOptions),
        smartWallet(localWallet(), smartWalletOptions),
        smartWallet(
          embeddedWallet({
            recommended: true,
            auth: {
              options: ["email", "google", "apple", "facebook"],
            },
          }),
          smartWalletOptions
        ),
        smartWallet(trustWallet(), smartWalletOptions),
        smartWallet(rainbowWallet(), smartWalletOptions),
      ]}
    >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
