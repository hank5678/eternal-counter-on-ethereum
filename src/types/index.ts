export interface CounterResponse {
  value: string
}

export interface IncrementResponse {
  txHash: string
}

export const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS || "0x438EC6699A8556aefB0d80c52e1a8db580EE21C4"

export const ETHERSCAN_URL = `https://sepolia.etherscan.io/address/${CONTRACT_ADDRESS}`
