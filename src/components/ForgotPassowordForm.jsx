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

export const ForgotPasswordForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => console.log(data);
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
        <Button type="submit" colorScheme="green" size='lg'>
          Enviar email
        </Button>
        </Stack>
      </FormControl>
    </form>
  );
};
