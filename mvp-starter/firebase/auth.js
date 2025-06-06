/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
const AuthUserContext = createContext({
  authUser: null,
  isLoading: true
});

export default function useFirebaseAuth(){
  const [authUser, setAuthUser]=useState(null);
  const[isLoading,setIsLoading]=useState();
  const onAuthStateChanged = async(user)=>{
    setIsLoading(true);
    if(!user){
      setAuthUser(null);
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,onAuthStateChanged);
    return()=> unsubscribe();
  },[])

  return {
    authUser,
    isLoading
  }
}

export function AuthUserProvider({children}){
  const auth = useFirebaseAuth();
  return<AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>;
}

export const useAuth = () => useContext(AuthUserContext);
