import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { Box,makeStyles } from '@material-ui/core';
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import Register from "./components/register/Register";
// Link Switch

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Box style={{ paddingTop: "93px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            
           
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            
            <Route exact path="/contact" component={Contact} />
            
          </Switch>

          <Footer />
        </Box>
      </Router>
    </>
  );
}

export default App;
