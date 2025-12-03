import { http, createConfig, injected } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { metaMask } from 'wagmi/connectors';
export const config = createConfig({
    chains: [mainnet],
    connectors: [
        injected(),
        metaMask(),
    ],
    transports: {
        [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/F1JgccBYwIzQNwhsyNSY5gv8kFLlOoEM"),
    },
});
//# sourceMappingURL=config.js.map