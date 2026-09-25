import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="bg-primary h-[100vh] w-[100vw]">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
