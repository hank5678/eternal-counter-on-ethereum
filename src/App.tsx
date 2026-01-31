import { ToastContainer } from "react-toastify"
import { Background } from "./components/background"
import { Header } from "./components/header"
import { CounterCard } from "./components/counter-card"

function App() {
  return (
    <>
      <Background />
      <div className="w-screen h-screen relative flex items-center justify-center">
        <div className="w-full max-w-md mx-auto px-4 py-20 flex flex-col gap-4 relative">
          <Header />
          <CounterCard />
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={10000} theme="dark" />
    </>
  )
}

export default App
