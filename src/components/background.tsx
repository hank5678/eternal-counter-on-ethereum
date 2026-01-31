import LiquidEther from "./liquid-ether"

export const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#060010]">
      <LiquidEther
        colors={["#4f39f6", "#f4a8ff"]}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  )
}
