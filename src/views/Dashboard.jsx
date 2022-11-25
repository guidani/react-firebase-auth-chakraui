import { Box, Text } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { UserDataTable } from "../components/UserDataTable";
import { useUserAuth } from "../hooks/useUserAuth";
import { db } from "../services/firebase/firebase-config";

export const Dashboard = () => {
  const {user} = useUserAuth()
  const [posts, setPosts] = useState([])

  async function getPostsFromCurrentUser() {
    // console.log(userId);
    try{
      let temp = [];
      const userId = user.uid;
      const postsRef = await collection(db, "posts");
      const q = query(postsRef, where("userid", "==", `${userId}`));
      const querySnapshot = await getDocs(q);
      if(querySnapshot.empty) return;
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        const post = {
          id: doc.id,
          title: doc.data().title,
          body: doc.data().body,
          userid: doc.data().userid,
        };
        temp.push(post);
        setPosts(temp);
      });
    } catch (error){
      console.log(error);
    }

    
  }

  useEffect(() => {
    getPostsFromCurrentUser();
  }, []);

  return (
    <>
      <UserDataTable />
      {/*  */}
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
