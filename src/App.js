
import './App.css';
import Home from './Components/Home';
import {Switch, Route, Redirect} from 'react-router-dom';
import About from './Components/About';
import Product from './Components/Product';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';

const App = () =>{
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
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
