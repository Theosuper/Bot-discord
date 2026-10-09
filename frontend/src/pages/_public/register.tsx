import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute, Link } from "@tanstack/react-router";

import { useState } from "react";

export const Route = createFileRoute("/_public/register")({
  component: RegisterPage,
});
type FormularioItems = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

function RegisterPage() {
  const [formulario, setFormulario] = useState<FormularioItems>({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
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
        <Label>Name</Label>
        <Input
          placeholder="teste"
          type="name"
          value={formulario.name}
          onChange={(event) => {
            setFormulario((oldValue) => {
              return {
                ...oldValue,
                name: event.target.value,
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
        <Label>Confirm Password</Label>
        <Input
          placeholder="******"
          type="confirmPassword"
          value={formulario.confirmPassword}
          onChange={(event) => {
            setFormulario((oldValue) => {
              return {
                ...oldValue,
                confirmPassword: event.target.value,
              };
            });
          }}
        />
        <Button>Registrar</Button>
        <CardFooter>
          Já possui uma conta?
          <span className="text-blue-700 pl-2 hover:text-blue-600">
            <Link to="/login">Logue na sua conta agora</Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
