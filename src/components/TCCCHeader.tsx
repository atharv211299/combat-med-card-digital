
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTCCC } from "../contexts/TCCCContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TCCCHeader: React.FC = () => {
  const location = useLocation();
  const { saveData, tcccData } = useTCCC();

  const handleSave = () => {
    saveData();
    toast.success("TCCC Card data saved locally");
  };

  const exportData = () => {
    // Create a blob of the data
    const dataStr = JSON.stringify(tcccData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    
    // Create a URL for our blob
    const url = URL.createObjectURL(dataBlob);
    
    // Create a link element
    const link = document.createElement("a");
    link.href = url;
    link.download = `TCCC_Card_${tcccData.fullName || "Unknown"}_${new Date().toISOString().split("T")[0]}.json`;
    
    // Append the link to the body, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
    
    toast.success("TCCC Card data exported successfully");
  };

  return (
    <header className="bg-military-lightgreen shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-military-text">
              TACTICAL COMBAT CASUALTY CARE (TCCC) CARD
            </h1>
          </div>
          
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex space-x-2 mr-4">
              <Link 
                to="/" 
                className={`tccc-tab ${location.pathname === "/" ? "tccc-tab-active" : "tccc-tab-inactive"}`}
              >
                Page 1
              </Link>
              <Link 
                to="/page-two"
                className={`tccc-tab ${location.pathname === "/page-two" ? "tccc-tab-active" : "tccc-tab-inactive"}`}
              >
                Page 2
              </Link>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="default" 
                className="tccc-button bg-military-accent"
                onClick={handleSave}
              >
                Save
              </Button>
              <Button 
                variant="outline" 
                className="tccc-button bg-military-green border-military-accent"
                onClick={exportData}
              >
                Export
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <label className="tccc-label mr-2">BATTLE ROSTER #:</label>
            <input 
              type="text" 
              className="tccc-input w-40" 
              value={tcccData.battleRosterNumber}
              onChange={(e) => useTCCC().updateTCCCData({ battleRosterNumber: e.target.value })}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="tccc-label">EVAC:</span>
            <label className="tccc-checkbox-label">
              <input 
                type="radio" 
                name="evacPriority" 
                className="mr-1" 
                checked={tcccData.evacuationPriority === "Urgent"}
                onChange={() => useTCCC().updateTCCCData({ evacuationPriority: "Urgent" })}
              />
              <span className="ml-1 mr-3">Urgent</span>
            </label>
            <label className="tccc-checkbox-label">
              <input 
                type="radio" 
                name="evacPriority" 
                className="mr-1" 
                checked={tcccData.evacuationPriority === "Priority"}
                onChange={() => useTCCC().updateTCCCData({ evacuationPriority: "Priority" })}
              />
              <span className="ml-1 mr-3">Priority</span>
            </label>
            <label className="tccc-checkbox-label">
              <input 
                type="radio" 
                name="evacPriority" 
                className="mr-1" 
                checked={tcccData.evacuationPriority === "Routine"}
                onChange={() => useTCCC().updateTCCCData({ evacuationPriority: "Routine" })}
              />
              <span className="ml-1 mr-3">Routine</span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TCCCHeader;
