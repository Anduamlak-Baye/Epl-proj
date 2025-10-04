import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import HomePage from './Pages/Homepage'
import Teams from './Pages/Teams'
import Players from './Pages/Players'
import './styling.css'
import PlayerDetail from './Pages/PlayerDetail'
import TeamDetail from './Pages/TeamDetail'

function App() {
  const navigate = useNavigate()

  const NavigationBar = () => {
    return(
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">EPL Hub</div>
          <div className="nav-buttons">
            <button className="nav-button" onClick={() => navigate('/')}>Home</button>
            <button className="nav-button" onClick={() => navigate('/Teams')}>Teams</button>
            <button className="nav-button" onClick={() => navigate('/Players')}>Players</button>
          </div>
        </div>
      </nav>
    )
  }

  return (
      <div className="app-container">
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Teams' element={<Teams/>}/>
          <Route path='/Players' element={<Players/>}/>
          <Route path = '/PlayerDetail' element = {<PlayerDetail/>} />
          <Route path = '/TeamDetail' element = {<TeamDetail/>} />
        </Routes>
      </div>
  )
}

export default App
