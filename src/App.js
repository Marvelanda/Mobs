import Header from './Components/Header/Header';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <div className='text-center'>Главная</div>
        </Route>
        <Route exact path='/signin'>
          <Signin />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
