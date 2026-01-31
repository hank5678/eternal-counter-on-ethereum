import { InfoDialog } from "@/components/info-dialog"

export const Header = () => {
  return (
    <header>
      <div className="flex items-center gap-2 justify-center">
        <h1 className="text-3xl text-center font-bold text-neutral-200">Ethereum 永恆計數器</h1>
        <InfoDialog />
      </div>
    </header>
  )
}
