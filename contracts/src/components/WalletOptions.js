import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useConnect } from 'wagmi';
export function WalletOptions() {
    const { connectors, connect, error } = useConnect();
    return (_jsxs("div", { children: [connectors.map((connector) => (_jsx("button", { onClick: () => connect({ connector }), children: connector.name ?? 'Connector' }, connector.id || connector.name))), error && _jsxs("div", { children: ["Error: ", error.message] })] }));
}
//# sourceMappingURL=WalletOptions.js.map