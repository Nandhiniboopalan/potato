import './App.css';
import './index.css';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AdminHome from './components/AdminBars';
import Home from "./components/home";
import Termsandconditions from './sidenav/termsandconditions';
import Privacypolicy from './sidenav/privacypolicy';
import Faqs from './sidenav/faqs';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/adminDash" component={Home}/>
      <Route path="/terms" component={Termsandconditions}/>
      <Route path="/privacy" component={Privacypolicy}/>
      <Route path="/faqs" component={Faqs}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
