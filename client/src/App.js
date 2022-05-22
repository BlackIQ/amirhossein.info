import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
