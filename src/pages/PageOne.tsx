
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTCCC } from "../contexts/TCCCContext";
import BodyDiagram from "../components/BodyDiagram";
import { Link } from "react-router-dom";

const PageOne: React.FC = () => {
  const { tcccData, updateTCCCData, addVitalSign, updateVitalSign } = useTCCC();

  const handleMechanismChange = (mechanism: keyof typeof tcccData.mechanismOfInjury, checked: boolean) => {
    updateTCCCData({
      mechanismOfInjury: {
        ...tcccData.mechanismOfInjury,
        [mechanism]: checked
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Patient Identification Section */}
      <section className="tccc-section">
        <h2 className="tccc-section-title">1. Patient Identification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="tccc-form-group">
            <Label htmlFor="fullName" className="tccc-label">Full Name</Label>
            <Input
              id="fullName"
              className="tccc-input"
              value={tcccData.fullName}
              onChange={(e) => updateTCCCData({ fullName: e.target.value })}
              placeholder="Last, First MI"
            />
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="dateOfInjury" className="tccc-label">Date of Injury</Label>
            <Input
              id="dateOfInjury"
              type="date"
              className="tccc-input"
              value={tcccData.dateOfInjury}
              onChange={(e) => updateTCCCData({ dateOfInjury: e.target.value })}
            />
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="timeOfInjury" className="tccc-label">Time of Injury</Label>
            <Input
              id="timeOfInjury"
              type="time"
              className="tccc-input"
              value={tcccData.timeOfInjury}
              onChange={(e) => updateTCCCData({ timeOfInjury: e.target.value })}
            />
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="serviceId" className="tccc-label">Service/ID Number</Label>
            <Input
              id="serviceId"
              className="tccc-input"
              value={tcccData.serviceId}
              onChange={(e) => updateTCCCData({ serviceId: e.target.value })}
            />
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="gender" className="tccc-label">Gender</Label>
            <select
              id="gender"
              className="tccc-input"
              value={tcccData.gender}
              onChange={(e) => updateTCCCData({ gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="bloodType" className="tccc-label">Blood Type</Label>
            <select
              id="bloodType"
              className="tccc-input"
              value={tcccData.bloodType}
              onChange={(e) => updateTCCCData({ bloodType: e.target.value })}
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="unit" className="tccc-label">Unit</Label>
            <Input
              id="unit"
              className="tccc-input"
              value={tcccData.unit}
              onChange={(e) => updateTCCCData({ unit: e.target.value })}
            />
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="age" className="tccc-label">Age</Label>
            <Input
              id="age"
              type="number"
              className="tccc-input"
              value={tcccData.age}
              onChange={(e) => updateTCCCData({ age: e.target.value })}
            />
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="rank" className="tccc-label">Rank</Label>
            <Input
              id="rank"
              className="tccc-input"
              value={tcccData.rank}
              onChange={(e) => updateTCCCData({ rank: e.target.value })}
            />
          </div>

          <div className="tccc-form-group">
            <Label htmlFor="branchOfService" className="tccc-label">Branch of Service</Label>
            <select
              id="branchOfService"
              className="tccc-input"
              value={tcccData.branchOfService}
              onChange={(e) => updateTCCCData({ branchOfService: e.target.value })}
            >
              <option value="">Select Branch</option>
              <option value="Army">Army</option>
              <option value="Navy">Navy</option>
              <option value="Air Force">Air Force</option>
              <option value="Marines">Marines</option>
              <option value="Coast Guard">Coast Guard</option>
              <option value="Space Force">Space Force</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </section>

      {/* Mechanism of Injury Section */}
      <section className="tccc-section">
        <h2 className="tccc-section-title">2. Mechanism of Injury</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="gsw" 
              checked={tcccData.mechanismOfInjury.gsw}
              onCheckedChange={(checked) => handleMechanismChange("gsw", checked as boolean)}
            />
            <Label htmlFor="gsw" className="text-military-text">GSW</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="bluntTrauma" 
              checked={tcccData.mechanismOfInjury.bluntTrauma}
              onCheckedChange={(checked) => handleMechanismChange("bluntTrauma", checked as boolean)}
            />
            <Label htmlFor="bluntTrauma" className="text-military-text">Blunt Trauma</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="blast" 
              checked={tcccData.mechanismOfInjury.blast}
              onCheckedChange={(checked) => handleMechanismChange("blast", checked as boolean)}
            />
            <Label htmlFor="blast" className="text-military-text">Blast</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="burn" 
              checked={tcccData.mechanismOfInjury.burn}
              onCheckedChange={(checked) => handleMechanismChange("burn", checked as boolean)}
            />
            <Label htmlFor="burn" className="text-military-text">Burn</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="mvc" 
              checked={tcccData.mechanismOfInjury.mvc}
              onCheckedChange={(checked) => handleMechanismChange("mvc", checked as boolean)}
            />
            <Label htmlFor="mvc" className="text-military-text">MVC</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="fall" 
              checked={tcccData.mechanismOfInjury.fall}
              onCheckedChange={(checked) => handleMechanismChange("fall", checked as boolean)}
            />
            <Label htmlFor="fall" className="text-military-text">Fall</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="other" 
              checked={tcccData.mechanismOfInjury.other}
              onCheckedChange={(checked) => handleMechanismChange("other", checked as boolean)}
            />
            <Label htmlFor="other" className="text-military-text">Other</Label>
          </div>
        </div>
        
        {tcccData.mechanismOfInjury.other && (
          <div className="mt-4">
            <Label htmlFor="otherDescription" className="tccc-label">Specify Other:</Label>
            <Input
              id="otherDescription"
              className="tccc-input"
              value={tcccData.mechanismOfInjury.otherDescription}
              onChange={(e) => updateTCCCData({
                mechanismOfInjury: {
                  ...tcccData.mechanismOfInjury,
                  otherDescription: e.target.value
                }
              })}
              placeholder="Describe other mechanism of injury"
            />
          </div>
        )}
      </section>

      {/* Injuries by Body Region Section */}
      <section className="tccc-section">
        <h2 className="tccc-section-title">3. Injuries by Body Region</h2>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="w-full md:w-1/2 p-4">
            <p className="text-military-text mb-4 text-center">
              Click on a body region to document injuries. Regions with documented injuries will appear in red.
            </p>
            <BodyDiagram />
          </div>
        </div>
      </section>

      {/* Vital Signs Section */}
      <section className="tccc-section">
        <h2 className="tccc-section-title">4. Vital Signs</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-military-accent bg-opacity-20">
                <th className="p-2 border border-military-accent text-left">Time</th>
                <th className="p-2 border border-military-accent text-left">Pulse</th>
                <th className="p-2 border border-military-accent text-left">Respirations</th>
                <th className="p-2 border border-military-accent text-left">Blood Pressure</th>
                <th className="p-2 border border-military-accent text-left">SpO2</th>
                <th className="p-2 border border-military-accent text-left">GCS (E/V/M)</th>
                <th className="p-2 border border-military-accent text-left">Temperature</th>
              </tr>
            </thead>
            <tbody>
              {tcccData.vitalSigns.map((vs, index) => (
                <tr key={index}>
                  <td className="p-2 border border-military-accent">
                    <Input 
                      type="time" 
                      className="tccc-input" 
                      value={vs.time}
                      onChange={(e) => updateVitalSign(index, { time: e.target.value })}
                    />
                  </td>
                  <td className="p-2 border border-military-accent">
                    <Input 
                      className="tccc-input" 
                      value={vs.pulse}
                      onChange={(e) => updateVitalSign(index, { pulse: e.target.value })}
                      placeholder="BPM"
                    />
                  </td>
                  <td className="p-2 border border-military-accent">
                    <Input 
                      className="tccc-input" 
                      value={vs.respiration}
                      onChange={(e) => updateVitalSign(index, { respiration: e.target.value })}
                      placeholder="Rate"
                    />
                  </td>
                  <td className="p-2 border border-military-accent">
                    <Input 
                      className="tccc-input" 
                      value={vs.bloodPressure}
                      onChange={(e) => updateVitalSign(index, { bloodPressure: e.target.value })}
                      placeholder="Sys/Dia"
                    />
                  </td>
                  <td className="p-2 border border-military-accent">
                    <Input 
                      className="tccc-input" 
                      value={vs.spO2}
                      onChange={(e) => updateVitalSign(index, { spO2: e.target.value })}
                      placeholder="%"
                    />
                  </td>
                  <td className="p-2 border border-military-accent">
                    <div className="flex space-x-1">
                      <Input 
                        className="tccc-input w-12" 
                        value={vs.gcsEye}
                        onChange={(e) => updateVitalSign(index, { gcsEye: e.target.value })}
                        placeholder="E"
                      />
                      <Input 
                        className="tccc-input w-12" 
                        value={vs.gcsVerbal}
                        onChange={(e) => updateVitalSign(index, { gcsVerbal: e.target.value })}
                        placeholder="V"
                      />
                      <Input 
                        className="tccc-input w-12" 
                        value={vs.gcsMotor}
                        onChange={(e) => updateVitalSign(index, { gcsMotor: e.target.value })}
                        placeholder="M"
                      />
                    </div>
                  </td>
                  <td className="p-2 border border-military-accent">
                    <Input 
                      className="tccc-input" 
                      value={vs.temperature}
                      onChange={(e) => updateVitalSign(index, { temperature: e.target.value })}
                      placeholder="°C/°F"
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
            onClick={addVitalSign}
          >
            Add Vital Sign
          </Button>
        </div>
      </section>

      <div className="flex justify-end mt-6">
        <Link to="/page-two">
          <Button className="tccc-button">
            Next Page →
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PageOne;
