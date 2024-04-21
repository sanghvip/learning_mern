import { Route, Router, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import { createMemoryHistory } from "history";

function App() {
  const history = createMemoryHistory();
  return (
   <Router location={''} navigator={history} >
    <Routes>
      <Route path="/" element={<Layout><p>Home page</p></Layout>} />
      <Route path="/search" element={<Layout><h1>Search</h1></Layout>} />
    </Routes>
   </Router>
  )
}

export default App;
