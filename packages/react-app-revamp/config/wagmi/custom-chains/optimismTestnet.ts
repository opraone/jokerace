import { Chain } from "wagmi";

export const optimismTestnet: Chain = {
  id: 420,
  name: "optimismTestnet",
  network: "optimismTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    public: {
      http: ["https://optimism-goerli.publicnode.com"],
    },
    default: {
      http: [`https://opt-goerli.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`],
    },
  },
  blockExplorers: {
    etherscan: { name: "Optimism Testnet Etherscan", url: "https://goerli-optimism.etherscan.io/" },
    default: { name: "Optimism Testnet Etherscan", url: "https://goerli-optimism.etherscan.io/" },
  },
};
