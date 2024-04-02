import { QueryClient, QueryClientProvider } from "react-query";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import "./index.css";

import Search from "./search";
import Layout from "./Layout";
import Profile from "./profile";
// import Admin from "./admin";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<>Hello world</>} />
      <Route path="search" element={<Search />} />
      <Route path="profile/:id" element={<Profile />} />

      <Route path="*" element={<p>Not found</p>} />
    </Route>
  )
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <Router>
        <Switch>
         
          <Route path="/admin">
            <Admin />
          </Route>
          
          <Layout>
            <Route exact path="/">
              <Link to="/admin">Go to admin</Link>
              <br />
              <Link to="/search">Go to Search</Link>
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/profile/:id">
              <Profile />
            </Route>
          </Layout>
        </Switch>
      </Router> */}
    </QueryClientProvider>
  );
};

export default App;
