import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import Layout from "./Layout";
import Profile from "./profile";
import Search from "./search";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">Login</Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
