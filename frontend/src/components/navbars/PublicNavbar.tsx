import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

export function PublicNavbar() {
  return (
    <nav className="bg-secondary text-primary mb-2 h-12 p-2 flex items-center justify-between">
      <div className="text-purple-700 hover:text-purple-400 cursor-pointer">
        <Link to="/">DiscordaBot</Link>
      </div>
      <div>
        <Button>
          <Link to="/login">Logar</Link>
        </Button>
      </div>
    </nav>
  );
}
