import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTRACT_ADDRESS, ETHERSCAN_URL } from "../types"

const InfoDialog = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Info className="cursor-pointer text-white hover:text-neutral-300 transition-colors" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">Ethereum 永恆計數器</AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-neutral-400 space-y-4 pt-4">
            <p>這是一個極簡的 Web3 示範專案。每次點擊按鈕會送出交易，鏈上計數器會 +1。</p>
            <p>之所以稱為「永恆」，是因為一旦資料寫入區塊鏈，就永久存在，無法篡改或刪除。數字會與以太坊網路共存，直到永遠。</p>
            <p>為了降低使用門檻，本專案由後端統一簽名送交易，使用者不需要連接自己的錢包。</p>

            <div className="bg-neutral-900/50 rounded-lg p-4 space-y-3 border border-neutral-800">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">網路</p>
                <p className="text-sm">Sepolia Testnet</p>
              </div>

              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">合約地址</p>
                <div className="flex items-center gap-2">
                  <code className="text-sm break-all">{CONTRACT_ADDRESS}</code>
                  <Button onClick={copyToClipboard} variant="outline" size="xs">
                    複製
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">相關連結</p>
                <a href={ETHERSCAN_URL} target="_blank" rel="noreferrer" className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
                  在 Etherscan 查看合約
                </a>
              </div>
            </div>

            <p className="text-xs text-neutral-500">💡 合約請求成功後，交易需要等待區塊確認，計數可能會稍後更新</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>關閉</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { InfoDialog }
