import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News  from './components/News';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const [Progress, setProgress] = useState(10)

    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#66ccff'
        height={"3px"}
        progress={Progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" country="in" category="general"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" country="in" category="business"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" country="in" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" country="in" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" country="in" category="technology"/></Route>
          {/* <Route path="/about"></Route>
          <Route path="/contact"></Route> */}
        </Switch>
        
        </Router>
        <Footer/>
      </div>
    )
}

export default App
// business
// entertainment
// general
// health
// science
// sports
// technology