import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './pages/auth';
import Home from './pages/home';
import Message from './pages/message';

import Messages from './pages/messages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/auth' exact><Auth /></Route>
          <Route path='/messages' exact><Messages /></Route>
          <Route path='/messages/:id'><Message /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
