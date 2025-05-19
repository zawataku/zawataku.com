import { Routes, Route } from 'react-router-dom'

import Top from './components/top/01_top'
import WorksPage from './pages/WorksPage'
import NotFound from './components/notfound/notfound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Top />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
