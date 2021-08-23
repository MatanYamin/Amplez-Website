import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch >
      <Route path="/app-privacy-policy-zviyamin" >
      <Privacy />
      </Route>
      <Route path="/contact" >
      <Contact />
      </Route>
      <Route path="/" >
    <div className="App">
      <Header />
      <div className='f-heading'>
        {/* <h1>Features</h1> */}
        {/* <p>Here are some features...</p> */}
      </div>
      {/* <Features /> */}
      <Services />
      <Contact />
    </div>
      </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;

