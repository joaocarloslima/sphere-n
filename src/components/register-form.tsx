"use client"

import { createUser } from "@/app/actions/user-actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckIcon } from "lucide-react";
import { useFormState } from "react-dom";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";

const initialState = {
    success: false,
    name: '',
    bio: '',
    email: '',
    password: '',
}

export default function RegisterForm() {

    const [state, handleSubmit] = useFormState(createUser, initialState)

    return (
        <form action={handleSubmit} className="space-y-2">
            <Label htmlFor="nome">nome</Label>
            <Input id="nome" name="name" />
            <Label htmlFor="bio">bio</Label>
            <Input id="bio" name="bio" />
            <Label htmlFor="email">email</Label>
            <Input id="email" name="email" />
            <Label htmlFor="senha">senha</Label>
            <Input id="senha" type="password" name="password" />
            <Button type="submit">entrar</Button>
            {state.success &&
                <Alert className="bg-green-700">
                    <CheckIcon className="w-6 h-6" />
                    <AlertTitle>Conta Criada</AlertTitle>
                    <AlertDescription>Você já pode realizar o login</AlertDescription>
                </Alert>
            }
        </form>


    )
}