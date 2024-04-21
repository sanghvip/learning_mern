import { Route, Router, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import { createMemoryHistory } from "history";

function App() {
  const history = createMemoryHistory();
  return (
   <Router location={''} navigator={history} >
    <Routes>
      <Route path="/" element={<Layout></Layout>} />
    </Routes>
   </Router>
  )
}

export default App
