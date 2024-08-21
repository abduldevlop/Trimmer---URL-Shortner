import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      header
      <main>
        <Outlet />
      </main>
      footer
    </div>
  );
};

export default AppLayout;
