import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { useWriteContract } from 'wagmi';
import { contract } from '../contract';
export function AllowUSDT() {
    const { data: hash, error, isPending, writeContract } = useWriteContract();
    async function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const amount = formData.get('amount');
        if (!amount) {
            alert('Please enter an amount');
            return;
        }
        writeContract({
            address: contract.address,
            abi: contract.abi,
            functionName: 'approve',
            args: ["0x82CBb76261c1d9Ee4ed875F1058eb04A244E343c", BigInt(amount)],
        });
    }
    return (_jsxs("form", { onSubmit: submit, children: [_jsx("input", { name: "amount", placeholder: "Amount in USDT (e.g., 1000000 for 1 USDT)", type: "number", required: true }), _jsx("button", { type: "submit", disabled: isPending, children: isPending ? 'Waiting for approval...' : 'Approve USDT' }), hash && _jsxs("div", { children: ["Transaction Hash: ", hash] }), error && _jsxs("div", { style: { color: 'red' }, children: ["Error: ", error.message] })] }));
}
//# sourceMappingURL=AllowUSDT.js.map