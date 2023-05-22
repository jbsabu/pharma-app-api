import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { data } from "./testData.js";
import fs from "fs";
import { addDrug, batchAddDrugs, deleteDrug, getDrugs } from "./src/drugs.js";
import { getReceptors } from "./src/receptors.js";
import { authenticateKey, verifyKey } from "./src/authentication.js";


const PORT = 3005;

const app = express();
app.use(cors());
app.use(express.json());

// routes

// app.post('/signup',signup)
// app.post('/login',login)
// app.post('/addshow',addShow)
app.get('/getdrugs',getDrugs)
app.get('/getreceptors',getReceptors)
app.post('/deletedrug',verifyKey,deleteDrug)

app.post('/adddrug',verifyKey,addDrug)

app.get('/verifyAuth',authenticateKey)

// show routes

//10:15

// tdData();

// run without emulator
// app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}`))

export const api = functions.https.onRequest(app); // exports our cloud function

// todo
// mobile ready projs
// neaten projs
// setup portfolio site
 
batchAddDrugs()

const receptors = [
  {
    name: "5-HT1A",
    subtype: "Gi/o-coupled",
    family: "Serotonin receptor",
    location: ["Prefrontal cortex", "Hippocampus", "Raphe nuclei"],
    effect: {
      agonist: {
        short_term: {
          heart_rate: -2,
          blood_pressure: -1,
          anxiolytic: +3,
          depressive: -4,
          cognitive_function: +3,
          nociception: -0.5,
          sleep: +2,
          motor_activity: -2,
        },
        chronic: {
          heart_rate: -2,
          blood_pressure: -1,
          anxiolytic: +3,
          depressive: -4,
          cognitive_function: +3,
          nociception: -0.5,
          sleep: +2,
          motor_activity: -4,
        },
      },
      antagonist: {
        short_term: {
          heart_rate: +2,
          blood_pressure: +1,
          anxiolytic: -3,
          depressive: +4,
          cognitive_function: -3,
          nociception: +0.5,
          sleep: -2,
          appetite: +3,
          motor_activity: +2,
        },
        chronic: {
          heart_rate: +2,
          blood_pressure: +1,
          anxiolytic: -3,
          depressive: +4,
          cognitive_function: -3,
          nociception: +0.5,
          sleep: -2,
          appetite: +3,
          motor_activity: +4,
        },
      },
    },
    moa: {
      agonist: {
        cognitive_function: {
          effect: +3,
          mechanism: "increased BDNF expression in the prefrontal cortex",
        },
        anxiolytic: {
          effect: +3,
          mechanism: "activation of GABAergic neurons in the prefrontal cortex",
        },
        depressive: {
          effect: -4,
          mechanism: "downregulation of the HPA axis",
        },
        nociception: {
          effect: -0.5,
          mechanism: "modulation of pain signaling pathways",
        },
        heart_rate: {
          effect: -2,
          mechanism: "inhibition of cardiac sympathetic output",
        },
        blood_pressure: {
          effect: -1,
          mechanism: "vasodilation",
        },
        sleep: {
          effect: +2,
          mechanism:
            "activation of pre-synaptic 5-HT1A receptors in the raphe nuclei",
        },
        motor_activity: {
          effect: -2,
          mechanism: "inhibition of motor output from the spinal cord",
        },
      },
      antagonist: {
        cognitive_function: {
          effect: -3,
          mechanism: "decreased BDNF expression in the prefrontal cortex",
        },
        anxiolytic: {
          effect: -3,
          mechanism: "inhibition of GABAergic neurons in the prefrontal cortex",
        },
        depressive: {
          effect: +4,
          mechanism: "upregulation of the HPA axis",
        },
        nociception: {
          effect: +0.5,
          mechanism: "modulation of pain signaling pathways",
        },
        heart_rate: {
          effect: +2,
          mechanism: "increase in cardiac sympathetic output",
        },
        blood_pressure: {
          effect: +1,
          mechanism: "vasoconstriction",
        },
        sleep: {
          effect: -2,
          mechanism:
            "inhibition of pre-synaptic 5-HT1A receptors in the raphe nuclei",
        },
        appetite: {
          effect: +3,
          mechanism: "increase in hypothalamic neuropeptide Y (NPY) release",
        },
        motor_activity: {
          effect: +2,
          mechanism: "increase in motor output from the spinal cord",
        },
      },
    },
  },
  {
    name: "5-HT2A",
    subtype: "Gq/11-coupled",
    family: "Serotonin receptor",
    location: ["Cortex, striatum, limbic system"],
    effect: {
      agonist: {
        short_term: {
          heart_rate: +1,
          blood_pressure: +2,
          anxiolytic: -3,
          hallucinogenic: +4,
          cognitive_function: -2,
          nociception: +2,
          sleep: -2,
          motor_activity: +2,
        },
        chronic: {
          heart_rate: +1,
          blood_pressure: +2,
          anxiolytic: -3,
          hallucinogenic: +4,
          cognitive_function: -2,
          nociception: +2,
          sleep: -2,
          motor_activity: +4,
        },
      },
      antagonist: {
        short_term: {
          heart_rate: -1,
          blood_pressure: -2,
          anxiolytic: +3,
          antidepressant: +3,
          cognitive_function: +2,
          nociception: -2,
          sleep: +2,
          motor_activity: -2,
        },
        chronic: {
          heart_rate: -1,
          blood_pressure: -2,
          anxiolytic: +3,
          antidepressant: +3,
          cognitive_function: +2,
          nociception: -2,
          sleep: +2,
          motor_activity: -4,
        },
      },
    },
    moa: {
      agonist: {
        cognitive_function: {
          effect: -2,
          mechanism: "inhibition of glutamate release in the prefrontal cortex",
        },
        anxiolytic: {
          effect: -3,
          mechanism: "inhibition of serotonergic activity in the amygdala",
        },
        hallucinogenic: {
          effect: +4,
          mechanism: "activation of cortical 5-HT2A receptors",
        },
        nociception: {
          effect: +2,
          mechanism: "activation of descending pain pathways",
        },
        heart_rate: {
          effect: +1,
          mechanism:
            "vasoconstriction and stimulation of cardiac sympathetic output",
        },
        blood_pressure: {
          effect: +2,
          mechanism: "vasoconstriction",
        },
        sleep: {
          effect: -2,
          mechanism:
            "suppression of melatonin synthesis and disruption of circadian rhythm",
        },
        motor_activity: {
          effect: +2,
          mechanism: "stimulation of dopamine release in the striatum",
        },
      },
      antagonist: {
        cognitive_function: {
          effect: +2,
          mechanism: "increased glutamate release in the prefrontal cortex",
        },
        anxiolytic: {
          effect: +3,
          mechanism: "enhanced serotonergic activity in the amygdala",
        },
        antidepressant: {
          effect: +3,
          mechanism:
            "increased BDNF expression and neurogenesis in the hippocampus",
        },
        nociception: {
          effect: -2,
          mechanism: "inhibition of descending pain pathways",
        },
        heart_rate: {
          effect: -1,
          mechanism:
            "vasodilation and inhibition of cardiac sympathetic output",
        },
        blood_pressure: {
          effect: -2,
          mechanism: "vasodilation",
        },
        sleep: {
          effect: +2,
          mechanism: "restoration of the circadian rhythm",
        },
        motor_activity: {
          effect: -2,
          mechanism: "reduced dopamine release in the striatum",
        },
      },
    },
  },
  {
    name: "5-HT3A",
    subtype: "ligand-gated ion channel",
    family: "Serotonin receptor",
    location: [
      "Cortex",
      "Hippocampus",
      "Amygdala",
      "Nucleus accumbens",
      "Striatum",
      "Thalamus",
      "Brainstem",
    ],
    effect: {
      agonist: {
        short_term: {
          nausea: +3,
          vomiting: +3,
          anxiety: -2,
          analgesic: -2,
          respiratory_rate: +2,
          heart_rate: +1,
          blood_pressure: +1,
        },
        chronic: {
          nausea: +3,
          vomiting: +3,
          anxiety: -2,
          analgesic: -2,
          respiratory_rate: +2,
          heart_rate: +1,
          blood_pressure: +1,
        },
      },
      antagonist: {
        short_term: {
          nausea: -3,
          vomiting: -3,
          anxiety: +2,
          analgesic: +2,
          respiratory_rate: -2,
          heart_rate: -1,
          blood_pressure: -1,
        },
        chronic: {
          nausea: -3,
          vomiting: -3,
          anxiety: +2,
          analgesic: +2,
          respiratory_rate: -2,
          heart_rate: -1,
          blood_pressure: -1,
        },
      },
    },
    moa: {
      agonist: {
        nausea: {
          effect: +3,
          mechanism:
            "activation of vagal afferents in the GI tract and brainstem",
        },
        vomiting: {
          effect: +3,
          mechanism: "activation of central and peripheral 5-HT3 receptors",
        },
        anxiety: {
          effect: -2,
          mechanism: "inhibition of serotonergic activity in the amygdala",
        },
        analgesic: {
          effect: -2,
          mechanism: "inhibition of pain transmission in the spinal cord",
        },
        respiratory_rate: {
          effect: +2,
          mechanism: "stimulation of respiratory centers in the brainstem",
        },
        heart_rate: {
          effect: +1,
          mechanism: "stimulation of sympathetic cardiac output",
        },
        blood_pressure: {
          effect: +1,
          mechanism: "vasoconstriction",
        },
      },
      antagonist: {
        nausea: {
          effect: -3,
          mechanism:
            "inhibition of vagal afferents in the GI tract and brainstem",
        },
        vomiting: {
          effect: -3,
          mechanism: "inhibition of central and peripheral 5-HT3 receptors",
        },
        anxiety: {
          effect: +2,
          mechanism: "enhancement of serotonergic activity in the amygdala",
        },
        analgesic: {
          effect: +2,
          mechanism: "activation of pain transmission in the spinal cord",
        },
        respiratory_rate: {
          effect: -2,
          mechanism: "inhibition of respiratory centers in the brainstem",
        },
        heart_rate: {
          effect: -1,
          mechanism: "inhibition of sympathetic cardiac output",
        },
        blood_pressure: {
          effect: -1,
          mechanism: "vasodilation",
        },
      },
    },
  },
  {
    name: "TrkB",
    subtype: "Tyrosine kinase receptor",
    family: "Neurotrophin receptor",
    location: ["Hippocampus", "Cortex", "Amygdala", "Striatum", "Cerebellum"],
    effect: {
      agonist: {
        short_term: {
          cognitive_function: +2,
          synaptic_plasticity: +3,
          neurogenesis: +4,
          anxiety: -2,
          depression: -3,
          nociception: -1,
          appetite: -1,
        },
        chronic: {
          cognitive_function: +3,
          synaptic_plasticity: +4,
          neurogenesis: +5,
          anxiety: -3,
          depression: -4,
          nociception: -1,
          appetite: -2,
        },
      },
      antagonist: {
        short_term: {
          cognitive_function: -2,
          synaptic_plasticity: -3,
          neurogenesis: -4,
          anxiety: +2,
          depression: +3,
          nociception: +1,
          appetite: +1,
        },
        chronic: {
          cognitive_function: -3,
          synaptic_plasticity: -4,
          neurogenesis: -5,
          anxiety: +3,
          depression: +4,
          nociception: +1,
          appetite: +2,
        },
      },
    },
    moa: {
      agonist: {
        cognitive_function: {
          effect: +2,
          mechanism:
            "Activation of intracellular signaling pathways promoting synaptic plasticity and neuronal survival",
        },
        synaptic_plasticity: {
          effect: +3,
          mechanism:
            "Promotion of synapse formation and strengthening through activation of intracellular signaling pathways",
        },
        neurogenesis: {
          effect: +4,
          mechanism:
            "Stimulation of neural stem cell proliferation and differentiation through activation of intracellular signaling pathways",
        },
        anxiety: {
          effect: -2,
          mechanism:
            "Inhibition of stress-induced neuronal apoptosis and activation of intracellular signaling pathways promoting neuronal survival",
        },
        depression: {
          effect: -3,
          mechanism:
            "Enhancement of synaptic plasticity and promotion of neurogenesis through activation of intracellular signaling pathways",
        },
        nociception: {
          effect: -1,
          mechanism:
            "Inhibition of pain signaling through modulation of neurotransmitter release in pain pathways",
        },
        appetite: {
          effect: -1,
          mechanism:
            "Inhibition of appetite through modulation of neurotransmitter release in feeding pathways",
        },
      },
      antagonist: {
        cognitive_function: {
          effect: -2,
          mechanism:
            "Inhibition of intracellular signaling pathways promoting synaptic plasticity and neuronal survival",
        },
        synaptic_plasticity: {
          effect: -3,
          mechanism:
            "Inhibition of synapse formation and strengthening through modulation of intracellular signaling pathways",
        },
        neurogenesis: {
          effect: -4,
          mechanism:
            "Inhibition of neural stem cell proliferation and differentiation through modulation of intracellular signaling pathways",
        },
        anxiety: {
          effect: +2,
          mechanism:
            "Induction of stress-induced neuronal apoptosis and modulation of intracellular signaling pathways promoting neuronal survival",
        },
        depression: {
          effect: +3,
          mechanism:
            "Impairment of synaptic plasticity and inhibition of neurogenesis through modulation of intracellular signaling pathways",
        },
        nociception: {
          effect: +1,
          mechanism:
            "Enhancement of pain signaling through modulation of neurotransmitter release in pain pathways",
        },
        appetite: {
          effect: +1,
          mechanism:
            "Stimulation of appetite through modulation of neurotransmitter release in feeding pathways",
        },
      },
    },
  },
  {
    name: "Sigma-1",
    subtype: "Non-opioid receptor",
    family: "Sigma receptor",
    location: [
      "Prefrontal cortex",
      "Hippocampus",
      "Amygdala",
      "Thalamus",
      "Striatum",
      "Cerebellum",
      "Spinal cord",
    ],
    effect: {
      agonist: {
        short_term: {
          anxiolytic: +2,
          cognitive_function: +1,
          nociception: -1,
          sleep: +2,
          motor_activity: -1,
          neuroprotection: +3,
          neurogenesis: +3,
        },
        chronic: {
          anxiolytic: +2,
          cognitive_function: +1,
          nociception: -1,
          sleep: +2,
          motor_activity: -1,
          neuroprotection: +3,
          neurogenesis: +3,
        },
      },
      antagonist: {
        short_term: {
          anxiolytic: -2,
          cognitive_function: -1,
          nociception: +1,
          sleep: -2,
          appetite: +2,
          motor_activity: +1,
          neuroprotection: -3,
          neurogenesis: -3,
        },
        chronic: {
          anxiolytic: -2,
          cognitive_function: -1,
          nociception: +1,
          sleep: -2,
          appetite: +2,
          motor_activity: +1,
          neuroprotection: -3,
          neurogenesis: -3,
        },
      },
    },
    moa: {
      agonist: {
        cognitive_function: {
          effect: +1,
          mechanism:
            "increased BDNF expression in the hippocampus and prefrontal cortex",
        },
        anxiolytic: {
          effect: +2,
          mechanism:
            "activation of GABAergic neurons in the amygdala and prefrontal cortex",
        },
        nociception: {
          effect: -1,
          mechanism: "modulation of pain signaling pathways",
        },
        sleep: {
          effect: +2,
          mechanism:
            "enhancement of slow-wave sleep via modulation of thalamocortical networks",
        },
        motor_activity: {
          effect: -1,
          mechanism: "inhibition of motor output from the spinal cord",
        },
        neuroprotection: {
          effect: +3,
          mechanism:
            "inhibition of calcium influx and modulation of ER stress pathways",
        },
        neurogenesis: {
          effect: +3,
          mechanism:
            "activation of signaling pathways involved in neurogenesis, such as CREB and BDNF",
        },
      },
      antagonist: {
        cognitive_function: {
          effect: -1,
          mechanism:
            "decreased BDNF expression in the hippocampus and prefrontal cortex",
        },
        anxiolytic: {
          effect: -2,
          mechanism:
            "inhibition of GABAergic neurons in the amygdala and prefrontal cortex",
        },
        nociception: {
          effect: +1,
          mechanism: "modulation of pain signaling pathways",
        },
        sleep: {
          effect: -2,
          mechanism:
            "suppression of slow-wave sleep via modulation of thalamocortical networks",
        },
        appetite: {
          effect: +2,
          mechanism: "increase in hypothalamic neuropeptide Y (NPY) release",
        },
        motor_activity: {
          effect: +1,
          mechanism: "increase in motor output from the spinal cord",
        },
        neuroprotection: {
          effect: -3,
          mechanism:
            "inhibition of sigma-1 receptor-mediated neurotrophic effects such as inhibition of calcium influx and modulation of ER stress pathways",
        },
        neurogenesis: {
          effect: -3,
          mechanism:
            "inhibition of signaling pathways involved in neurogenesis, such as CREB and BDNF",
        },
      },
    },
  },
  {
    name: "Adenosine A1",
    subtype: "Gi/0-coupled",
    family: "Adenosine receptor",
    location: [
      "Cerebral cortex",
      "Hippocampus",
      "Thalamus",
      "Cerebellum",
      "Amygdala",
    ],
    effect: {
      agonist: {
        short_term: {
          heart_rate: -1,
          blood_pressure: -2,
          anxiolytic: +1,
          sedative: +2,
          cognitive_function: -2,
          nociception: -1,
          sleep: +3,
          motor_activity: -2,
        },
        chronic: {
          heart_rate: -1,
          blood_pressure: -2,
          anxiolytic: +1,
          sedative: +2,
          cognitive_function: -2,
          nociception: -1,
          sleep: +3,
          motor_activity: -2,
        },
      },
      antagonist: {
        short_term: {
          heart_rate: +1,
          blood_pressure: +2,
          anxiogenic: -1,
          arousal: +2,
          cognitive_function: +2,
          nociception: +1,
          sleep: -3,
          motor_activity: +2,
        },
        chronic: {
          heart_rate: +1,
          blood_pressure: +2,
          anxiogenic: -1,
          arousal: +2,
          cognitive_function: +2,
          nociception: +1,
          sleep: -3,
          motor_activity: +2,
        },
      },
    },
    moa: {
      agonist: {
        cognitive_function: {
          effect: -2,
          mechanism: "reduction of glutamate release in the prefrontal cortex",
        },
        anxiolytic: {
          effect: +1,
          mechanism:
            "reduction of noradrenergic and serotonergic neurotransmission in the amygdala",
        },
        sedative: {
          effect: +2,
          mechanism:
            "activation of GABAergic neurotransmission in the thalamus",
        },
        nociception: {
          effect: -1,
          mechanism: "reduction of ascending pain pathways",
        },
        sleep: {
          effect: +3,
          mechanism: "increase in adenosine levels promoting sleep",
        },
        motor_activity: {
          effect: -2,
          mechanism: "reduction of dopamine release in the striatum",
        },
      },
      antagonist: {
        cognitive_function: {
          effect: +2,
          mechanism: "increase of glutamate release in the prefrontal cortex",
        },
        anxiogenic: {
          effect: -1,
          mechanism:
            "increase of noradrenergic and serotonergic neurotransmission in the amygdala",
        },
        arousal: {
          effect: +2,
          mechanism:
            "blockade of adenosine-mediated inhibition of glutamate and acetylcholine release in the thalamus",
        },
        nociception: {
          effect: +1,
          mechanism: "increase of ascending pain pathways",
        },
        sleep: {
          effect: -3,
          mechanism: "inhibition of adenosine levels promoting sleep",
        },
        motor_activity: {
          effect: +2,
          mechanism: "increase of dopamine release in the striatum",
        },
      },
    },
  },
  {
    name: "GABA-A",
    subtype: "Ionotropic receptor",
    family: "GABA receptor",
    location: [
      "Cerebellum",
      "Hippocampus",
      "Cortex",
      "Amygdala",
      "Thalamus",
      "Brainstem",
    ],
    effect: {
      agonist: {
        short_term: {
          anxiolytic: +3,
          sedative: +3,
          anticonvulsant: +4,
          amnesic: +2,
          myorelaxant: +3,
          hypnotic: +4,
        },
        chronic: {
          anxiolytic: +4,
          sedative: +4,
          anticonvulsant: +5,
          amnesic: +3,
          myorelaxant: +4,
          hypnotic: +5,
        },
      },
      antagonist: {
        short_term: {
          anxiogenic: -3,
          convulsant: -4,
          cognitive_impairment: -3,
          tremors: -2,
        },
        chronic: {
          anxiogenic: -4,
          convulsant: -5,
          cognitive_impairment: -4,
          tremors: -3,
        },
      },
    },
    moa: {
      agonist: {
        anxiolytic: {
          effect: +3,
          mechanism:
            "Activation of GABA-A receptor, leading to an increase in chloride ion influx and hyperpolarization of the neuronal membrane potential, thus reducing neuronal excitability",
        },
        sedative: {
          effect: +3,
          mechanism:
            "Activation of GABA-A receptor, leading to an increase in chloride ion influx and hyperpolarization of the neuronal membrane potential, thus reducing neuronal excitability",
        },
        anticonvulsant: {
          effect: +4,
          mechanism:
            "Activation of GABA-A receptor, leading to an increase in chloride ion influx and hyperpolarization of the neuronal membrane potential, thus reducing neuronal excitability",
        },
        amnesic: {
          effect: +2,
          mechanism:
            "Activation of GABA-A receptor, leading to an increase in chloride ion influx and hyperpolarization of the neuronal membrane potential, thus reducing neuronal excitability",
        },
        myorelaxant: {
          effect: +3,
          mechanism:
            "Activation of GABA-A receptor, leading to an increase in chloride ion influx and hyperpolarization of the neuronal membrane potential, thus reducing neuronal excitability",
        },
        hypnotic: {
          effect: +4,
          mechanism:
            "Activation of GABA-A receptor, leading to an increase in chloride ion influx and hyperpolarization of the neuronal membrane potential, thus reducing neuronal excitability",
        },
      },
      antagonist: {
        anxiogenic: {
          effect: -3,
          mechanism:
            "Blockade of GABA-A receptor, leading to a decrease in chloride ion influx and depolarization of the neuronal membrane potential, thus increasing neuronal excitability",
        },
        convulsant: {
          effect: -4,
          mechanism:
            "Blockade of GABA-A receptor, leading to a decrease in chloride ion influx and depolarization of the neuronal membrane potential, thus increasing neuronal excitability",
        },
        cognitive_impairment: {
          effect: -3,
          mechanism:
            "Blockade of GABA-A receptor, leading to a decrease in chloride ion influx and depolarization of the neuronal membrane potential, thus increasing neuronal excitability",
        },
        tremors: {
          effect: -2,
          mechanism:
            "Blockade of GABA-A receptor, leading to a decrease in chloride ion influx and depolarization of the neuronal membrane potential, thus increasing neuronal excitability. This can lead to tremors, which are involuntary rhythmic movements of a body part.",
        },
      },
    },
  },
  {
    name: "NMDA receptor",
    subtype: "Ionotropic glutamate receptor",
    family: "Glutamate receptor",
    location: ["Hippocampus", "Cortex", "Amygdala", "Basal ganglia"],
    effect: {
      agonist: {
        short_term: {
          cognitive_function: +3,
          synaptic_plasticity: +4,
          learning_and_memory: +5,
          anxiety: -2,
          depression: -3,
          pain_sensation: -1,
          appetite: -1,
        },
        chronic: {
          cognitive_function: +4,
          synaptic_plasticity: +5,
          learning_and_memory: +5,
          anxiety: -3,
          depression: -4,
          pain_sensation: -1,
          appetite: -2,
        },
      },
      antagonist: {
        short_term: {
          cognitive_function: -2,
          synaptic_plasticity: -3,
          learning_and_memory: -4,
          anxiety: +2,
          depression: +3,
          pain_sensation: +1,
          appetite: +1,
        },
        chronic: {
          cognitive_function: -3,
          synaptic_plasticity: -4,
          learning_and_memory: -5,
          anxiety: +3,
          depression: +4,
          pain_sensation: +1,
          appetite: +2,
        },
      },
    },
    moa: {
      agonist: {
        cognitive_function: {
          effect: +3,
          mechanism:
            "Activation of NMDA receptors leads to the influx of Ca2+ ions, triggering the activation of intracellular signaling pathways that promote synaptic plasticity and neuronal survival",
        },
        synaptic_plasticity: {
          effect: +4,
          mechanism:
            "Activation of NMDA receptors leads to the influx of Ca2+ ions, which enhances the formation and strengthening of synapses through the activation of intracellular signaling pathways",
        },
        learning_and_memory: {
          effect: +5,
          mechanism:
            "Activation of NMDA receptors leads to the influx of Ca2+ ions, which facilitates long-term potentiation and the consolidation of memories through the activation of intracellular signaling pathways",
        },
        anxiety: {
          effect: -2,
          mechanism:
            "Inhibition of NMDA receptors reduces the excitability of neurons in anxiety-related brain regions, leading to anxiolytic effects",
        },
        depression: {
          effect: -3,
          mechanism:
            "Activation of NMDA receptors enhances synaptic plasticity and promotes neurogenesis, which may improve symptoms of depression",
        },
        pain_sensation: {
          effect: -1,
          mechanism:
            "Activation of NMDA receptors plays a key role in the modulation of pain transmission and perception in the central nervous system",
        },
        appetite: {
          effect: -1,
          mechanism:
            "Activation of NMDA receptors plays a role in regulating appetite and feeding behavior in the hypothalamus",
        },
      },
      antagonist: {
        cognitive_function: {
          effect: -2,
          mechanism:
            "Inhibition of NMDA receptors reduces the influx of Ca2+ ions, impairing synaptic plasticity and neuronal survival",
        },
        synaptic_plasticity: {
          effect: -3,
          mechanism:
            "Inhibition of NMDA receptors reduces the influx of Ca2+ ions, impairing the formation and strengthening of synapses",
        },
        learning_and_memory: {
          effect: -4,
          mechanism:
            "Inhibition of NMDA receptors reduces the influx of Ca2+ ions, impairing long-term potentiation and the consolidation of memories",
        },
        anxiety: {
          effect: +2,
          mechanism:
            "Inhibition of NMDA receptors increases the excitability of neurons in anxiety-related brain regions, leading to anxiogenic effects",
        },
        depression: {
          effect: +3,
          mechanism:
            "Inhibition of NMDA receptors reduces synaptic plasticity and impairs neurogenesis, which may worsen symptoms of depression",
        },
        pain_sensation: {
          effect: +1,
          mechanism:
            "Inhibition of NMDA receptors may reduce the effectiveness of central pain processing and increase pain perception",
        },
        appetite: {
          effect: +1,
          mechanism:
            "Inhibition of NMDA receptors may affect feeding behavior and energy homeostasis through modulation of hypothalamic function",
        },
      },
    },
  },
];

const drugs = [{
  name: "drugName e.g fluoxetine",
  category: ["drugCategory e.g Antidepressant"],
  subtype: "drugSubType e.g Selective serotonin reuptake inhibitor (SSRI)",
  agonist: ["drug agonist shorthand name e.g S1R for sigma-1 receptor"],
  antagonist: ["drug antagonists e.g Serotonin transporter (SERT)"],
  moa: [
    {name: "Inhibition of serotonin reuptake", target: "SERT"},
    {name: "Sigma-1 receptor agonism", target: "Sigma-1 receptor"},
    {name: "Modulation of gene expression", target: "Various genes"},
    {name: "Neuroprotection", target: "Various mechanisms"}
  ]
},

{
  name: "Fluoxetine",
  category: ["Antidepressant"],
  subtype: "Selective serotonin reuptake inhibitor (SSRI)",
  agonist: ["5-HT2C"],
  antagonist: ["SERT"],
  moa: [
  {name: "Inhibition of serotonin reuptake", target: "SERT"},
  {name: "Sigma-1 receptor agonism", target: "Sigma-1 receptor"},
  {name: "Modulation of gene expression", target: "Various genes"},
  {name: "Neuroprotection", target: "Various mechanisms"}
  ]
  },
  
  {
  name: "Sertraline",
  category: ["Antidepressant"],
  subtype: "Selective serotonin reuptake inhibitor (SSRI)",
  agonist: [],
  antagonist: ["SERT"],
  moa: [
  {name: "Inhibition of serotonin reuptake", target: "SERT"},
  {name: "Modulation of gene expression", target: "Various genes"}
  ]
  },
  
  {
  name: "Citalopram",
  category: ["Antidepressant"],
  subtype: "Selective serotonin reuptake inhibitor (SSRI)",
  agonist: [],
  antagonist: ["SERT"],
  moa: [
  {name: "Inhibition of serotonin reuptake", target: "SERT"}
  ]
  },
  {
    name: "Citalopram",
    category: ["Antidepressant"],
    subtype: "Selective serotonin reuptake inhibitor (SSRI)",
    agonist: [],
    antagonist: ["SERT"],
    moa: [
    {name: "Inhibition of serotonin reuptake", target: "SERT"},
    {name: "Weak inhibition of dopamine reuptake", target: "DAT"},
    {name: "Modulation of gene expression", target: "Various genes"}
    ]
    },
    
    {
    name: "Sertraline",
    category: ["Antidepressant"],
    subtype: "Selective serotonin reuptake inhibitor (SSRI)",
    agonist: [],
    antagonist: ["SERT"],
    moa: [
    {name: "Inhibition of serotonin reuptake", target: "SERT"},
    {name: "Weak inhibition of dopamine reuptake", target: "DAT"},
    {name: "Modulation of gene expression", target: "Various genes"},
    {name: "Inhibition of norepinephrine reuptake", target: "NET"}
    ]
    }
]





// const neuroReceptors = {
//   D1: "NP_000784",
//   D2: "NP_000785",
//   "5-HT1A": "NP_000516",
//   "5-HT2A": "NP_000606",
//   GABAa1: "NP_000803",
//   NMDA1: "NP_000829",
//   AChRa: "NP_000737",
//   beta1: "NP_000680",
//   beta2: "NP_000681",
//   muOR: "NP_000899",
//   alpha1A: "NP_000679", // commonly targeted by some antipsychotics and antidepressants
//   CB1: "NP_033925", // targeted by marijuana and synthetic cannabinoids
//   H1: "NP_001525", // targeted by some antihistamines and sedatives
//   M1: "NP_000730", // targeted by some antipsychotics, antidepressants, and anticholinergics
//   NET: "NP_001072616", // targeted by some antidepressants and ADHD medications
//   SERT: "NP_001035114", // targeted by some antidepressants
//   D3: "NP_000786", // targeted by some antipsychotics and antidepressants
//   D4: "NP_000787", // targeted by some antipsychotics and ADHD medications
//   D5: "NP_000788", // targeted by some antipsychotics and antidepressants
//   "5HT2C": "NP_000597", // targeted by some antidepressants and antipsychotics
//   AMPA: "NP_001119125", // targeted by some antipsychotics and antidepressants
//   GlyR: "NP_002063", // targeted by some sedatives and anesthetics
//   kappaOR: "NP_001238937", // targeted by some analgesics and anesthetics
//   sigma1R: "NP_003017", // targeted by some antipsychotics and antidepressants
//   sigma2R: "NP_001243947", // targeted by some antipsychotics and antidepressants
//   deltaOR: "NP_000903", // targeted by some analgesics
//   H2: "NP_000858", // targeted by some antacids
//   nAChRα4β2: "NP_000728", // targeted by some smoking cessation aids
//   GABAb: "NP_000812", // targeted by some muscle relaxants
//   "D1-like": "NP_000784", // targeted by some antipsychotics and ADHD medications
//   "D2-like": "NP_000785", // targeted by some antipsychotics and ADHD medications
//   "5-HT3": "NP_000860", // targeted by some antiemetics
//   "5-HT6": "NP_000851", // targeted by some antidepressants
//   A1: "NP_000665", // targeted by some sedatives and anesthetics
//   A2A: "NP_000663", // targeted by some antiparkinsonian agents
//   NMDA2B: "NP_067602", // targeted by some antipsychotics and antidepressants
//   kappaOR: "NP_000911", // targeted by some analgesics
//   muOR: "NP_000897", // targeted by some analgesics
//   OX1R: "NP_001074194", // targeted by some medications for sleep disorders
//   OX2R: "NP_570780", // targeted by some medications for sleep disorders
//   sst4: "NP_001031233", // targeted by some antidiarrheal agents and octreotide.
// };

app.listen(3031,()=>{
  console.log("http://localhost:3031")
})