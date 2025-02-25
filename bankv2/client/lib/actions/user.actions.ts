"use server";
import { ID } from 'node-appwrite';
import {createSessionClient,createAdminClient} from '../appwrite';
import { cookies } from 'next/headers';
import { parseStringify } from '../utils';



export const signIn=async({email,password}:signInProps)=>{
    try{
      const { account } = await createAdminClient();
      const response= await account.createEmailPasswordSession(email,password);
      return parseStringify(response);
    }catch(error){
        console.error(error);
    }
}

export const signUp=async(userData:SignUpParams)=>{
    const {email,password,firstName,lastName} = userData;

    try{
        const { account } = await createAdminClient();

  const newUserAccount=await account.create(
    ID.unique(),
     email,
      password,
    `${firstName},${lastName}` );
  const session = await account.createEmailPasswordSession(email, password);

  (await cookies()).set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  })

    const userInfo=await account.get();
    console.log("Account  : ",newUserAccount);
    return parseStringify({session,userInfo});
    
    }catch(error){
        console.error("Fail to Sign Up : ",error);
    }
}


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();

    return await account.get();
  } catch (error) {
    return null;
  }
}
