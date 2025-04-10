
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type TCCCData = {
  // Patient Identification
  fullName: string;
  dateOfInjury: string;
  timeOfInjury: string;
  serviceId: string;
  gender: string;
  bloodType: string;
  unit: string;
  age: string;
  rank: string;
  branchOfService: string;
  
  // Mechanism of Injury
  mechanismOfInjury: {
    gsw: boolean;
    bluntTrauma: boolean;
    blast: boolean;
    burn: boolean;
    mvc: boolean;
    fall: boolean;
    other: boolean;
    otherDescription: string;
  };
  
  // Injuries by Body Region
  bodyInjuries: {
    head: { description: string; timeNoted: string; type: string };
    chest: { description: string; timeNoted: string; type: string };
    abdomen: { description: string; timeNoted: string; type: string };
    leftArm: { description: string; timeNoted: string; type: string };
    rightArm: { description: string; timeNoted: string; type: string };
    leftLeg: { description: string; timeNoted: string; type: string };
    rightLeg: { description: string; timeNoted: string; type: string };
  };
  
  // Vital Signs
  vitalSigns: Array<{
    time: string;
    pulse: string;
    respiration: string;
    bloodPressure: string;
    spO2: string;
    gcsEye: string;
    gcsVerbal: string;
    gcsMotor: string;
    temperature: string;
  }>;
  
  // Interventions
  interventions: {
    tourniquetApplied: {
      leftUpper: { applied: boolean; time: string };
      rightUpper: { applied: boolean; time: string };
      leftLower: { applied: boolean; time: string };
      rightLower: { applied: boolean; time: string };
    };
    needleDecompression: {
      leftChest: { applied: boolean; time: string };
      rightChest: { applied: boolean; time: string };
    };
    airwayAdjunct: {
      npa: { applied: boolean; time: string };
      opa: { applied: boolean; time: string };
    };
    chestSeal: boolean;
    ivIoPlacement: boolean;
    medications: Array<{
      name: string;
      dosage: string;
      time: string;
      route: string;
    }>;
    hypothermiaPrevention: boolean;
    painMedsAdministered: boolean;
    bloodTransfusion: boolean;
  };
  
  // Evacuation Info
  evacuationInfo: {
    mode: string;
    timeDeparture: string;
    receivingFacility: string;
  };
  
  // Narrative
  narrative: string;
  
  // Signature & Role
  signature: string;
  role: string;
  signatureDateTime: string;

  // EVAC Priority
  evacuationPriority: string;
  battleRosterNumber: string;
};

const defaultTCCCData: TCCCData = {
  fullName: "",
  dateOfInjury: "",
  timeOfInjury: "",
  serviceId: "",
  gender: "",
  bloodType: "",
  unit: "",
  age: "",
  rank: "",
  branchOfService: "",
  
  mechanismOfInjury: {
    gsw: false,
    bluntTrauma: false,
    blast: false,
    burn: false,
    mvc: false,
    fall: false,
    other: false,
    otherDescription: "",
  },
  
  bodyInjuries: {
    head: { description: "", timeNoted: "", type: "" },
    chest: { description: "", timeNoted: "", type: "" },
    abdomen: { description: "", timeNoted: "", type: "" },
    leftArm: { description: "", timeNoted: "", type: "" },
    rightArm: { description: "", timeNoted: "", type: "" },
    leftLeg: { description: "", timeNoted: "", type: "" },
    rightLeg: { description: "", timeNoted: "", type: "" },
  },
  
  vitalSigns: [{
    time: "",
    pulse: "",
    respiration: "",
    bloodPressure: "",
    spO2: "",
    gcsEye: "",
    gcsVerbal: "",
    gcsMotor: "",
    temperature: "",
  }],
  
  interventions: {
    tourniquetApplied: {
      leftUpper: { applied: false, time: "" },
      rightUpper: { applied: false, time: "" },
      leftLower: { applied: false, time: "" },
      rightLower: { applied: false, time: "" },
    },
    needleDecompression: {
      leftChest: { applied: false, time: "" },
      rightChest: { applied: false, time: "" },
    },
    airwayAdjunct: {
      npa: { applied: false, time: "" },
      opa: { applied: false, time: "" },
    },
    chestSeal: false,
    ivIoPlacement: false,
    medications: [{
      name: "",
      dosage: "",
      time: "",
      route: "",
    }],
    hypothermiaPrevention: false,
    painMedsAdministered: false,
    bloodTransfusion: false,
  },
  
  evacuationInfo: {
    mode: "",
    timeDeparture: "",
    receivingFacility: "",
  },
  
  narrative: "",
  
  signature: "",
  role: "",
  signatureDateTime: "",
  
  evacuationPriority: "Routine",
  battleRosterNumber: "",
};

type TCCCContextType = {
  tcccData: TCCCData;
  updateTCCCData: (data: Partial<TCCCData>) => void;
  updateBodyInjury: (region: keyof TCCCData['bodyInjuries'], data: Partial<TCCCData['bodyInjuries'][keyof TCCCData['bodyInjuries']]>) => void;
  addVitalSign: () => void;
  updateVitalSign: (index: number, data: Partial<TCCCData['vitalSigns'][0]>) => void;
  addMedication: () => void;
  updateMedication: (index: number, data: Partial<TCCCData['interventions']['medications'][0]>) => void;
  saveData: () => void;
  loadData: () => void;
};

const TCCCContext = createContext<TCCCContextType | undefined>(undefined);

export const useTCCC = () => {
  const context = useContext(TCCCContext);
  if (!context) {
    throw new Error("useTCCC must be used within a TCCCProvider");
  }
  return context;
};

export const TCCCProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tcccData, setTCCCData] = useState<TCCCData>(() => {
    // Try to load saved data from localStorage
    const savedData = localStorage.getItem("tcccData");
    return savedData ? JSON.parse(savedData) : defaultTCCCData;
  });

  // Auto-save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("tcccData", JSON.stringify(tcccData));
  }, [tcccData]);

  const updateTCCCData = (data: Partial<TCCCData>) => {
    setTCCCData(prevData => ({ ...prevData, ...data }));
  };

  const updateBodyInjury = (
    region: keyof TCCCData['bodyInjuries'], 
    data: Partial<TCCCData['bodyInjuries'][keyof TCCCData['bodyInjuries']]>
  ) => {
    setTCCCData(prevData => ({
      ...prevData,
      bodyInjuries: {
        ...prevData.bodyInjuries,
        [region]: { ...prevData.bodyInjuries[region], ...data }
      }
    }));
  };

  const addVitalSign = () => {
    setTCCCData(prevData => ({
      ...prevData,
      vitalSigns: [
        ...prevData.vitalSigns,
        {
          time: "",
          pulse: "",
          respiration: "",
          bloodPressure: "",
          spO2: "",
          gcsEye: "",
          gcsVerbal: "",
          gcsMotor: "",
          temperature: "",
        }
      ]
    }));
  };

  const updateVitalSign = (index: number, data: Partial<TCCCData['vitalSigns'][0]>) => {
    setTCCCData(prevData => {
      const newVitalSigns = [...prevData.vitalSigns];
      newVitalSigns[index] = { ...newVitalSigns[index], ...data };
      return { ...prevData, vitalSigns: newVitalSigns };
    });
  };

  const addMedication = () => {
    setTCCCData(prevData => ({
      ...prevData,
      interventions: {
        ...prevData.interventions,
        medications: [
          ...prevData.interventions.medications,
          {
            name: "",
            dosage: "",
            time: "",
            route: "",
          }
        ]
      }
    }));
  };

  const updateMedication = (index: number, data: Partial<TCCCData['interventions']['medications'][0]>) => {
    setTCCCData(prevData => {
      const newMedications = [...prevData.interventions.medications];
      newMedications[index] = { ...newMedications[index], ...data };
      return { 
        ...prevData, 
        interventions: {
          ...prevData.interventions,
          medications: newMedications
        }
      };
    });
  };

  const saveData = () => {
    localStorage.setItem("tcccData", JSON.stringify(tcccData));
    // In a real app, you might also want to save to a server or export
    console.log("Data saved locally");
  };

  const loadData = () => {
    const savedData = localStorage.getItem("tcccData");
    if (savedData) {
      setTCCCData(JSON.parse(savedData));
      console.log("Data loaded from local storage");
    }
  };

  return (
    <TCCCContext.Provider value={{ 
      tcccData, 
      updateTCCCData,
      updateBodyInjury,
      addVitalSign,
      updateVitalSign,
      addMedication,
      updateMedication,
      saveData,
      loadData 
    }}>
      {children}
    </TCCCContext.Provider>
  );
};
