import { PublicNavbar } from "@/components/navbars/PublicNavbar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <PublicNavbar></PublicNavbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
