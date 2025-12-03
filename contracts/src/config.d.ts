export declare const config: import("wagmi").Config<readonly [{
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
            readonly apiUrl: "https://api.etherscan.io/api";
        };
    };
    blockTime: 12000;
    contracts: {
        readonly ensUniversalResolver: {
            readonly address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee";
            readonly blockCreated: 23085558;
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14353601;
        };
    };
    ensTlds?: readonly string[] | undefined;
    id: 1;
    name: "Ethereum";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://eth.merkle.io"];
        };
    };
    sourceId?: number | undefined | undefined;
    testnet?: boolean | undefined | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    prepareTransactionRequest?: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | [fn: ((args: import("viem").PrepareTransactionRequestParameters, options: {
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import("viem").PrepareTransactionRequestParameters>) | undefined, options: {
        runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
    }] | undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
}], {
    1: import("viem").HttpTransport<undefined, false>;
}, readonly [import("wagmi").CreateConnectorFn<{
    on: <event extends keyof import("viem").EIP1193EventMap>(event: event, listener: import("viem").EIP1193EventMap[event]) => void;
    removeListener: <event extends keyof import("viem").EIP1193EventMap>(event: event, listener: import("viem").EIP1193EventMap[event]) => void;
    request: import("viem").EIP1193RequestFn<import("viem").EIP1474Methods>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isUniswapWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: {
        on: <event extends keyof import("viem").EIP1193EventMap>(event: event, listener: import("viem").EIP1193EventMap[event]) => void;
        removeListener: <event extends keyof import("viem").EIP1193EventMap>(event: event, listener: import("viem").EIP1193EventMap[event]) => void;
        request: import("viem").EIP1193RequestFn<import("viem").EIP1474Methods>;
        isApexWallet?: true | undefined;
        isAvalanche?: true | undefined;
        isBackpack?: true | undefined;
        isBifrost?: true | undefined;
        isBitKeep?: true | undefined;
        isBitski?: true | undefined;
        isBlockWallet?: true | undefined;
        isBraveWallet?: true | undefined;
        isCoinbaseWallet?: true | undefined;
        isDawn?: true | undefined;
        isEnkrypt?: true | undefined;
        isExodus?: true | undefined;
        isFrame?: true | undefined;
        isFrontier?: true | undefined;
        isGamestop?: true | undefined;
        isHyperPay?: true | undefined;
        isImToken?: true | undefined;
        isKuCoinWallet?: true | undefined;
        isMathWallet?: true | undefined;
        isMetaMask?: true | undefined;
        isOkxWallet?: true | undefined;
        isOKExWallet?: true | undefined;
        isOneInchAndroidWallet?: true | undefined;
        isOneInchIOSWallet?: true | undefined;
        isOpera?: true | undefined;
        isPhantom?: true | undefined;
        isPortal?: true | undefined;
        isRabby?: true | undefined;
        isRainbow?: true | undefined;
        isStatus?: true | undefined;
        isTally?: true | undefined;
        isTokenPocket?: true | undefined;
        isTokenary?: true | undefined;
        isTrust?: true | undefined;
        isTrustWallet?: true | undefined;
        isUniswapWallet?: true | undefined;
        isXDEFI?: true | undefined;
        isZerion?: true | undefined;
        providers?: /*elided*/ any[] | undefined | undefined;
        _events?: {
            connect?: (() => void) | undefined;
        } | undefined | undefined;
        _state?: {
            accounts?: string[];
            initialized?: boolean;
            isConnected?: boolean;
            isPermanentlyDisconnected?: boolean;
            isUnlocked?: boolean;
        } | undefined | undefined;
    }[] | undefined | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined | undefined;
    _state?: {
        accounts?: string[];
        initialized?: boolean;
        isConnected?: boolean;
        isPermanentlyDisconnected?: boolean;
        isUnlocked?: boolean;
    } | undefined | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>, import("wagmi").CreateConnectorFn<import("@metamask/sdk").SDKProvider, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
    onDisplayUri(uri: string): void;
}, Record<string, unknown>>]>;
//# sourceMappingURL=config.d.ts.map