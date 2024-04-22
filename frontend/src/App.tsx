import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/register';

function App() {
  return (
   <Router>
    <Routes>
        <Route path="/" element={<Layout><p>Home page</p></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
   </Router>
  )
}

export default App;
