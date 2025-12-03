import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
export function Account() {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address });
    const { data: ensAvatar } = useEnsAvatar({ name: ensName });
    return (_jsxs("div", { children: [ensAvatar && _jsx("img", { alt: "ENS Avatar", src: ensAvatar }), address && _jsx("div", { children: ensName ? `${ensName} (${address})` : address }), _jsx("button", { onClick: () => disconnect(), children: "Disconnect" })] }));
}
//# sourceMappingURL=Account.js.map