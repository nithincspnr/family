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
import {
  Dashboard,
  AdminLogin,
  AddProfile,
  AdminLayout,
} from "./components/admin";
import { Search } from "./components";
import Login from "./components/Login";

// Creates react query client
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
        <Route index element={<Dashboard />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="edit-profile/:id" element={<>3</>} />
        <Route path="add-profile" element={<AddProfile />} />
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
