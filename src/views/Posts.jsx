import { Box, Text } from "@chakra-ui/react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../hooks/useUserAuth";
import { db } from "../services/firebase/firebase-config";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState("");
  const { user } = useUserAuth();

  async function isAdmin() {
    const userId = user.uid;
    console.log(userId);
    //
    const docRef = doc(db, "admins", `${userId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Data: ", docSnap.data());
      return true;
    } else {
      console.log("Documento não existe.");
      return false;
    }
  }

  async function getAllPosts() {
    try {
      let temp = [];
      const collectionRef = collection(db, "posts");
      const querySnapshot = await getDocs(collectionRef);
      if (querySnapshot.empty) return;
      querySnapshot.forEach((doc) => {
        const post = {
          id: doc.id,
          title: doc.data().title,
          body: doc.data().body,
          userid: doc.data().userid,
        };
        temp.push(post);
        setPosts(temp);
      });
      console.log(temp);
    } catch (error) {
      console.log("Permissão negada!");
      setErrors("Desculpe. Ocorreu um erro inesperado!");
    }
  }

  useEffect(() => {
    isAdmin();
    getAllPosts();
  }, []);
  return (
    <>
      <Box w="100%" marginTop="4" bg="gray.300" as="main">
        <Text align="center" fontSize="4xl" as="h1">
          Posts
        </Text>
        <Box w="100%" as="section" marginTop="4">
          {!posts ? (
            <>
              <Text as="p" fontSize="2xl" align="center">
                Não há nada para ser exibido
                {errors ? <p>Você não tem permissão</p> : ""}
              </Text>
            </>
          ) : (
            <>
              {posts.map((item, index) => {
                return (
                  <div key={index}>
                    <Box p='4' bg='white' m='2'>
                      <p>ID: {item.id}</p>
                      <p>UserID: {item.userid}</p>
                      <p>Title: {item.title}</p>
                      <p>Body: {item.body}</p>
                    </Box>
                  </div>
                );
              })}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
