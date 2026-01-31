import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchCounterValue, incrementCounter } from "../api/counter"
import { toast } from "react-toastify"
import { UI_CONFIG, SUCCESS_MESSAGES, BLOCKCHAIN_CONFIG } from "../lib/constants"

export const useCounter = () => {
  const queryClient = useQueryClient()

  const {
    data: count,
    isLoading,
    error
  } = useQuery({
    queryKey: ["counter"],
    queryFn: fetchCounterValue,
    refetchInterval: UI_CONFIG.POLLING_INTERVAL_MS,
    retry: false
  })

  const { mutate: handleIncrement, isPending: isMutating } = useMutation({
    mutationFn: incrementCounter,
    onSuccess: (hash) => {
      queryClient.invalidateQueries({ queryKey: ["counter"] })
      toast(
        <div>
          <p className="text-neutral-100">{SUCCESS_MESSAGES.TRANSACTION_SENT}</p>
          <a
            className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300 text-sm"
            href={`${BLOCKCHAIN_CONFIG.ETHERSCAN_BASE}/tx/${hash}`}
            target="_blank"
            rel="noreferrer"
          >
            {SUCCESS_MESSAGES.CLICK_ETHERSCAN}
          </a>
        </div>,
        { autoClose: UI_CONFIG.TOAST_TRANSACTION_AUTO_CLOSE_MS }
      )
    },
    onError: (error: Error) => {
      toast.error(`❌ ${error.message}`, {
        autoClose: UI_CONFIG.TOAST_AUTO_CLOSE_MS
      })
    }
  })

  return {
    count,
    isLoading,
    error: error instanceof Error ? error.message : null,
    handleIncrement,
    isMutating
  }
}
