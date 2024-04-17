import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Accordion from './pages/Accordion/Accordion'
import BirthdayReminder from './pages/BirthdayReminder/BirthdayReminder'
import Menu from './pages/Menu/Menu'
import Reviews from './pages/Reviews/Reviews'
import Tours from './pages/Tours/Tours'
import Home from './pages/HOME/Home'
import Tabs from './pages/Tabs/Tabs'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/birthday" element={<BirthdayReminder />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/tabs" element={<Tabs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
