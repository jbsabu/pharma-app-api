import { db } from "./dbConnect.js";
import { FieldValue } from "firebase-admin/firestore";
const coll = db.collection("receptors");

const receptors = [

];

// export async function batchAdd(req, res) {
//   receptors.forEach(async (drug, i) => {
//     console.log(drug, i);
//     console.log(drug.name);
//     await coll.doc(drug.name.toLowerCase()).set(drug);
//   });
// }

// batchAdd();

export async function getReceptors(req, res) {
  console.log("?!!!!");
  const receptorData = [];
  const pendingData = await coll.get().then((data) => {
    data.forEach(async (receptor, i) => {
      receptor.label = receptor.name;
      receptorData.push(await receptor.data());
    });
  });

  res.send(receptorData);
}

