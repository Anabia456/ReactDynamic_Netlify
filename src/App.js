import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/categories' component={Categories}></Route>
            <Route path='/contact2' component={Contact}></Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
