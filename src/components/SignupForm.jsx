import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";

export const SignupForm = () => {
  const { registerWithEmailAndPassword } = useUserAuth();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    setHasError(false);
    try {
      await registerWithEmailAndPassword(data.email, data.password);
      navigate('/');
    } catch (error) {
      setHasError(true);
      if (error.code === "auth/email-already-in-use") {
        console.log("Já existe um email igual cadastrado.");
        setErrorMessage("Já existe um email igual cadastrado.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
        <Stack>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email", {
              required: "É necessário fornecer o e-mail!",
            })}
            type="email"
            placeholder="Seu e-mail"
            size="lg"
            width="auto"
            variant="outline"
          />
          {errors.email ? <p>Preencha com um e-mail</p> : null}
          {hasError && (
            <>
              <p>{errorMessage}</p>
            </>
          )}
          {/*  */}
          <FormLabel>Senha</FormLabel>
          <Input
            {...register("password", {
              required: "É necessário fornecer uma senha!",
            })}
            type="password"
            placeholder="Sua senha"
            size="lg"
            width="auto"
            variant="outline"
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
          {/*  */}
          <FormLabel>Repita a senha</FormLabel>
          <Input
            {...register("confirmPassword", {
              required: "Repita a senha",
            })}
            type="password"
            placeholder="Repita a senha"
            size="lg"
            width="auto"
            variant="outline"
          />
          <FormErrorMessage>
            {errors.confirmPassword && errors.confirmPassword.message}
          </FormErrorMessage>
          {/*  */}
          <Button type="submit" colorScheme="green" size="lg">
            Concluir cadastro
          </Button>
        </Stack>
      </FormControl>
    </form>
  );
};
