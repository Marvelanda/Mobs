import Header from './Components/Header/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import PlacesList from './Components/PlacesList/PlacesList';

import MainPage from './Components/MainPage/MainPage';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import DetailedPlace from './Components/DetailedPlace/DetailedPlace';
import AddNewPlace from './Components/AddNewPlace/AddNewPlace';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/signin'>
          <Signin />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/places'>
          <PlacesList />
        </Route>
        <Route exact path='/places/new'>
          <AddNewPlace />
        </Route>
        <Route exact path='/places/:id'>
          <DetailedPlace />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
