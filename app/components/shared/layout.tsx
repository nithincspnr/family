import { Outlet } from "react-router";

export default function CommonLayout() {
  return (
    <div className="container mx-auto max-w-xl h-screen bg-gray-50">
      <Outlet />
    </div>
  );
}
