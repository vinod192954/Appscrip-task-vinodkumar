import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <ProtectedRoute exact path="/Home" component={HomePage} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
