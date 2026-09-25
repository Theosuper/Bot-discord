import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_public/login")({
  component: LoginPage,
});
type FormularioItems = {
  email: string;
  password: string;
};

function LoginPage() {
  const [formulario, setFormulario] = useState<FormularioItems>({
    email: "",
    password: "",
  });
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="w-128 p-4">
        <CardTitle className="flex items-center justify-center">
          Logar no Discord bot
        </CardTitle>
        <Label>Email</Label>
        <Input
          placeholder="teste@gmail.com"
          type="email"
          value={formulario.email}
          onChange={(event) => {
            setFormulario((oldValue) => {
              return {
                ...oldValue,
                email: event.target.value,
              };
            });
          }}
        />
        <Label>Senha</Label>
        <Input
          placeholder="******"
          type="password"
          value={formulario.password}
          onChange={(event) => {
            setFormulario((oldValue) => {
              return {
                ...oldValue,
                password: event.target.value,
              };
            });
          }}
        />
        <Button>Logar</Button>
      </Card>
    </div>
  );
}
