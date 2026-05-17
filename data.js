const UNITS = [
  {
    id: 1,
    title: "Chemistry of Life",
    weight: "8-11%",
    topics: [
      "Structure of water and hydrogen bonding",
      "Elements of life",
      "Macromolecules: structure and function",
      "Properties of biological macromolecules",
      "Nucleic acids: DNA and RNA structure"
    ],
    keyConcepts: [
      "Water's polarity enables hydrogen bonding, giving it unique properties essential for life (cohesion, adhesion, high specific heat, universal solvent).",
      "The four macromolecule classes (carbohydrates, lipids, proteins, nucleic acids) each have distinct monomers, structure, and biological function.",
      "Proteins are polymers of amino acids. Their function depends on their 3D shape, which is determined by amino acid sequence and non-covalent interactions."
    ]
  },
  {
    id: 2,
    title: "Cell Structure and Function",
    weight: "10-13%",
    topics: [
      "Cell structure and compartmentalization",
      "Cell membranes and transport",
      "Membrane proteins and signal transduction",
      "Endosymbiotic theory",
      "Origins of cell compartmentalization"
    ],
    keyConcepts: [
      "The fluid mosaic model describes the plasma membrane as a phospholipid bilayer with embedded proteins that are free to move laterally.",
      "Compartmentalization in eukaryotic cells allows for specialized functions and more efficient metabolism.",
      "Membrane transport: passive (diffusion, osmosis, facilitated diffusion) requires no energy; active transport requires ATP against concentration gradients."
    ]
  },
  {
    id: 3,
    title: "Cellular Energetics",
    weight: "12-16%",
    topics: [
      "Enzyme structure, function, and regulation",
      "Cellular respiration: glycolysis, Krebs cycle, ETC",
      "Fermentation",
      "Photosynthesis: light reactions and Calvin cycle",
      "Coupled reactions and ATP"
    ],
    keyConcepts: [
      "Enzymes lower activation energy without being consumed. Factors like temperature, pH, and inhibitors alter enzyme activity.",
      "Cellular respiration (C6H12O6 + 6O2 → 6CO2 + 6H2O + ATP) harvests energy stored in glucose through glycolysis, the Krebs cycle, and oxidative phosphorylation.",
      "Photosynthesis converts light energy to chemical energy. Light reactions produce ATP and NADPH; the Calvin cycle uses them to fix CO2 into G3P."
    ]
  },
  {
    id: 4,
    title: "Cell Communication and Cell Cycle",
    weight: "10-15%",
    topics: [
      "Signal transduction pathways",
      "Cell cycle and its regulation",
      "Apoptosis",
      "Feedback mechanisms in cell signaling",
      "Mutations and cancer"
    ],
    keyConcepts: [
      "Signal transduction follows reception → transduction → response. Ligands bind receptors triggering intracellular cascades that amplify the signal.",
      "The cell cycle (G1 → S → G2 → M) is regulated by checkpoints controlled by cyclins and CDKs. Disruption can lead to uncontrolled proliferation (cancer).",
      "Apoptosis is programmed cell death essential for development and homeostasis. Failure of apoptosis contributes to cancer."
    ]
  },
  {
    id: 5,
    title: "Heredity",
    weight: "8-11%",
    topics: [
      "Meiosis and sexual reproduction",
      "Mendelian genetics and probability",
      "Non-Mendelian genetics",
      "Environmental effects on phenotype",
      "Chromosomal inheritance"
    ],
    keyConcepts: [
      "Meiosis produces haploid gametes, generating genetic diversity through crossing over, independent assortment, and random fertilization.",
      "Mendel's laws: segregation (allele pairs separate during meiosis) and independent assortment (different gene pairs assort independently if on different chromosomes).",
      "Non-Mendelian patterns include codominance, incomplete dominance, sex-linkage, polygenic traits, and pleiotropy."
    ]
  },
  {
    id: 6,
    title: "Gene Expression and Regulation",
    weight: "12-16%",
    topics: [
      "DNA replication",
      "Transcription and RNA processing",
      "Translation and the genetic code",
      "Regulation of gene expression",
      "Mutations and their effects"
    ],
    keyConcepts: [
      "DNA replication is semi-conservative: each new molecule has one original and one new strand, replicated by DNA polymerase with fidelity mechanisms.",
      "Gene expression: DNA → (transcription) → mRNA → (translation) → protein. In eukaryotes, mRNA is processed (5' cap, poly-A tail, intron splicing).",
      "Gene expression is regulated at transcription (promoters, enhancers, transcription factors), post-transcription (RNA interference, miRNA), and post-translation (protein modification)."
    ]
  },
  {
    id: 7,
    title: "Natural Selection",
    weight: "13-20%",
    topics: [
      "Introduction to evolution and natural selection",
      "Hardy-Weinberg equilibrium",
      "Evidence of evolution",
      "Common ancestry and phylogenetics",
      "Population genetics and speciation"
    ],
    keyConcepts: [
      "Natural selection acts on heritable variation; individuals with traits better suited to their environment survive and reproduce more, changing allele frequencies over generations.",
      "Hardy-Weinberg equilibrium: p² + 2pq + q² = 1; p + q = 1. Deviations indicate evolutionary forces (selection, drift, migration, mutation, non-random mating) are acting.",
      "Evidence for evolution includes the fossil record, comparative anatomy (homologous/analogous structures, vestigial organs), molecular biology, and biogeography."
    ]
  },
  {
    id: 8,
    title: "Ecology",
    weight: "10-15%",
    topics: [
      "Responses to the environment",
      "Population ecology",
      "Community ecology",
      "Ecosystem dynamics",
      "Disruptions in ecosystems"
    ],
    keyConcepts: [
      "Populations grow exponentially when resources are unlimited (J-curve) but logistic growth occurs with limiting factors creating a carrying capacity (S-curve).",
      "Community interactions (competition, predation, symbiosis) and succession shape biodiversity and ecosystem structure.",
      "Energy flows through trophic levels (10% rule) while matter cycles (carbon, nitrogen, water cycles). Human disruption of these cycles causes ecological imbalance."
    ]
  }
];

const MCQ_QUESTIONS = [
  {
    id: 1,
    unit: 1,
    question: "Which property of water allows it to moderate temperature changes in organisms and their environments?",
    options: [
      "High surface tension",
      "High specific heat capacity",
      "Cohesion and adhesion",
      "Ability to act as a solvent"
    ],
    answer: 1,
    explanation: "Water's high specific heat capacity means it requires a large amount of energy to change temperature. This is due to hydrogen bonding between water molecules, which must be broken before kinetic energy (temperature) can increase, buffering organisms against rapid temperature fluctuations."
  },
  {
    id: 2,
    unit: 1,
    question: "The primary structure of a protein is determined by which of the following?",
    options: [
      "Hydrogen bonds between peptide backbones",
      "Ionic interactions between R-groups",
      "The sequence of amino acids in the polypeptide",
      "Disulfide bonds between cysteine residues"
    ],
    answer: 2,
    explanation: "Primary structure is simply the linear sequence of amino acids connected by peptide bonds. This sequence, determined by the gene, dictates how the protein will fold into its secondary, tertiary, and quaternary structures."
  },
  {
    id: 3,
    unit: 2,
    question: "A cell is placed in a hypotonic solution. Which of the following best describes the net movement of water?",
    options: [
      "Water moves from the cell to the solution",
      "Water moves from the solution into the cell",
      "There is no net movement of water",
      "Solutes move out of the cell by osmosis"
    ],
    answer: 1,
    explanation: "In a hypotonic solution, solute concentration is lower outside the cell than inside. Water moves by osmosis from high water potential (hypotonic solution) to low water potential (inside the cell), causing the cell to swell."
  },
  {
    id: 4,
    unit: 3,
    question: "Which of the following events occurs in the mitochondrial matrix during cellular respiration?",
    options: [
      "Glycolysis",
      "Electron transport chain reactions",
      "Krebs cycle reactions",
      "ATP synthesis by chemiosmosis"
    ],
    answer: 2,
    explanation: "The Krebs cycle (citric acid cycle) takes place in the mitochondrial matrix. Glycolysis occurs in the cytoplasm; the electron transport chain and chemiosmosis occur on/across the inner mitochondrial membrane."
  },
  {
    id: 5,
    unit: 3,
    question: "An enzyme's active site is disrupted and it can no longer bind its substrate. Which factor is most likely responsible?",
    options: [
      "Decreased substrate concentration",
      "A change in pH that altered the enzyme's shape",
      "An increase in product concentration",
      "A decrease in ATP availability"
    ],
    answer: 1,
    explanation: "Enzymes are proteins whose 3D shape (including the active site) depends on weak interactions like hydrogen bonds. Changes in pH alter the ionization of R-groups, disrupting these interactions and denaturing the enzyme, preventing substrate binding."
  },
  {
    id: 6,
    unit: 4,
    question: "A cell that undergoes uncontrolled cell division most likely has a mutation that affects which of the following?",
    options: [
      "Ribosome function",
      "Mitochondrial enzymes",
      "Cell cycle checkpoint proteins",
      "Membrane transport proteins"
    ],
    answer: 2,
    explanation: "Cell cycle checkpoints (involving proteins like p53, cyclins, and CDKs) normally ensure each stage is completed correctly before proceeding. Mutations disabling these checkpoints lead to uncontrolled division, a hallmark of cancer."
  },
  {
    id: 7,
    unit: 5,
    question: "Two pea plants heterozygous for seed color (Yy) are crossed. What proportion of offspring will be homozygous recessive (yy)?",
    options: [
      "1/4",
      "1/2",
      "3/4",
      "0"
    ],
    answer: 0,
    explanation: "A Yy × Yy cross yields 1/4 YY : 2/4 Yy : 1/4 yy. The probability of homozygous recessive offspring is 1/4 (25%)."
  },
  {
    id: 8,
    unit: 5,
    question: "Which event in meiosis accounts for Mendel's law of independent assortment?",
    options: [
      "Crossing over during prophase I",
      "Random orientation of bivalents at metaphase I",
      "Sister chromatid separation at anaphase II",
      "DNA replication before meiosis begins"
    ],
    answer: 1,
    explanation: "The random (independent) orientation of homologous chromosome pairs (bivalents) at the metaphase plate during Meiosis I means each gamete receives a random combination of maternal and paternal chromosomes, producing independent assortment."
  },
  {
    id: 9,
    unit: 6,
    question: "During transcription in eukaryotes, which of the following is added to the pre-mRNA during processing?",
    options: [
      "Start and stop codons",
      "A 5' cap and poly-A tail",
      "Ribosomes and tRNAs",
      "Amino acid chains"
    ],
    answer: 1,
    explanation: "Eukaryotic pre-mRNA processing includes addition of a 5' methylguanosine cap and a poly-A tail at the 3' end, as well as splicing of introns. These modifications protect mRNA from degradation and aid in translation."
  },
  {
    id: 10,
    unit: 7,
    question: "A population of beetles has allele frequencies of p = 0.6 and q = 0.4 for a color gene. If the population is in Hardy-Weinberg equilibrium, what is the expected frequency of heterozygotes?",
    options: [
      "0.16",
      "0.36",
      "0.48",
      "0.24"
    ],
    answer: 2,
    explanation: "Heterozygote frequency = 2pq = 2(0.6)(0.4) = 0.48. Using the Hardy-Weinberg equation p² + 2pq + q² = 1, where p and q are allele frequencies."
  },
  {
    id: 11,
    unit: 7,
    question: "Analogous structures in distantly related species are best explained by which of the following?",
    options: [
      "Common ancestry",
      "Convergent evolution",
      "Genetic drift",
      "Gene flow"
    ],
    answer: 1,
    explanation: "Analogous structures (similar function, different evolutionary origin) arise through convergent evolution, where unrelated organisms independently evolve similar traits in response to similar environmental pressures."
  },
  {
    id: 12,
    unit: 8,
    question: "A population of deer has a growth rate that decreases as population size approaches carrying capacity. This pattern of growth is best described as:",
    options: [
      "Exponential growth",
      "Logistic growth",
      "Allee effect growth",
      "Density-independent growth"
    ],
    answer: 1,
    explanation: "Logistic growth produces an S-shaped curve. As population density increases, resource competition and other density-dependent factors slow the growth rate. The population stabilizes at carrying capacity (K)."
  },
  {
    id: 13,
    unit: 2,
    question: "The sodium-potassium pump maintains a concentration gradient across the cell membrane. This process is an example of which type of transport?",
    options: [
      "Simple diffusion",
      "Facilitated diffusion",
      "Active transport",
      "Osmosis"
    ],
    answer: 2,
    explanation: "The Na+/K+ pump uses ATP to move ions against their concentration gradients (3 Na+ out, 2 K+ in). Moving substances against their gradient requires energy, making this active transport."
  },
  {
    id: 14,
    unit: 6,
    question: "A missense mutation changes a codon from GAC to GUC. If both codons code for different amino acids, how does this most likely affect the protein?",
    options: [
      "No change because the genetic code is redundant",
      "Loss of one amino acid in the chain",
      "A different amino acid is incorporated, potentially altering protein function",
      "The protein cannot be translated"
    ],
    answer: 2,
    explanation: "A missense mutation results in substitution of one amino acid for another. If the substitution occurs in a critical region (e.g., active site), it can significantly alter or eliminate protein function, as seen in sickle cell disease."
  },
  {
    id: 15,
    unit: 3,
    question: "Which of the following correctly describes the role of NADH in cellular respiration?",
    options: [
      "It acts as an electron acceptor in the Krebs cycle",
      "It donates electrons to the electron transport chain",
      "It phosphorylates ADP to produce ATP directly",
      "It catalyzes the breakdown of glucose in glycolysis"
    ],
    answer: 1,
    explanation: "NADH is an electron carrier. It is produced in glycolysis and the Krebs cycle and donates high-energy electrons to Complex I of the electron transport chain, driving the proton gradient used for ATP synthesis via chemiosmosis."
  }
];

const FRQ_QUESTIONS = [
  {
    id: 1,
    type: "long",
    title: "Cellular Respiration and Photosynthesis",
    unit: 3,
    parts: [
      {
        label: "Part A",
        question: "Describe the process of glycolysis, including the reactants, products, and net ATP yield. Explain where in the cell this process occurs and whether it requires oxygen.",
        points: 4
      },
      {
        label: "Part B",
        question: "Explain how the products of the light reactions of photosynthesis are used in the Calvin cycle to produce G3P. Include specific molecules (ATP, NADPH, RuBisCO).",
        points: 4
      },
      {
        label: "Part C",
        question: "A scientist places a plant in a sealed container and measures CO2 and O2 levels over 24 hours, with 12 hours of light and 12 hours of dark. Predict and explain the changes in CO2 and O2 levels during each period.",
        points: 4
      }
    ],
    rubric: [
      "Part A: Glycolysis occurs in cytoplasm (1), no O2 required (1), glucose → 2 pyruvate (1), net 2 ATP + 2 NADH produced (1)",
      "Part B: ATP and NADPH from light reactions power Calvin cycle (1), RuBisCO fixes CO2 onto RuBP (1), 3 ATP + 2 NADPH used per CO2 fixed (1), G3P used to regenerate RuBP and make glucose (1)",
      "Part C: Light period — CO2 decreases (photosynthesis fixes CO2), O2 increases (1 each); Dark period — CO2 increases (only respiration), O2 decreases (1 each)"
    ]
  },
  {
    id: 2,
    type: "long",
    title: "Natural Selection and Evolution",
    unit: 7,
    parts: [
      {
        label: "Part A",
        question: "A population of mice lives in a snowy habitat. Describe how natural selection would act on coat color if white-coated mice are better camouflaged from predators than brown-coated mice. Include the four conditions required for natural selection.",
        points: 4
      },
      {
        label: "Part B",
        question: "Using the Hardy-Weinberg equation, calculate the expected genotype frequencies for a population where the frequency of the recessive allele (q) for brown coat is 0.3. Show all work.",
        points: 3
      },
      {
        label: "Part C",
        question: "Explain how genetic drift could affect this mouse population differently than natural selection, and identify a specific scenario in which genetic drift would have the greatest impact.",
        points: 3
      }
    ],
    rubric: [
      "Part A: Must mention: heritable variation in coat color (1), differential survival/reproduction of white vs. brown mice (1), white mice more likely to survive and reproduce (1), allele frequencies shift toward white over generations (1). Four conditions: variation, heritability, differential reproduction, time.",
      "Part B: p + q = 1 → p = 0.7 (1); p² = 0.49 (white homozygous) (1); 2pq = 0.42 (heterozygous); q² = 0.09 (brown homozygous) (1). All must be shown.",
      "Part C: Genetic drift is random change in allele frequencies (not based on fitness) (1); can fix or eliminate alleles by chance (1); greatest impact in small populations — bottleneck event or founder effect (1)"
    ]
  },
  {
    id: 3,
    type: "short",
    title: "Cell Communication",
    unit: 4,
    parts: [
      {
        label: "Part A",
        question: "Describe the three stages of cell signaling and identify the role of a second messenger such as cAMP in signal transduction.",
        points: 3
      },
      {
        label: "Part B",
        question: "Explain how a signal can be amplified during transduction even though only a small number of signaling molecules (ligands) initially bind to receptors.",
        points: 2
      }
    ],
    rubric: [
      "Part A: Reception — ligand binds receptor (1); Transduction — signal converted/amplified via relay molecules; cAMP acts as second messenger amplifying the signal intracellularly (1); Response — cell responds (enzyme activation, gene expression, etc.) (1)",
      "Part B: Enzyme cascades: one activated enzyme activates many more molecules (1); each step in the cascade multiplies the signal so a few ligands can cause massive intracellular response (1)"
    ]
  },
  {
    id: 4,
    type: "short",
    title: "Meiosis and Genetic Diversity",
    unit: 5,
    parts: [
      {
        label: "Part A",
        question: "Explain how crossing over during prophase I of meiosis contributes to genetic variation in offspring.",
        points: 2
      },
      {
        label: "Part B",
        question: "Compare and contrast meiosis and mitosis in terms of chromosome number in daughter cells and purpose in multicellular organisms.",
        points: 3
      }
    ],
    rubric: [
      "Part A: Homologous chromosomes exchange segments (1); creates new combinations of alleles (recombinant chromosomes) not present in either parent (1)",
      "Part B: Mitosis — diploid to diploid (2n → 2n), purpose is growth/repair (1); Meiosis — diploid to haploid (2n → n), purpose is sexual reproduction/gamete formation (1); Meiosis involves 2 divisions and crossing over, mitosis is 1 division (1)"
    ]
  },
  {
    id: 5,
    type: "short",
    title: "Ecology: Population and Community",
    unit: 8,
    parts: [
      {
        label: "Part A",
        question: "Describe the difference between exponential and logistic population growth. Under what conditions does each occur?",
        points: 3
      },
      {
        label: "Part B",
        question: "Explain one way that keystone species influence community structure, and what would likely happen if the keystone species were removed.",
        points: 2
      }
    ],
    rubric: [
      "Part A: Exponential (J-curve): unlimited resources, no density-dependent limiting factors, dN/dt = rN (1); Logistic (S-curve): density-dependent limiting factors, carrying capacity K reached, dN/dt = rN(K-N/K) (1); Exponential in early colonization, logistic in established populations (1)",
      "Part B: Keystone species has disproportionately large impact relative to its abundance (1); removal causes dramatic change in community composition — population explosions, extinctions, biodiversity collapse (1)"
    ]
  }
];

const EXAM_SKILLS = [
  { num: "Skill 1", title: "Concepts & Theories", desc: "Explain biological concepts, processes, and theories." },
  { num: "Skill 2", title: "Data Analysis", desc: "Analyze data to identify patterns, explain phenomena, and make predictions." },
  { num: "Skill 3", title: "Scientific Investigation", desc: "Design experiments and analyze results using the scientific method." },
  { num: "Skill 4", title: "Mathematical Routines", desc: "Apply mathematical routines to solve biological problems." },
  { num: "Skill 5", title: "Connections", desc: "Make connections between and among biological concepts across units." },
  { num: "Skill 6", title: "Argumentation", desc: "Develop and support scientific claims using evidence and reasoning." }
];

const AP_SCORE_THRESHOLDS = [
  { score: 5, label: "5", min: 75, color: "s5" },
  { score: 4, label: "4", min: 60, color: "s4" },
  { score: 3, label: "3", min: 45, color: "s3" },
  { score: 2, label: "2", min: 30, color: "s2" },
  { score: 1, label: "1", min: 0, color: "s1" }
];