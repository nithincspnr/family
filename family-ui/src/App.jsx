import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import "./index.css";
import Layout from "./Layout";
import Profile from "./profile";
import Search from "./search";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/profile/:id">
              <Profile />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              Login
              <br />
              <Link to="/profile/1">Profile</Link>
            </Route>
          </Switch>
        </Router>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
