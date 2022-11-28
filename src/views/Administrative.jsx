import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../hooks/useUserAuth";
import { db } from "../services/firebase/firebase-config";
import { AdminDashboard } from "./AdminDashboard";
import { InsuficientPermissions } from "./InsuficientPermissions";

export const Administrative = () => {
  // Verificar se o usuário atual é admin ou não
  // se o uid do usuário existir na tabela de admins...
  //...então deve ser exibido um componente
  //...caso contrário um componente negativo deve ser exibido.
  const { user } = useUserAuth();
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  async function isAdmin() {
    const userId = user.uid;
    console.log(userId);
    //
    const docRef = doc(db, "admins", `${userId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Data: ", docSnap.data());
      setIsUserAdmin(true);
    } else {
      // console.log("Documento não existe.");
      setIsUserAdmin(false);
    }
  }

  useEffect(() => {
    isAdmin();
  }, []);

  if (isUserAdmin) return <AdminDashboard />;

  return <InsuficientPermissions />;
};
