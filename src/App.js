import Header from './Components/Header/Header';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import PlacesList from './Components/PlacesList/PlacesList';
import MainPage from './Components/MainPage/MainPage';
import DetailedPlace from './Components/DetailedPlace/DetailedPlace';
import AddNewPlace from './Components/AddNewPlace/AddNewPlace';
import AddReview from './Components/Review/AddReview';
import NotFound from './Components/NotFound/NotFound';
import ModalForAll from './Components/ModalForAll/ModalForAll';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkPlaceOpenModal,
  setModalClass,
} from './redux/features/Places/placeSlice';

function App() {
  const dispatch = useDispatch();

  const checkPlaceModalIsOpened = useSelector(
    (state) => state.places.checkPlaceModalOpened
  );
  const message = useSelector((state) => state.places.message);

  const modalClass = useSelector((state) => state.places.modalClass);

  const onCloseCheckUserPlace = () => {
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
        <Route exact path='/places/new'>
          <AddNewPlace />
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
      >
        {
          <div className={modalClass}>
            <h2>{message}</h2>
          </div>
        }
      </ModalForAll>
      <footer><p>© <span>MOBS</span> LLC, 2020</p></footer>
    </Router>
  );
}

export default App;
