import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { PageContainer } from '../../components/Container'
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import * as ROUTES from '../../constants/routes';
const App = () => (
    <Router>
      <div>
        <PageContainer>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
        </PageContainer>
      </div>
    </Router>
)
export default App;
