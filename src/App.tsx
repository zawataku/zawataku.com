import { Routes, Route } from 'react-router-dom'

import Top from './components/top/00_top'
import WorksPage from './pages/WorksPage'
import Teapot from './components/teapot/teapot'
import NotFound from './components/notfound/notfound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Top />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/teapot" element={<Teapot />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
