import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import './main.css'
import PricingPage from './pages/PricingPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </div>
  )
}

export default App
