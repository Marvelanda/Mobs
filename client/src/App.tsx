import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import PlacesList from './Components/PlacesList/PlacesList';
import MainPage from './Components/MainPage/MainPage';
import DetailedPlace from './Components/DetailedPlace/DetailedPlace';
import AddReview from './Components/Review/AddReview';
import NotFound from './Components/NotFound/NotFound';
import ModalForAll from './Components/ModalForAll/ModalForAll';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkPlaceOpenModal,
  setModalClass,
} from './redux/features/Places/placeSlice';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const checkPlaceModalIsOpened: boolean = useSelector(
    (state: RootState) => state.places.checkPlaceModalOpened
  );

  const onCloseCheckUserPlace = (): void => {
    dispatch(setModalClass('animate__animated animate__rollOut'));
    setTimeout(() => dispatch(checkPlaceOpenModal(false)), 500);
  };

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
        <Route exact path='/places/:id'>
          <DetailedPlace />
        </Route>
        <Route exact path='/places/:id/reviews'>
          <AddReview />
        </Route>
        <Route path=''>
          <NotFound />
        </Route>
      </Switch>

      <ModalForAll
        open={checkPlaceModalIsOpened}
        onClose={onCloseCheckUserPlace}
      />
      <footer>
        <p>
          © <span>MOBS</span> LLC, 2020
        </p>
      </footer>
    </Router>
  );
};

export default App;
