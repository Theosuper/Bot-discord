import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Card>
        <CardTitle>Meu site de bot</CardTitle>
        <CardContent>Super site para bot no discord</CardContent>
      </Card>
    </div>
  );
}
