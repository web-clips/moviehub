import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from '@/pages/HomePage'
import { FavoritesPage } from '@/pages/FavoritesPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  )
}

export default App
