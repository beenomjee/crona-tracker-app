import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Country from './pages/Country';
import Home from './pages/Home';

const Error = () => {
  return (
    <div>Error</div>
  )
}

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App