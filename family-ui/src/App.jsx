import { QueryClient, QueryClientProvider } from "react-query";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./styles/App.css";
import "./styles/index.css";

import AppLayout from "./components/shared/Layout";
import Profile from "./components/profile";
import { AdminLayout, SearchProfile, AddProfile } from "./components/admin";
import { Search } from "./components";
import Login from "./components/Login";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Main App */}
      <Route path="/" element={<AppLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="search" element={<Search />} />
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      {/* Admin App */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<SearchProfile />} />
        <Route path="add-profile" element={<AddProfile />} />
        <Route path="edit-profile/:id" element={<>3</>} />
      </Route>
      {/* Not found */}
      <Route path="*" element={<p>Not found</p>} />
    </Route>
  )
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
