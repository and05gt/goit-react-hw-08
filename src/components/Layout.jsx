import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
