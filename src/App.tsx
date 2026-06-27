import { Routes, Route, useLocation } from 'react-router-dom'

import TopPage from './pages/TopPage'
import WorksPage from './pages/WorksPage'
import TeapotPage from './pages/TeapotPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  const location = useLocation()

  return (
    <div key={location.pathname} className="page-transition">
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/teapot" element={<TeapotPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
