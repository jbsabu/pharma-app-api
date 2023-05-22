import { initializeApp,cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { service_account } from "../secrets.js";

export const app = initializeApp({ // connect with cred
  credential: cert(service_account)
})


export const db = getFirestore()
