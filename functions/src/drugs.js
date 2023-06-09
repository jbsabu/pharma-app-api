import { db } from "./dbConnect.js";
import { FieldValue } from "firebase-admin/firestore";

const coll = db.collection("drugs");

const drugs1 = [
  // {
  //   name: "Methamphetamine",
  //   category: ["ADHD stimulant medication", "Recreational drug"],
  //   subtype: "Amphetamine",
  //   agonist: ["TAAR1", "5-HT1B"],
  //   antagonist: ["DAT", "NET"],
  //   moa: [
  //   {name: "Inhibition of dopamine and norepinephrine reuptake", target: "DAT and NET"},
  //   {name: "TAAR1 and 5-HT1B agonism", target: "TAAR1 and 5-HT1B"},
  //   {name: "Release of dopamine and norepinephrine from vesicles", target: "Dopamine and norepinephrine transporters"}
  //   ]
  //   },
  //   {
  //   name: "Atomoxetine",
  //   category: ["ADHD medication"],
  //   subtype: "Selective norepinephrine reuptake inhibitor (SNRI)",
  //   agonist: [],
  //   antagonist: ["NET"],
  //   moa: [
  //   {name: "Inhibition of norepinephrine reuptake", target: "NET"},
  //   {name: "Modulation of prefrontal cortex activity", target: "Prefrontal cortex neurons"},
  //   {name: "Reduction in impulsivity", target: "Various mechanisms"},
  //   {name: "Improvement in executive function", target: "Various mechanisms"}
  //   ]
  //   },
  //   {
  //   name: "Guanfacine",
  //   category: ["ADHD medication"],
  //   subtype: "Alpha-2A adrenergic receptor agonist",
  //   agonist: ["A2A"],
  //   antagonist: [],
  //   moa: [
  //   {name: "Stimulation of alpha-2A adrenergic receptors", target: "Alpha-2A adrenergic receptor"},
  //   {name: "Improvement in prefrontal cortex function", target: "Prefrontal cortex neurons"},
  //   {name: "Reduction in impulsivity", target: "Various mechanisms"},
  //   {name: "Improvement in working memory", target: "Various mechanisms"}
  //   ]
  //   } ,
  //   {
  //     name: "Caffeine",
  //     category: ["Stimulant"],
  //     subtype: "Methylxanthine",
  //     agonist: [
  //       "D2",
  //       "AChR",
  //       "5-HT2A"
  //     ],
  //     antagonist: [
  //       "Alpha-1", "A2A",
  //     ],
  //     moa: [
  //       {name: "Antagonism of adenosine receptors", target: "A1 and A2A receptors"},
  //       {name: "Increase of cAMP production", target: "Adenylate cyclase"},
  //       {name: "Inhibition of phosphodiesterase (PDE)", target: "PDE"},
  //       {name: "Release of dopamine and glutamate", target: "Dopamine and glutamate transporters"},
  //       {name: "Modulation of calcium release and uptake", target: "Ryanodine and inositol triphosphate receptors"},
  //       {name: "Increase of intracellular calcium concentration", target: "Calcium channels"},
  //       {name: "Modulation of GABA activity", target: "GABA receptor"},
  //       {name: "Increase of adrenaline secretion", target: "Adrenal medulla"}
  //     ]
  //   }
];

const drugs = [];

export async function getDrugs(req, res) {
  console.log("?!!!!");
  const drugData = [];
  const pendingData = await coll
    .get()
    .then((data) => {
      data.forEach((drug, i) => {
        drug.label = drug.name;
        drugData.push(drug.data());
      });
    })
    .then(console.log(drugData));
  // console.log(drugData);
  res.json(drugData);
}

export async function addDrug(req, res) {
  const drug = req.body;
  if (
    !(
      drug.agonist &&
      drug.antagonist &&
      drug.moa &&
      drug.name &&
      drug.subtype &&
      drug.category
    )
  ) {
    res.status(400).send();
    return;
  }
  console.log("!!!!!");
  const result = await coll
    .doc(drug.name.toLowerCase())
    .set(drug)
    .then(res.send({ message: "Substance added to database successfully." }))
    .catch((err) => res.status(400).send({ message: err }));
  // console.log(drug);
}

export async function batchAddDrugs(req, res) {
  drugs.forEach(async (drug, i) => {
    // console.log(drug, i);
    // console.log(drug.name);
    await coll.doc(drug.name.toLowerCase()).set(drug);
  });
}

export async function deleteDrug(req, res) {
  const drug = req.body.drug;
  //res.send({ message: `Error while deleting ${drug}.` })
  const end = false
  const result = await coll
    .doc(drug.toLowerCase())
    .delete()
    .catch(()=>{res.send({message:"Could not delete drug."}); end = true })
    .then((deleted) =>{ console.log(deleted); if (end) return; res.send({ message: `Deleted ${drug} successfully.` })})
  ;
    console.log(result)
}
