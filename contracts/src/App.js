import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, useAccount } from 'wagmi';
import { config } from './config';
import { WalletOptions } from './components/WalletOptions';
import { Account } from './components/Account';
import { TotalBalance } from './components/TotalBalance';
import { AllowUSDT } from './components/AllowUSDT';
const queryClient = new QueryClient();
function ConnectWallet() {
    const { isConnected } = useAccount();
    if (isConnected)
        return _jsx(Account, {});
    return _jsx(WalletOptions, {});
}
function App() {
    return (_jsx(WagmiProvider, { config: config, children: _jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(ConnectWallet, {}), _jsx(TotalBalance, {}), _jsx(AllowUSDT, {})] }) }));
}
export default App;
//# sourceMappingURL=App.js.map