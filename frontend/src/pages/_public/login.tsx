import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginIntoApp } from "@/requests/auth.request";
import { useUserStore } from "@/zustand/user.store";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
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
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  async function handleLogin() {
    const resposta = loginIntoApp({
      password: formulario.password,
      login: formulario.email,
    });
    setUser(resposta);
    navigate({ to: "/chat" });
    useNavigate;
  }

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
        <Button onClick={handleLogin}>Logar</Button>

        <CardFooter>
          Não tem conta ainda?
          <span className="text-blue-700 pl-2 hover:text-blue-600">
            <Link to="/register">Registre sua conta agora</Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
