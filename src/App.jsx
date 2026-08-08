import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Landing from './pages/Landing.jsx'
import AIML from './pages/AIML.jsx'
import SDE from './pages/SDE.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aiml" element={<AIML />} />
        <Route path="/sde" element={<SDE />} />
      </Routes>
    </>
  )
}
