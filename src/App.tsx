import { Routes, Route } from 'react-router-dom'

import Top from './components/top/top'
import NotFound from './components/notfound/notfound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Top />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
