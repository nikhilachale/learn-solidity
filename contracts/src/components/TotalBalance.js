import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReadContract } from 'wagmi';
import { contract } from '../contract';
export function TotalBalance() {
    const { data, isLoading, error } = useReadContract({
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        abi: contract.abi,
        functionName: 'balanceOf',
        args: ["0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f"]
    });
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsxs("div", { children: ["Error: ", error.message] });
    return (_jsxs("div", { children: ["Total supply  - ", JSON.stringify(data?.toString())] }));
}
//# sourceMappingURL=TotalBalance.js.map