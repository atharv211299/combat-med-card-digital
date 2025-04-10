import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useTCCC } from "../contexts/TCCCContext";

const PageTwo: React.FC = () => {
  const { tcccData, updateTCCCData, addMedication, updateMedication } = useTCCC();

  const handleTimeUpdate = (type: string, location: string, time: string) => {
    if (type === "tourniquet") {
      updateTCCCData({
        interventions: {
          ...tcccData.interventions,
          tourniquetApplied: {
            ...tcccData.interventions.tourniquetApplied,
            [location]: {
              ...tcccData.interventions.tourniquetApplied[location as keyof typeof tcccData.interventions.tourniquetApplied],
              time
            }
          }
        }
      });
    } else if (type === "needle") {
      updateTCCCData({
        interventions: {
          ...tcccData.interventions,
          needleDecompression: {
            ...tcccData.interventions.needleDecompression,
            [location]: {
              ...tcccData.interventions.needleDecompression[location as keyof typeof tcccData.interventions.needleDecompression],
              time
            }
          }
        }
      });
    } else if (type === "airway") {
      updateTCCCData({
        interventions: {
          ...tcccData.interventions,
          airwayAdjunct: {
            ...tcccData.interventions.airwayAdjunct,
            [location]: {
              ...tcccData.interventions.airwayAdjunct[location as keyof typeof tcccData.interventions.airwayAdjunct],
              time
            }
          }
        }
      });
    }
  };

  const handleTourniquetChange = (location: string, applied: boolean) => {
    updateTCCCData({
      interventions: {
        ...tcccData.interventions,
        tourniquetApplied: {
          ...tcccData.interventions.tourniquetApplied,
          [location]: {
            ...tcccData.interventions.tourniquetApplied[location as keyof typeof tcccData.interventions.tourniquetApplied],
            applied
          }
        }
      }
    });
  };

  const handleNeedleChange = (location: string, applied: boolean) => {
    updateTCCCData({
      interventions: {
        ...tcccData.interventions,
        needleDecompression: {
          ...tcccData.interventions.needleDecompression,
          [location]: {
            ...tcccData.interventions.needleDecompression[location as keyof typeof tcccData.interventions.needleDecompression],
            applied
          }
        }
      }
    });
  };

  const handleAirwayChange = (type: string, applied: boolean) => {
    updateTCCCData({
      interventions: {
        ...tcccData.interventions,
        airwayAdjunct: {
          ...tcccData.interventions.airwayAdjunct,
          [type]: {
            ...tcccData.interventions.airwayAdjunct[type as keyof typeof tcccData.interventions.airwayAdjunct],
            applied
          }
        }
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Interventions Section */}
      <section className="tccc-section">
        <h2 className="tccc-section-title">5. Interventions</h2>
        
        {/* Tourniquets */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-military-text">Tourniquet Applied:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <div>
                <Checkbox 
                  id="leftUpperTQ" 
                  checked={tcccData.interventions.tourniquetApplied.leftUpper.applied}
                  onCheckedChange={(checked) => handleTourniquetChange("leftUpper", checked as boolean)}
                />
                <Label htmlFor="leftUpperTQ" className="ml-2">L Upper Extremity</Label>
              </div>
              {tcccData.interventions.tourniquetApplied.leftUpper.applied && (
                <div className="flex items-center">
                  <Label htmlFor="leftUpperTime" className="mr-2 whitespace-nowrap">Time:</Label>
                  <Input 
                    id="leftUpperTime" 
                    type="time" 
                    className="tccc-input w-32" 
                    value={tcccData.interventions.tourniquetApplied.leftUpper.time}
                    onChange={(e) => handleTimeUpdate("tourniquet", "leftUpper", e.target.value)}
                  />
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <div>
                <Checkbox 
                  id="rightUpperTQ" 
                  checked={tcccData.interventions.tourniquetApplied.rightUpper.applied}
                  onCheckedChange={(checked) => handleTourniquetChange("rightUpper", checked as boolean)}
                />
                <Label htmlFor="rightUpperTQ" className="ml-2">R Upper Extremity</Label>
              </div>
              {tcccData.interventions.tourniquetApplied.rightUpper.applied && (
                <div className="flex items-center">
                  <Label htmlFor="rightUpperTime" className="mr-2 whitespace-nowrap">Time:</Label>
                  <Input 
                    id="rightUpperTime" 
                    type="time" 
                    className="tccc-input w-32" 
                    value={tcccData.interventions.tourniquetApplied.rightUpper.time}
                    onChange={(e) => handleTimeUpdate("tourniquet", "rightUpper", e.target.value)}
                  />
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <div>
                <Checkbox 
                  id="leftLowerTQ" 
                  checked={tcccData.interventions.tourniquetApplied.leftLower.applied}
                  onCheckedChange={(checked) => handleTourniquetChange("leftLower", checked as boolean)}
                />
                <Label htmlFor="leftLowerTQ" className="ml-2">L Lower Extremity</Label>
              </div>
              {tcccData.interventions.tourniquetApplied.leftLower.applied && (
                <div className="flex items-center">
                  <Label htmlFor="leftLowerTime" className="mr-2 whitespace-nowrap">Time:</Label>
                  <Input 
                    id="leftLowerTime" 
                    type="time" 
                    className="tccc-input w-32" 
                    value={tcccData.interventions.tourniquetApplied.leftLower.time}
                    onChange={(e) => handleTimeUpdate("tourniquet", "leftLower", e.target.value)}
                  />
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <div>
                <Checkbox 
                  id="rightLowerTQ" 
                  checked={tcccData.interventions.tourniquetApplied.rightLower.applied}
                  onCheckedChange={(checked) => handleTourniquetChange("rightLower", checked as boolean)}
                />
                <Label htmlFor="rightLowerTQ" className="ml-2">R Lower Extremity</Label>
              </div>
              {tcccData.interventions.tourniquetApplied.rightLower.applied && (
                <div className="flex items-center">
                  <Label htmlFor="rightLowerTime" className="mr-2 whitespace-nowrap">Time:</Label>
                  <Input 
                    id="rightLowerTime" 
                    type="time" 
                    className="tccc-input w-32" 
                    value={tcccData.interventions.tourniquetApplied.rightLower.time}
                    onChange={(e) => handleTimeUpdate("tourniquet", "rightLower", e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Needle Decompression */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-military-text">Needle Decompression:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <div>
                <Checkbox 
                  id="leftChestND" 
                  checked={tcccData.interventions.needleDecompression.leftChest.applied}
                  onCheckedChange={(checked) => handleNeedleChange("leftChest", checked as boolean)}
                />
                <Label htmlFor="leftChestND" className="ml-2">L Chest</Label>
              </div>
              {tcccData.interventions.needleDecompression.leftChest.applied && (
                <div className="flex items-center">
                  <Label htmlFor="leftChestTime" className="mr-2 whitespace-nowrap">Time:</Label>
                  <Input 
                    id="leftChestTime" 
                    type="time" 
                    className="tccc-input w-32" 
                    value={tcccData.interventions.needleDecompression.leftChest.time}
                    onChange={(e) => handleTimeUpdate("needle", "leftChest", e.target.value)}
                  />
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <div>
                <Checkbox 
                  id="rightChestND" 
                  checked={tcccData.interventions.needleDecompression.rightChest.applied}
                  onCheckedChange={(checked) => handleNeedleChange("rightChest", checked as boolean)}
                />
                <Label htmlFor="rightChestND" className="ml-2">R Chest</Label>
              </div>
              {tcccData.interventions.needleDecompression.rightChest.applied && (
                <div className="flex items-center">
                  <Label htmlFor="rightChestTime" className="mr-2 whitespace-nowrap">Time:</Label>
                  <Input 
                    id="rightChestTime" 
                    type="time" 
                    className="tccc-input w-32" 
                    value={tcccData.interventions.needleDecompression.rightChest.time}
                    onChange={(e) => handleTimeUpdate("needle", "rightChest", e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Airway Adjunct */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-military-text">Airway Adjunct Used:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <div>
                <Checkbox 
                  id="npaAdjunct" 
                  checked={tcccData.interventions.airwayAdjunct.npa.applied}
                  onCheckedChange={(checked) => handleAirwayChange("npa", checked as boolean)}
                />
                <Label htmlFor="npaAdjunct" className="ml-2">NPA</Label>
              </div>
              {tcccData.interventions.airwayAdjunct.npa.applied && (
                <div className="flex items-center">
                  <Label htmlFor="npaTime" className="mr-2 whitespace-nowrap">Time:</Label>
                  <Input 
                    id="npaTime" 
                    type="time" 
                    className="tccc-input w-32" 
                    value={tcccData.interventions.airwayAdjunct.npa.time}
                    onChange={(e) => handleTimeUpdate("airway", "npa", e.target.value)}
                  />
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <div>
                <Checkbox 
                  id="opaAdjunct" 
                  checked={tcccData.interventions.airwayAdjunct.opa.applied}
                  onCheckedChange={(checked) => handleAirwayChange("opa", checked as boolean)}
                />
                <Label htmlFor="opaAdjunct" className="ml-2">OPA</Label>
              </div>
              {tcccData.interventions.airwayAdjunct.opa.applied && (
                <div className="flex items-center">
                  <Label htmlFor="opaTime" className="mr-2 whitespace-nowrap">Time:</Label>
                  <Input 
                    id="opaTime" 
                    type="time" 
                    className="tccc-input w-32" 
                    value={tcccData.interventions.airwayAdjunct.opa.time}
                    onChange={(e) => handleTimeUpdate("airway", "opa", e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Other Interventions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-military-text">Other Interventions:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="chestSeal" 
                checked={tcccData.interventions.chestSeal}
                onCheckedChange={(checked) => updateTCCCData({
                  interventions: { ...tcccData.interventions, chestSeal: checked as boolean }
                })}
              />
              <Label htmlFor="chestSeal" className="text-military-text">Chest Seal</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="ivIoPlacement" 
                checked={tcccData.interventions.ivIoPlacement}
                onCheckedChange={(checked) => updateTCCCData({
                  interventions: { ...tcccData.interventions, ivIoPlacement: checked as boolean }
                })}
              />
              <Label htmlFor="ivIoPlacement" className="text-military-text">IV/IO Placement</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="hypothermiaPrevention" 
                checked={tcccData.interventions.hypothermiaPrevention}
                onCheckedChange={(checked) => updateTCCCData({
                  interventions: { ...tcccData.interventions, hypothermiaPrevention: checked as boolean }
                })}
              />
              <Label htmlFor="hypothermiaPrevention" className="text-military-text">Hypothermia Prevention</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="painMedsAdministered" 
                checked={tcccData.interventions.painMedsAdministered}
                onCheckedChange={(checked) => updateTCCCData({
                  interventions: { ...tcccData.interventions, painMedsAdministered: checked as boolean }
                })}
              />
              <Label htmlFor="painMedsAdministered" className="text-military-text">Pain Meds</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="bloodTransfusion" 
                checked={tcccData.interventions.bloodTransfusion}
                onCheckedChange={(checked) => updateTCCCData({
                  interventions: { ...tcccData.interventions, bloodTransfusion: checked as boolean }
                })}
              />
              <Label htmlFor="bloodTransfusion" className="text-military-text">Blood Transfusion</Label>
            </div>
          </div>
        </div>
        
        {/* Medications */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-military-text">Medications Given:</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-military-accent bg-opacity-20">
                  <th className="p-2 border border-military-accent text-left">Name</th>
                  <th className="p-2 border border-military-accent text-left">Dosage</th>
                  <th className="p-2 border border-military-accent text-left">Route</th>
                  <th className="p-2 border border-military-accent text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                {tcccData.interventions.medications.map((med, index) => (
                  <tr key={index}>
                    <td className="p-2 border border-military-accent">
                      <Input 
                        className="tccc-input" 
                        value={med.name}
                        onChange={(e) => updateMedication(index, { name: e.target.value })}
                        placeholder="Medication name"
                      />
                    </td>
                    <td className="p-2 border border-military-accent">
                      <Input 
                        className="tccc-input" 
                        value={med.dosage}
                        onChange={(e) => updateMedication(index, { dosage: e.target.value })}
                        placeholder="Dosage"
                      />
                    </td>
                    <td className="p-2 border border-military-accent">
                      <select
                        className="tccc-input" 
                        value={med.route}
                        onChange={(e) => updateMedication(index, { route: e.target.value })}
                      >
                        <option value="">Select Route</option>
                        <option value="IV">IV</option>
                        <option value="IO">IO</option>
                        <option value="IM">IM</option>
                        <option value="PO">PO</option>
                        <option value="SQ">SQ</option>
                        <option value="IN">IN</option>
                        <option value="PR">PR</option>
                        <option value="SL">SL</option>
                        <option value="TD">TD</option>
                      </select>
                    </td>
                    <td className="p-2 border border-military-accent">
                      <Input 
                        type="time" 
                        className="tccc-input" 
                        value={med.time}
                        onChange={(e) => updateMedication(index, { time: e.target.value })}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Button 
              variant="default" 
              className="tccc-button"
              onClick={addMedication}
            >
              Add Medication
            </Button>
          </div>
        </div>
      </section>

      {/* Evacuation Info Section */}
      <section className="tccc-section">
        <h2 className="tccc-section-title">6. Evacuation Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="tccc-form-group">
            <Label htmlFor="evacuationMode" className="tccc-label">Mode of Evacuation</Label>
            <select
              id="evacuationMode"
              className="tccc-input"
              value={tcccData.evacuationInfo.mode}
              onChange={(e) => updateTCCCData({
                evacuationInfo: { ...tcccData.evacuationInfo, mode: e.target.value }
              })}
            >
              <option value="">Select Mode</option>
              <option value="Ground">Ground</option>
              <option value="Air">Air</option>
              <option value="Foot">Foot</option>
              <option value="Sea">Sea</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="departureTime" className="tccc-label">Time of Departure</Label>
            <Input
              id="departureTime"
              type="time"
              className="tccc-input"
              value={tcccData.evacuationInfo.timeDeparture}
              onChange={(e) => updateTCCCData({
                evacuationInfo: { ...tcccData.evacuationInfo, timeDeparture: e.target.value }
              })}
            />
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="receivingFacility" className="tccc-label">Receiving Facility</Label>
            <Input
              id="receivingFacility"
              className="tccc-input"
              value={tcccData.evacuationInfo.receivingFacility}
              onChange={(e) => updateTCCCData({
                evacuationInfo: { ...tcccData.evacuationInfo, receivingFacility: e.target.value }
              })}
              placeholder="Facility name"
            />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="tccc-section">
        <h2 className="tccc-section-title">7. Narrative/Free Text</h2>
        <Textarea
          className="tccc-input min-h-32"
          value={tcccData.narrative}
          onChange={(e) => updateTCCCData({ narrative: e.target.value })}
          placeholder="Enter notes and observations here..."
        />
      </section>

      {/* Signature Section */}
      <section className="tccc-section">
        <h2 className="tccc-section-title">8. Signature & Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="tccc-form-group">
            <Label htmlFor="signature" className="tccc-label">Signature</Label>
            <Input
              id="signature"
              className="tccc-input"
              value={tcccData.signature}
              onChange={(e) => updateTCCCData({ signature: e.target.value })}
              placeholder="Digital Signature"
            />
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="role" className="tccc-label">Role</Label>
            <select
              id="role"
              className="tccc-input"
              value={tcccData.role}
              onChange={(e) => updateTCCCData({ role: e.target.value })}
            >
              <option value="">Select Role</option>
              <option value="Medic">Medic</option>
              <option value="Casevac Officer">Casevac Officer</option>
              <option value="Corpsman">Corpsman</option>
              <option value="Physician">Physician</option>
              <option value="Physician Assistant">Physician Assistant</option>
              <option value="Nurse">Nurse</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="signatureDateTime" className="tccc-label">Date/Time</Label>
            <Input
              id="signatureDateTime"
              type="datetime-local"
              className="tccc-input"
              value={tcccData.signatureDateTime}
              onChange={(e) => updateTCCCData({ signatureDateTime: e.target.value })}
            />
          </div>
        </div>
      </section>

      <div className="flex justify-between mt-6">
        <Link to="/">
          <Button className="tccc-button">
            ← Previous Page
          </Button>
        </Link>
        
        <Button
          className="tccc-button"
          onClick={() => {
            useTCCC().saveData();
            window.print();
          }}
        >
          Print Card
        </Button>
      </div>
    </div>
  );
};

export default PageTwo;
