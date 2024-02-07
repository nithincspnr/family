import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import "./index.css";
import Layout from "./Layout";
import Search from "./search";
import Profile from "./profile";
import Admin from "./admin";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          {/* Admin */}
          <Route path="/admin/1">
            <Admin />
          </Route>
          <Layout>
            {/* App */}
            <Route exact path="/profile/:id">
              <Profile />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/login">
              Login
              <br />
              <Link to="/profile/1">Profile</Link>
            </Route>
            <Route path="/">
              Login
              <br />
              <Link to="/profile/1">Profile</Link>
            </Route>
          </Layout>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
