import { useReadContract } from 'wagmi'
import { contract } from '../contract'

export function TotalBalance() {
  const { data, isLoading, error } = useReadContract({
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    abi: contract.abi,
        
      functionName: 'balanceOf',
    args: ["0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f"]
  })
  

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  return (

    <div>
        Total supply  - {JSON.stringify(data?.toString())}
    </div>
  )
}