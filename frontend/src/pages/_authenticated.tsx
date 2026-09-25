import { useUserStore } from "@/zustand/user.store";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
  beforeLoad: async ({}) => {
    const { user } = useUserStore.getState();
    if (!user) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function RouteComponent() {
  return <div></div>;
}
