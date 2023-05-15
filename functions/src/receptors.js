import { db } from "./dbConnect.js";
import { FieldValue } from "firebase-admin/firestore";
const coll = db.collection("receptors");

const dataTemp = {};
// data needed;
// name, subtype, family
// e.g 5-HT1A
// subtype serotonin
// family G protein-coupled receptor [gcpr]
// effects-ag {
//
// }


// export async function batchAddDrugs(req, res) {
//   receptors.forEach(async (drug, i) => {
//     console.log(drug, i);
//     console.log(drug.name);
//     await coll.doc(drug.name.toLowerCase()).set(drug);
//   });
// }

// batchAddDrugs()

export async function getReceptors(req,res){
  console.log("?!!!!")
  const receptorData = []
const pendingData = await coll.get().then((data)=>{
  data.forEach(async (receptor,i)=>{
    receptor.label = receptor.name
    receptorData.push(await receptor.data())
  })}
)


  res.send(receptorData)
  console.log("SENT!",receptorData)

}

// export async function addReceptor(req, res) {}
  // const { name, subtype, family, cardiovascularActivity, anxiolytic } =
    // req.body;



// export async function setReceptorAgData(req, res) {

// }

// const _5_HT1A = {
//   name: "5-HT1A",
//   subtype: "Gi/o-coupled",
//   family: "Serotonin receptor",
//   location: ["Prefrontal cortex", "Hippocampus", "Raphe nuclei"],
//   effect: {
//     agonist: {
//       short_term: {
//         heart_rate: -2,
//         blood_pressure: -1,
//         anxiolytic: +3,
//         depressive: -4,
//         cognitive_function: +3,
//         nociception: -0.5,
//         sleep: +2,
//         motor_activity: -2,
//       },
//       chronic: {
//         heart_rate: -2,
//         blood_pressure: -1,
//         anxiolytic: +3,
//         depressive: -4,
//         cognitive_function: +3,
//         nociception: -0.5,
//         sleep: +2,
//         motor_activity: -4,
//       },
//     },
//     antagonist: {
//       short_term: {
//         heart_rate: +2,
//         blood_pressure: +1,
//         anxiolytic: -3,
//         depressive: +4,
//         cognitive_function: -3,
//         nociception: +0.5,
//         sleep: -2,
//         appetite: +3,
//         motor_activity: +2,
//       },
//       chronic: {
//         heart_rate: +2,
//         blood_pressure: +1,
//         anxiolytic: -3,
//         depressive: +4,
//         cognitive_function: -3,
//         nociception: +0.5,
//         sleep: -2,
//         appetite: +3,
//         motor_activity: +4,
//       },
//     },
//   },
//   moa: {
//     agonist: {
//       cognitive_function: {
//         effect: +3,
//         mechanism: "increased BDNF expression in the prefrontal cortex",
//       },
//       anxiolytic: {
//         effect: +3,
//         mechanism: "activation of GABAergic neurons in the prefrontal cortex",
//       },
//       depressive: {
//         effect: -4,
//         mechanism: "downregulation of the HPA axis",
//       },
//       nociception: {
//         effect: -0.5,
//         mechanism: "modulation of pain signaling pathways",
//       },
//       heart_rate: {
//         effect: -2,
//         mechanism: "inhibition of cardiac sympathetic output",
//       },
//       blood_pressure: {
//         effect: -1,
//         mechanism: "vasodilation",
//       },
//       sleep: {
//         effect: +2,
//         mechanism:
//           "activation of pre-synaptic 5-HT1A receptors in the raphe nuclei",
//       },
//       motor_activity: {
//         effect: -2,
//         mechanism: "inhibition of motor output from the spinal cord",
//       },
//     },
//     antagonist: {
//       cognitive_function: {
//         effect: -3,
//         mechanism: "decreased BDNF expression in the prefrontal cortex",
//       },
//       anxiolytic: {
//         effect: -3,
//         mechanism: "inhibition of GABAergic neurons in the prefrontal cortex",
//       },
//       depressive: {
//         effect: +4,
//         mechanism: "upregulation of the HPA axis",
//       },
//       nociception: {
//         effect: +0.5,
//         mechanism: "modulation of pain signaling pathways",
//       },
//       heart_rate: {
//         effect: +2,
//         mechanism: "increase in cardiac sympathetic output",
//       },
//       blood_pressure: {
//         effect: +1,
//         mechanism: "vasoconstriction",
//       },
//       sleep: {
//         effect: -2,
//         mechanism:
//           "inhibition of pre-synaptic 5-HT1A receptors in the raphe nuclei",
//       },
//       appetite: {
//         effect: +3,
//         mechanism: "increase in hypothalamic neuropeptide Y (NPY) release",
//       },
//       motor_activity: {
//         effect: +2,
//         mechanism: "increase in motor output from the spinal cord",
//       },
//     },
//   },
// };

// const _5_HT2A = {
//   name: "5-HT2A",
//   subtype: "Gq/11-coupled",
//   family: "Serotonin receptor",
//   location: ["Cortex, striatum, limbic system"],
//   effect: {
//     agonist: {
//       short_term: {
//         heart_rate: +1,
//         blood_pressure: +2,
//         anxiolytic: -3,
//         hallucinogenic: +4,
//         cognitive_function: -2,
//         nociception: +2,
//         sleep: -2,
//         motor_activity: +2,
//       },
//       chronic: {
//         heart_rate: +1,
//         blood_pressure: +2,
//         anxiolytic: -3,
//         hallucinogenic: +4,
//         cognitive_function: -2,
//         nociception: +2,
//         sleep: -2,
//         motor_activity: +4,
//       },
//     },
//     antagonist: {
//       short_term: {
//         heart_rate: -1,
//         blood_pressure: -2,
//         anxiolytic: +3,
//         antidepressant: +3,
//         cognitive_function: +2,
//         nociception: -2,
//         sleep: +2,
//         motor_activity: -2,
//       },
//       chronic: {
//         heart_rate: -1,
//         blood_pressure: -2,
//         anxiolytic: +3,
//         antidepressant: +3,
//         cognitive_function: +2,
//         nociception: -2,
//         sleep: +2,
//         motor_activity: -4,
//       },
//     },
//   },
//   moa: {
//     agonist: {
//       cognitive_function: {
//         effect: -2,
//         mechanism: "inhibition of glutamate release in the prefrontal cortex",
//       },
//       anxiolytic: {
//         effect: -3,
//         mechanism: "inhibition of serotonergic activity in the amygdala",
//       },
//       hallucinogenic: {
//         effect: +4,
//         mechanism: "activation of cortical 5-HT2A receptors",
//       },
//       nociception: {
//         effect: +2,
//         mechanism: "activation of descending pain pathways",
//       },
//       heart_rate: {
//         effect: +1,
//         mechanism:
//           "vasoconstriction and stimulation of cardiac sympathetic output",
//       },
//       blood_pressure: {
//         effect: +2,
//         mechanism: "vasoconstriction",
//       },
//       sleep: {
//         effect: -2,
//         mechanism:
//           "suppression of melatonin synthesis and disruption of circadian rhythm",
//       },
//       motor_activity: {
//         effect: +2,
//         mechanism: "stimulation of dopamine release in the striatum",
//       },
//     },
//     antagonist: {
//       cognitive_function: {
//         effect: +2,
//         mechanism: "increased glutamate release in the prefrontal cortex",
//       },
//       anxiolytic: {
//         effect: +3,
//         mechanism: "enhanced serotonergic activity in the amygdala",
//       },
//       antidepressant: {
//         effect: +3,
//         mechanism:
//           "increased BDNF expression and neurogenesis in the hippocampus",
//       },
//       nociception: {
//         effect: -2,
//         mechanism: "inhibition of descending pain pathways",
//       },
//       heart_rate: {
//         effect: -1,
//         mechanism: "vasodilation and inhibition of cardiac sympathetic output",
//       },
//       blood_pressure: {
//         effect: -2,
//         mechanism: "vasodilation",
//       },
//       sleep: {
//         effect: +2,
//         mechanism: "restoration of the circadian rhythm",
//       },
//       motor_activity: {
//         effect: -2,
//         mechanism: "reduced dopamine release in the striatum",
//       },
//     },
//   },
// };

// const _5_HT3A = {
//   name: "5-HT3A",
//   subtype: "ligand-gated ion channel",
//   family: "Serotonin receptor",
//   location: ["Cortex", "Hippocampus", "Amygdala", "Nucleus accumbens", "Striatum", "Thalamus", "Brainstem"] ,
//   effect: {
//     agonist: {
//       short_term: {
//         nausea: +3,
//         vomiting: +3,
//         anxiety: -2,
//         analgesic: -2,
//         respiratory_rate: +2,
//         heart_rate: +1,
//         blood_pressure: +1,
//       },
//       chronic: {
//         nausea: +3,
//         vomiting: +3,
//         anxiety: -2,
//         analgesic: -2,
//         respiratory_rate: +2,
//         heart_rate: +1,
//         blood_pressure: +1,
//       },
//     },
//     antagonist: {
//       short_term: {
//         nausea: -3,
//         vomiting: -3,
//         anxiety: +2,
//         analgesic: +2,
//         respiratory_rate: -2,
//         heart_rate: -1,
//         blood_pressure: -1,
//       },
//       chronic: {
//         nausea: -3,
//         vomiting: -3,
//         anxiety: +2,
//         analgesic: +2,
//         respiratory_rate: -2,
//         heart_rate: -1,
//         blood_pressure: -1,
//       },
//     },
//   },
//   moa: {
//     agonist: {
//       nausea: {
//         effect: +3,
//         mechanism:
//           "activation of vagal afferents in the GI tract and brainstem",
//       },
//       vomiting: {
//         effect: +3,
//         mechanism: "activation of central and peripheral 5-HT3 receptors",
//       },
//       anxiety: {
//         effect: -2,
//         mechanism: "inhibition of serotonergic activity in the amygdala",
//       },
//       analgesic: {
//         effect: -2,
//         mechanism: "inhibition of pain transmission in the spinal cord",
//       },
//       respiratory_rate: {
//         effect: +2,
//         mechanism: "stimulation of respiratory centers in the brainstem",
//       },
//       heart_rate: {
//         effect: +1,
//         mechanism: "stimulation of sympathetic cardiac output",
//       },
//       blood_pressure: {
//         effect: +1,
//         mechanism: "vasoconstriction",
//       },
//     },
//     antagonist: {
//       nausea: {
//         effect: -3,
//         mechanism:
//           "inhibition of vagal afferents in the GI tract and brainstem",
//       },
//       vomiting: {
//         effect: -3,
//         mechanism: "inhibition of central and peripheral 5-HT3 receptors",
//       },
//       anxiety: {
//         effect: +2,
//         mechanism: "enhancement of serotonergic activity in the amygdala",
//       },
//       analgesic: {
//         effect: +2,
//         mechanism: "activation of pain transmission in the spinal cord",
//       },
//       respiratory_rate: {
//         effect: -2,
//         mechanism: "inhibition of respiratory centers in the brainstem",
//       },
//       heart_rate: {
//         effect: -1,
//         mechanism: "inhibition of sympathetic cardiac output",
//       },
//       blood_pressure: {
//         effect: -1,
//         mechanism: "vasodilation",
//       },
//     },
//   },
// };

// const TrKB = {
//   name: "TrkB",
//   subtype: "Tyrosine kinase receptor",
//   family: "Neurotrophin receptor",
//   location: ["Hippocampus", "Cortex", "Amygdala", "Striatum", "Cerebellum"],
//   effect: {
//     agonist: {
//       short_term: {
//         cognitive_function: +2,
//         synaptic_plasticity: +3,
//         neurogenesis: +4,
//         anxiety: -2,
//         depression: -3,
//         nociception: -1,
//         appetite: -1,
//       },
//       chronic: {
//         cognitive_function: +3,
//         synaptic_plasticity: +4,
//         neurogenesis: +5,
//         anxiety: -3,
//         depression: -4,
//         nociception: -1,
//         appetite: -2,
//       },
//     },
//     antagonist: {
//       short_term: {
//         cognitive_function: -2,
//         synaptic_plasticity: -3,
//         neurogenesis: -4,
//         anxiety: +2,
//         depression: +3,
//         nociception: +1,
//         appetite: +1,
//       },
//       chronic: {
//         cognitive_function: -3,
//         synaptic_plasticity: -4,
//         neurogenesis: -5,
//         anxiety: +3,
//         depression: +4,
//         nociception: +1,
//         appetite: +2,
//       },
//     },
//   },
//   moa: {
//     agonist: {
//       cognitive_function: {
//         effect: +2,
//         mechanism:
//           "Activation of intracellular signaling pathways promoting synaptic plasticity and neuronal survival",
//       },
//       synaptic_plasticity: {
//         effect: +3,
//         mechanism:
//           "Promotion of synapse formation and strengthening through activation of intracellular signaling pathways",
//       },
//       neurogenesis: {
//         effect: +4,
//         mechanism:
//           "Stimulation of neural stem cell proliferation and differentiation through activation of intracellular signaling pathways",
//       },
//       anxiety: {
//         effect: -2,
//         mechanism:
//           "Inhibition of stress-induced neuronal apoptosis and activation of intracellular signaling pathways promoting neuronal survival",
//       },
//       depression: {
//         effect: -3,
//         mechanism:
//           "Enhancement of synaptic plasticity and promotion of neurogenesis through activation of intracellular signaling pathways",
//       },
//       nociception: {
//         effect: -1,
//         mechanism:
//           "Inhibition of pain signaling through modulation of neurotransmitter release in pain pathways",
//       },
//       appetite: {
//         effect: -1,
//         mechanism:
//           "Inhibition of appetite through modulation of neurotransmitter release in feeding pathways",
//       },
//     },
//     antagonist: {
//       cognitive_function: {
//         effect: -2,
//         mechanism:
//           "Inhibition of intracellular signaling pathways promoting synaptic plasticity and neuronal survival",
//       },
//       synaptic_plasticity: {
//         effect: -3,
//         mechanism:
//           "Inhibition of synapse formation and strengthening through modulation of intracellular signaling pathways",
//       },
//       neurogenesis: {
//         effect: -4,
//         mechanism:
//           "Inhibition of neural stem cell proliferation and differentiation through modulation of intracellular signaling pathways",
//       },
//       anxiety: {
//         effect: +2,
//         mechanism:
//           "Induction of stress-induced neuronal apoptosis and modulation of intracellular signaling pathways promoting neuronal survival",
//       },
//       depression: {
//         effect: +3,
//         mechanism:
//           "Impairment of synaptic plasticity and inhibition of neurogenesis through modulation of intracellular signaling pathways",
//       },
//       nociception: {
//         effect: +1,
//         mechanism:
//           "Enhancement of pain signaling through modulation of neurotransmitter release in pain pathways",
//       },
//       appetite: {
//         effect: +1,
//         mechanism:
//           "Stimulation of appetite through modulation of neurotransmitter release in feeding pathways",
//       },
//     },
//   },
// };

// const sigma_1 = {
//   name: "Sigma-1",
//   subtype: "Non-opioid receptor",
//   family: "Sigma receptor",
//   location: [
//     "Prefrontal cortex",
//     "Hippocampus",
//     "Amygdala",
//     "Thalamus",
//     "Striatum",
//     "Cerebellum",
//     "Spinal cord",
//   ],
//   effect: {
//     agonist: {
//       short_term: {
//         anxiolytic: +2,
//         cognitive_function: +1,
//         nociception: -1,
//         sleep: +2,
//         motor_activity: -1,
//         neuroprotection: +3,
//         neurogenesis: +3,
//       },
//       chronic: {
//         anxiolytic: +2,
//         cognitive_function: +1,
//         nociception: -1,
//         sleep: +2,
//         motor_activity: -1,
//         neuroprotection: +3,
//         neurogenesis: +3,
//       },
//     },
//     antagonist: {
//       short_term: {
//         anxiolytic: -2,
//         cognitive_function: -1,
//         nociception: +1,
//         sleep: -2,
//         appetite: +2,
//         motor_activity: +1,
//         neuroprotection: -3,
//         neurogenesis: -3,
//       },
//       chronic: {
//         anxiolytic: -2,
//         cognitive_function: -1,
//         nociception: +1,
//         sleep: -2,
//         appetite: +2,
//         motor_activity: +1,
//         neuroprotection: -3,
//         neurogenesis: -3,
//       },
//     },
//   },
//   moa: {
//     agonist: {
//       cognitive_function: {
//         effect: +1,
//         mechanism:
//           "increased BDNF expression in the hippocampus and prefrontal cortex",
//       },
//       anxiolytic: {
//         effect: +2,
//         mechanism:
//           "activation of GABAergic neurons in the amygdala and prefrontal cortex",
//       },
//       nociception: {
//         effect: -1,
//         mechanism: "modulation of pain signaling pathways",
//       },
//       sleep: {
//         effect: +2,
//         mechanism:
//           "enhancement of slow-wave sleep via modulation of thalamocortical networks",
//       },
//       motor_activity: {
//         effect: -1,
//         mechanism: "inhibition of motor output from the spinal cord",
//       },
//       neuroprotection: {
//         effect: +3,
//         mechanism:
//           "inhibition of calcium influx and modulation of ER stress pathways",
//       },
//       neurogenesis: {
//         effect: +3,
//         mechanism:
//           "activation of signaling pathways involved in neurogenesis, such as CREB and BDNF",
//       },
//     },
//     antagonist: {
//       cognitive_function: {
//         effect: -1,
//         mechanism:
//           "decreased BDNF expression in the hippocampus and prefrontal cortex",
//       },
//       anxiolytic: {
//         effect: -2,
//         mechanism:
//           "inhibition of GABAergic neurons in the amygdala and prefrontal cortex",
//       },
//       nociception: {
//         effect: +1,
//         mechanism: "modulation of pain signaling pathways",
//       },
//       sleep: {
//         effect: -2,
//         mechanism:
//           "suppression of slow-wave sleep via modulation of thalamocortical networks",
//       },
//       appetite: {
//         effect: +2,
//         mechanism: "increase in hypothalamic neuropeptide Y (NPY) release",
//       },
//       motor_activity: {
//         effect: +1,
//         mechanism: "increase in motor output from the spinal cord",
//       },
//       neuroprotection: {
//         effect: -3,
//         mechanism:
//           "inhibition of sigma-1 receptor-mediated neurotrophic effects such as inhibition of calcium influx and modulation of ER stress pathways",
//       },
//       neurogenesis: {
//         effect: -3,
//         mechanism:
//           "inhibition of signaling pathways involved in neurogenesis, such as CREB and BDNF",
//       },
//     },
//   },
// };


// const adenosine_a1 = {
//   name: "A1",
//   subtype: "Gi/0-coupled",
//   family: "Adenosine receptor",
//   location: [  "Cerebral cortex",  "Hippocampus",  "Thalamus",  "Cerebellum",  "Amygdala"],
//   effect: {
//     agonist: {
//       short_term: {
//         heart_rate: -1,
//         blood_pressure: -2,
//         anxiolytic: +1,
//         sedative: +2,
//         cognitive_function: -2,
//         nociception: -1,
//         sleep: +3,
//         motor_activity: -2
//       },
//       chronic: {
//         heart_rate: -1,
//         blood_pressure: -2,
//         anxiolytic: +1,
//         sedative: +2,
//         cognitive_function: -2,
//         nociception: -1,
//         sleep: +3,
//         motor_activity: -2
//       }
//     },
//     antagonist: {
//       short_term: {
//         heart_rate: +1,
//         blood_pressure: +2,
//         anxiogenic: -1,
//         arousal: +2,
//         cognitive_function: +2,
//         nociception: +1,
//         sleep: -3,
//         motor_activity: +2
//       },
//       chronic: {
//         heart_rate: +1,
//         blood_pressure: +2,
//         anxiogenic: -1,
//         arousal: +2,
//         cognitive_function: +2,
//         nociception: +1,
//         sleep: -3,
//         motor_activity: +2
//       }
//     }
//   },
//   moa: {
//     agonist: {
//       cognitive_function: {
//         effect: -2,
//         mechanism: "reduction of glutamate release in the prefrontal cortex"
//       },
//       anxiolytic: {
//         effect: +1,
//         mechanism: "reduction of noradrenergic and serotonergic neurotransmission in the amygdala"
//       },
//       sedative: {
//         effect: +2,
//         mechanism: "activation of GABAergic neurotransmission in the thalamus"
//       },
//       nociception: {
//         effect: -1,
//         mechanism: "reduction of ascending pain pathways"
//       },
//       sleep: {
//         effect: +3,
//         mechanism: "increase in adenosine levels promoting sleep"
//       },
//       motor_activity: {
//         effect: -2,
//         mechanism: "reduction of dopamine release in the striatum"
//       }
//     },
//     antagonist: {
//       cognitive_function: {
//         effect: +2,
//         mechanism: "increase of glutamate release in the prefrontal cortex"
//       },
//       anxiogenic: {
//         effect: -1,
//         mechanism: "increase of noradrenergic and serotonergic neurotransmission in the amygdala"
//       },
//       arousal: {
//         effect: +2,
//         mechanism: "blockade of adenosine-mediated inhibition of glutamate and acetylcholine release in the thalamus"
//       },
//       nociception: {
//         effect: +1,
//         mechanism: "increase of ascending pain pathways"
//       },
//       sleep: {
//         effect: -3,
//         mechanism: "inhibition of adenosine levels promoting sleep"
//       },
//       motor_activity: {
//         effect: +2,
//         mechanism: "increase of dopamine release in the striatum"
//       }
//     }
//   }
// }
