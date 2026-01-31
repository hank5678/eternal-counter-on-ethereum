import React from "react"

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => {
  return (
    <button
      className="disabled:opacity-50 disabled:cursor-not-allowed inline-flex text-base text-neutral-100 cursor-pointer items-center justify-center whitespace-nowrap rounded-md transition-all h-10 active:bg-neutral-950/40 bg-neutral-950 hover:bg-neutral-950/80 relative after:absolute after:-inset-0.5 after:-z-10 after:animate-pulse after:rounded-lg after:bg-linear-to-r after:from-fuchsia-600 after:to-indigo-600 after:blur-lg"
      {...props}
    >
      {children}
    </button>
  )
}

export { PrimaryButton }
