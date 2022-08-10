
import './App.css';
import Home from './Components/Home';
import { useState, useEffect} from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import About from './Components/About';
import Product from './Components/Product';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import LoadingBar from 'react-top-loading-bar'

// import TopBarProgress from 'react-topbar-progress-indicator';
const App = () =>{
  // const [progress, setProgress] = useState(false)
  const [progress, setProgress] = useState(0)
   const [prevLoc, setPrevLoc] = useState("")
   const location = useLocation()
  
   useEffect(() => {
    setPrevLoc(location.pathname)
    setProgress(10)
    if(location.pathname===prevLoc){
        setPrevLoc('')
    }
    setProgress(100)
 }, [location])
 
 useEffect(() => {
  setProgress(0)
}, [prevLoc])

  
  return (
    <>
    <Navbar/>
    {/* {progress && <TopBarProgress />} */}
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished = {()=>{setProgress(0)}}
        loaderSpeed = {500}
        waitingTime = {1000}
        height = {3}

        
      />
    <Switch>
      <Route exact path='/' >
        <Home  />
      </Route>
      <Route exact path='/about' component={About}/>
      <Route exact path='/service' component={Service}/>
      <Route exact path='/product' component={Product}/>
      <Route exact path='/contact' component={Contact}/>
      <Redirect to={Home} />
    </Switch>
    </>
  )
}

export default App;
