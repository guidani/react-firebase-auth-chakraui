import { useContext } from "react";
import { userAuthContext } from "../contexts/UserAuthContext";

export function useUserAuth() {
  return useContext(userAuthContext);
}
