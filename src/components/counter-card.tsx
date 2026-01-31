import Counter from "./counter"
import { useCounter } from "../hooks/useCounter"
import { toast } from "react-toastify"
import { ERROR_MESSAGES, BUTTON_LABELS, UI_CONFIG } from "../lib/constants"
import { Spinner } from "./ui/spinner"
import { PrimaryButton } from "./ui/primary-button"
export const CounterCard = () => {
  const { count, isLoading, error, handleIncrement, isMutating } = useCounter()

  const onIncrement = () => {
    if (error) {
      toast.error(ERROR_MESSAGES.LOAD_FAILED, {
        autoClose: UI_CONFIG.TOAST_AUTO_CLOSE_MS
      })
      return
    }
    handleIncrement(undefined)
  }

  return (
    <section className="bg-indigo-200/10 rounded-3xl p-8 shadow-2xl backdrop-blur-2xl flex flex-col gap-6">
      <div className="pb-2 relative flex justify-center">
        <div className="inline-flex relative">
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <div className="text-red-400 text-sm">載入失敗</div>
          ) : (
            <Counter value={count ?? 0} fontSize={110} padding={5} gap={0} textColor="white" fontWeight={900} />
          )}
        </div>
      </div>

      <PrimaryButton onClick={onIncrement} disabled={!!(isMutating || isLoading || error)}>
        {isMutating && <span>{BUTTON_LABELS.PENDING}</span>}
        {isLoading && <span>{BUTTON_LABELS.LOADING}</span>}
        {!isMutating && !isLoading && <span>{BUTTON_LABELS.INCREMENT}</span>}
      </PrimaryButton>
    </section>
  )
}
