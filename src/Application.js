import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import Header from './components/Header';

function Application() {
  return (
    <div className='application-wrapper'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Articles />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default Application;
