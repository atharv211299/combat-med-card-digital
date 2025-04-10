
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTCCC } from "../contexts/TCCCContext";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type BodyPart = "head" | "chest" | "abdomen" | "leftArm" | "rightArm" | "leftLeg" | "rightLeg";

const BodyDiagram: React.FC = () => {
  const { tcccData, updateBodyInjury } = useTCCC();
  const [showFront, setShowFront] = useState(true);
  const [selectedPart, setSelectedPart] = useState<BodyPart | null>(null);

  const handleToggleView = () => {
    setShowFront(!showFront);
  };

  const handleSelectBodyPart = (part: BodyPart) => {
    setSelectedPart(part);
  };

  const closeDialog = () => {
    setSelectedPart(null);
  };

  const partToLabel = (part: BodyPart): string => {
    switch (part) {
      case "head": return "Head";
      case "chest": return "Chest";
      case "abdomen": return "Abdomen";
      case "leftArm": return "Left Arm";
      case "rightArm": return "Right Arm";
      case "leftLeg": return "Left Leg";
      case "rightLeg": return "Right Leg";
      default: return part;
    }
  };

  const hasInjury = (part: BodyPart): boolean => {
    return !!tcccData.bodyInjuries[part].description;
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="text-center mb-4">
        <Button 
          variant="outline"
          className="tccc-button"
          onClick={handleToggleView}
        >
          {showFront ? "Show Back View" : "Show Front View"}
        </Button>
      </div>

      <div className="relative h-[500px] w-[250px] mx-auto">
        {/* Body outline */}
        <svg 
          viewBox="0 0 200 420" 
          className="w-full h-full"
          style={{ filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5))" }}
        >
          {showFront ? (
            <>
              {/* Front view */}
              <circle 
                cx="100" 
                cy="45" 
                r="35" 
                fill={hasInjury("head") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("head")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="70" 
                y="80" 
                width="60" 
                height="80" 
                fill={hasInjury("chest") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("chest")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="70" 
                y="160" 
                width="60" 
                height="60" 
                fill={hasInjury("abdomen") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("abdomen")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="40" 
                y="80" 
                width="30" 
                height="100" 
                fill={hasInjury("leftArm") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("leftArm")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="130" 
                y="80" 
                width="30" 
                height="100" 
                fill={hasInjury("rightArm") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("rightArm")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="70" 
                y="220" 
                width="30" 
                height="140" 
                fill={hasInjury("leftLeg") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("leftLeg")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="100" 
                y="220" 
                width="30" 
                height="140" 
                fill={hasInjury("rightLeg") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("rightLeg")}
                className="cursor-pointer hover:opacity-80"
              />
            </>
          ) : (
            <>
              {/* Back view */}
              <circle 
                cx="100" 
                cy="45" 
                r="35" 
                fill={hasInjury("head") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("head")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="70" 
                y="80" 
                width="60" 
                height="80" 
                fill={hasInjury("chest") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("chest")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="70" 
                y="160" 
                width="60" 
                height="60" 
                fill={hasInjury("abdomen") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("abdomen")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="40" 
                y="80" 
                width="30" 
                height="100" 
                fill={hasInjury("leftArm") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("leftArm")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="130" 
                y="80" 
                width="30" 
                height="100" 
                fill={hasInjury("rightArm") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("rightArm")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="70" 
                y="220" 
                width="30" 
                height="140" 
                fill={hasInjury("leftLeg") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("leftLeg")}
                className="cursor-pointer hover:opacity-80"
              />
              <rect 
                x="100" 
                y="220" 
                width="30" 
                height="140" 
                fill={hasInjury("rightLeg") ? "#c35a45" : "#8b9389"} 
                stroke="#eee"
                strokeWidth="1.5"
                onClick={() => handleSelectBodyPart("rightLeg")}
                className="cursor-pointer hover:opacity-80"
              />
            </>
          )}
        </svg>
      </div>

      {selectedPart && (
        <Dialog open={!!selectedPart} onOpenChange={(open) => !open && closeDialog()}>
          <DialogContent className="bg-military-lightgreen text-military-text border-military-accent">
            <DialogHeader>
              <DialogTitle className="text-xl text-military-text font-bold">
                {partToLabel(selectedPart)} Injury
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="tccc-form-group">
                <Label className="tccc-label">Injury Description</Label>
                <Input 
                  className="tccc-input" 
                  value={tcccData.bodyInjuries[selectedPart].description}
                  onChange={(e) => updateBodyInjury(selectedPart, { description: e.target.value })}
                  placeholder="Describe the injury"
                />
              </div>
              
              <div className="tccc-form-group">
                <Label className="tccc-label">Time Noted</Label>
                <Input 
                  type="time"
                  className="tccc-input" 
                  value={tcccData.bodyInjuries[selectedPart].timeNoted}
                  onChange={(e) => updateBodyInjury(selectedPart, { timeNoted: e.target.value })}
                />
              </div>
              
              <div className="tccc-form-group">
                <Label className="tccc-label">Type of Wound</Label>
                <select 
                  className="tccc-input" 
                  value={tcccData.bodyInjuries[selectedPart].type}
                  onChange={(e) => updateBodyInjury(selectedPart, { type: e.target.value })}
                >
                  <option value="">Select Type</option>
                  <option value="Penetrating">Penetrating</option>
                  <option value="Blunt">Blunt</option>
                  <option value="Burn">Burn</option>
                  <option value="Amputation">Amputation</option>
                  <option value="Laceration">Laceration</option>
                  <option value="Abrasion">Abrasion</option>
                  <option value="Fracture">Fracture</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button 
                variant="default" 
                className="tccc-button"
                onClick={closeDialog}
              >
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default BodyDiagram;
