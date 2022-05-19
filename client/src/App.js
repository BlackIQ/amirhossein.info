import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Messages from './pages/messages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact><p>Index</p></Route>
          <Route path='/messages' exact><Messages /></Route>
          <Route path='/messages/:id' exact><p>Message</p></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
