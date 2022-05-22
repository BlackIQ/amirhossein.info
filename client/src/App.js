import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './pages/404';
import Auth from './pages/auth';
import Home from './pages/home';
import Message from './pages/message';

import Panel from './pages/panel';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/auth' exact><Auth /></Route>
          <Route path='/panel' exact><Panel /></Route>
          <Route path='/messages/:id'><Message /></Route>
          <Route path='*'><NotFound /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
