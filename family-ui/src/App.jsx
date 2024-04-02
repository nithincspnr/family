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
import AppLayout from "./Layout";
import Profile from "./profile";
import { AdminLayout, SearchProfile, AddProfile } from "./components/admin";
import Login from "./components/Login";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      {/* Main App */}
      <Route path="/app" element={<AppLayout />}>
        <Route path="search" element={<Search />} />
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      {/* Admin App */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="search" element={<SearchProfile />} />
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
