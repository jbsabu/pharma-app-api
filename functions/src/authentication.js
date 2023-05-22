import { cert, initializeApp } from "firebase-admin/app";
import { service_account } from "../secrets.js";
import { app } from "./dbConnect.js";
import { getAuth } from "firebase-admin/auth";

export function authenticateKey(req, res) {

  const idToken = req.headers.authentication;
  getAuth(app)
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log(uid,decodedToken)
      res.send({authorization: idToken})
      // ...
    })
    .catch((error) => {
      res.status(401).send()
    });
}


export function verifyKey (req,res,next) {
  console.log(req.headers)
  const idToken = req.headers.authorization;
  const verified = false
  getAuth(app)
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log("VERIFIED TOKEN!")
      next()
      // ...
    })
    .catch((error) => {
      console.log("auth failed")
      res.status(401).send({message:"Invalid authentication or authentication expired, please login again"})
      return
    });
}