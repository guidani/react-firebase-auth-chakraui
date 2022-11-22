import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";

export const SigninForm = () => {
  const { logInWithEmailAndPassword } = useUserAuth();
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
    },
  });
  const onSubmit = async (data) => {
    try {
      await logInWithEmailAndPassword(data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
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
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
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
          <Button type="submit" colorScheme="green" size="lg">
            Entrar
          </Button>
        </Stack>
      </FormControl>
    </form>
  );
};
