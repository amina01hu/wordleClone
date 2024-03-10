import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { TitlePage, GamePage, LoginPage } from "./pages"; 

function App() {

  return (
    <main>
    <Router>
      <Routes>
        <Route path="/" element={<TitlePage/>} />
        <Route path="/gamestart" element={<GamePage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
    </main>
  )
}

export default App;
