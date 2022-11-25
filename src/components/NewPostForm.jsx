import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../hooks/useUserAuth";
import { db } from "../services/firebase/firebase-config";

export const NewPostForm = () => {
  const { user } = useUserAuth();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Adicionar documento
      const docRef = await addDoc(collection(db, "posts"), {
        ...data,
        userid: user.uid,
      });
      console.log("Documento adicionado com o id", docRef.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
        <VStack>
          <FormLabel>Titulo</FormLabel>
          <Input
            {...register("title", {
              required: "É necessário fornecer um título!",
            })}
            type="text"
            size="lg"
            width="auto"
            variant="outline"
          />
          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
          {/*  */}
          <FormLabel>Corpo</FormLabel>
          <Input
            {...register("body", {
              required: "É necessário fornecer um conteúdo!",
            })}
            type="text"
            size="lg"
            width="auto"
            variant="outline"
          />
          <FormErrorMessage>
            {errors.body && errors.body.message}
          </FormErrorMessage>
          {/*  */}
          <Button type="submit" colorScheme="green" size="lg">
            Postar
          </Button>
        </VStack>
      </FormControl>
    </form>
  );
};
