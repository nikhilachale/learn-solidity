import * as React from 'react'
import { useWriteContract } from 'wagmi'
 import { contract } from '../contract'
 
export function AllowUSDT() {
  const { data: hash, error, isPending, writeContract } = useWriteContract()

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const amount = formData.get('amount') as string;
    
    if (!amount) {
      alert('Please enter an amount');
      return;
    }
    
    writeContract({
      address: contract.address as `0x${string}`,
      abi: contract.abi,
      functionName: 'approve',
      args: ["0x82CBb76261c1d9Ee4ed875F1058eb04A244E343c", BigInt(amount)],
    })
  } 

  return (
    <form onSubmit={submit}>
      <input 
        name="amount" 
        placeholder="Amount in USDT (e.g., 1000000 for 1 USDT)" 
        type="number"
        required
      />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Waiting for approval...' : 'Approve USDT'}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {error && <div style={{color: 'red'}}>Error: {error.message}</div>}
    </form>
  )
} 