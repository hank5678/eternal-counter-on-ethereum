import type { CounterResponse, IncrementResponse } from "../types"
import { API_ENDPOINTS, ERROR_MESSAGES } from "../lib/constants"

export const fetchCounterValue = async (): Promise<number> => {
  const response = await fetch(API_ENDPOINTS.COUNTER)
  if (!response.ok) {
    throw new Error(ERROR_MESSAGES.FETCH_COUNTER)
  }
  const data = (await response.json()) as CounterResponse
  return Number(data.value)
}

export const incrementCounter = async (): Promise<string> => {
  const response = await fetch(API_ENDPOINTS.INCREMENT, { method: "POST" })
  if (!response.ok) {
    throw new Error(ERROR_MESSAGES.SEND_TRANSACTION)
  }
  const data = (await response.json()) as IncrementResponse
  return data.txHash
}
