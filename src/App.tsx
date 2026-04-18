import { Routes, Route } from 'react-router-dom'

import TopPage from './pages/TopPage'
import WorksPage from './pages/WorksPage'
import TeapotPage from './pages/TeapotPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/teapot" element={<TeapotPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
