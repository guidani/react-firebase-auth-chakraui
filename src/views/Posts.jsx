import { Box, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../services/firebase/firebase-config";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {
    try {
      let temp = [];
      const collectionRef = await collection(db, "posts");
      const querySnapshot = await getDocs(collectionRef);
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
      console.log(error);
    }
  }

  useEffect(() => {
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
              </Text>
            </>
          ) : (
            <>
              {posts.map((item, index) => {
                return (
                  <div key={index}>
                    <p>ID: {item.id}</p>
                    <p>UserID: {item.userid}</p>
                    <p>Title: {item.title}</p>
                    <p>Body: {item.body}</p>
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
