import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Launch from './pages/Launch';
import LaunchIndex from './pages/LaunchIndex';

function Application() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="launch">Launch</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='launch' element={<Launch />}>
          <Route path=':id' element={<LaunchIndex />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Application;
