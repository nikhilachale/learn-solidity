
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect, error } = useConnect()

  return (
    <div>
      {connectors.map((connector) => (
        <button
  key={connector.id || connector.name}
  onClick={() => connect({ connector })}
>
  {connector.name ?? 'Connector'}
</button>
      ))}
      {error && <div>Error: {error.message}</div>}
    </div>
  )

}