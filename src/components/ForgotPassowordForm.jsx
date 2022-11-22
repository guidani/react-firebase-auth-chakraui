import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../hooks/useUserAuth";

export const ForgotPasswordForm = () => {
  const { resetPassword } = useUserAuth();
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

  const onSubmit = async (data) => {
    try {
      await resetPassword(data.email);
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
          {errors.email && errors.email.message}
          <Button type="submit" colorScheme="green" size="lg">
            Enviar email
          </Button>
        </Stack>
      </FormControl>
    </form>
  );
};
