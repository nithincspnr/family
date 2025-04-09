import { Outlet } from "react-router";

export default function CommonLayout() {
  return (
    <div className="container mx-auto max-w-sm h-screen bg-white">
      <Outlet />
    </div>
  );
}
