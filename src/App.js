import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import Details from './pages/Details';
import Error from './pages/Error';
import { getData } from './redux/data/data';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const regions = useSelector((state) => state.data.regions);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {regions.map((region) => (
        <Route key={`${region.id}#path`} path={`/${region.id}`}>
          <Details region={region} />
        </Route>
      ))}
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
};

export default App;
