import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/about'
import Home from './pages/home'
import Team from './pages/team'
import NotFound from './pages/404'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
