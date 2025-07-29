import './App.css'
import Navbar from './components/Navbar/Navbar'
import Calender from './components/Calender/Calender'
import MainComponent from './components/MainComponent/MainComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Exercise from './Pages/ExercisePage/Exercise'
import FeaturePage from './Pages/FeaturePage/FeaturePage'
import AddTimer from './components/AddTimer/AddTimer'
import TimerList from './components/TimerList/TimerList'

function App() {

  return (
    <>
    
      <Router>
        <Routes>
          <Route path='/' element={<>
            <Navbar />
            <Calender />
            <MainComponent />
          </>} ></Route>
          <Route path='/exercise' element={<>
           <Exercise />
          </>} ></Route>
          <Route path='/features' element={<>
           <FeaturePage />
          </>} ></Route>
          <Route path='/features/addtimer' element={<>
           <AddTimer />
          </>} ></Route>
          <Route path='/features/timerlist' element={<>
           <TimerList />
          </>} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
